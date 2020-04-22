import React from 'react'
import '../css/tailwind.css'

import { ApolloProvider } from '@apollo/react-hooks'
import withData from '../apollo-client-config'

const MyApp = props => {
  const { Component, pageProps, apollo } = props

  return (
    <ApolloProvider client={apollo}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default withData(MyApp)
