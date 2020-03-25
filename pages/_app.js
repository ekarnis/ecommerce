import React from 'react'
import App from 'next/app'
import '../css/tailwind.css'

import { ApolloProvider } from '@apollo/react-hooks'
import withData from '../apollo-client-config'
class MyApp extends App {
  render () {
    const { Component, pageProps, apollo } = this.props
    return (
      <ApolloProvider client={apollo}>
        <Component {...pageProps} />
      </ApolloProvider>
    )
  }
}

export default withData(MyApp)
