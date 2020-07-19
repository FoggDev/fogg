import ApolloClient from 'apollo-client'
import 'isomorphic-unfetch'
import { InitApolloOptions } from './types'

let _apolloClient: ApolloClient<any>

export default function initApollo<TCache = any>(
  clientFn: any,
  options?: InitApolloOptions<TCache>
): ApolloClient<TCache> {
  if (!clientFn) {
    throw new Error(
      '[withApollo] the first param is missing and is required to get the ApolloClient'
    )
  }

  if (typeof window === 'undefined') {
    return getClient<TCache>(clientFn, options)
  }

  if (!_apolloClient) {
    _apolloClient = getClient<TCache>(clientFn, options)
  }

  return _apolloClient
}

function getClient<TCache>(
  clientFn: any,
  options: InitApolloOptions<TCache> = {}
) {
  if (typeof clientFn !== 'function') {
    throw new Error('[withApollo] requires a function that returns an ApolloClient')
  }

  return clientFn(options)
}
