import { getDataFromTree } from '@apollo/react-ssr'
import ApolloClient from 'apollo-client'
import { AppProps, default as NextApp } from 'next/app'
import Head from 'next/head'
import React from 'react'
import initApollo from './apollo'
import {
  ApolloContext,
  WithApolloOptions,
  WithApolloProps,
  WithApolloState
} from './types'

function getDisplayName(Component: React.ComponentType<any>) {
  return Component.displayName || Component.name || 'Unknown'
}

export default function withApollo<TCache = any>(
  client: any,
  options: WithApolloOptions = {}
) {
  type ApolloProps = WithApolloProps<TCache> & AppProps

  if (!options.getDataFromTree) {
    options.getDataFromTree = 'always'
  }

  return (App: typeof NextApp) => {
    return class WithApollo extends React.Component<ApolloProps> {
      public static displayName = `WithApollo(${getDisplayName(App)})`

      public static getInitialProps = async (appCtx: ApolloContext) => {
        const { AppTree, ctx } = appCtx
        const headers = ctx.req ? ctx.req.headers : {}
        const apollo = initApollo<TCache>(client, { ctx, headers })
        const apolloState: WithApolloState<TCache> = {}
        const getInitialProps = App.getInitialProps
        let appProps = { pageProps: {} }

        if (getInitialProps) {
          ctx.apolloClient = apollo
          appProps = await getInitialProps(appCtx)
        }

        if (ctx.res && (ctx.res.headersSent || ctx.res.finished)) {
          return {}
        }

        if (
          options.getDataFromTree === 'always' ||
          (options.getDataFromTree === 'ssr' && typeof window === 'undefined')
        ) {
          try {
            await getDataFromTree(
              <AppTree {...appProps} apolloState={apolloState} apollo={apollo} />
            )
          } catch (error) {
            if (process.env.NODE_ENV !== 'production') {
              // tslint:disable-next-line no-console This is a necessary debugging log
              console.error('GraphQL error occurred [getDataFromTree]', error)
            }
          }

          if (typeof window === 'undefined') {
            Head.rewind()
          }

          apolloState.data = apollo.cache.extract()
        }

        ; (apollo as any).toJSON = () => {
          return null
        }

        return {
          ...appProps,
          apolloState,
          apollo
        }
      }

      public apollo: ApolloClient<TCache>

      constructor(props: ApolloProps) {
        super(props)

        this.apollo =
          props.apollo ||
          initApollo<TCache>(client, {
            initialState: props.apolloState.data
          })
      }

      public render() {
        return <App {...this.props} apollo={this.apollo} />
      }
    }
  }
}
