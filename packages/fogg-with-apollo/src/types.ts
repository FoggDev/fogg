import ApolloClient from 'apollo-client'
import { IncomingHttpHeaders } from 'http'
import { NextPageContext } from 'next'
import { AppContext } from 'next/app'

export interface WithApolloOptions {
  getDataFromTree?: 'always' | 'never' | 'ssr'
}

export interface WithApolloState<TCache> {
  data?: TCache
}

export interface WithApolloProps<TCache> {
  apolloState: WithApolloState<TCache>
  apollo: ApolloClient<TCache>
}

export interface InitApolloOptions<TCache> {
  ctx?: NextPageContext
  headers?: IncomingHttpHeaders
  initialState?: TCache
}

export interface ApolloAppContext<C = any> extends NextPageContext {
  apolloClient: ApolloClient<C>
}

export interface ApolloContext<C = any> extends AppContext {
  ctx: ApolloAppContext<C>
  AppTree: any
}
