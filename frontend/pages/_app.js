// import '../styles/globals.css's
import 'carbon-components/css/carbon-components.min.css'
import AppProps from 'next/app'
import { React } from 'react'
import Home from '.'
import ContextProviders from '../context'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  // const Layout = Component.Layout || De;
  return (
    <ContextProviders user={pageProps.user}>
      <div className="container">
        <link rel="stylesheet" href="https://unpkg.com/carbon-grid/dist/css/carbon-grid.css"></link>
        <Component {...pageProps} />
      </div>
    </ContextProviders>
  )

}

// const EmptyLayout = ({ children }) => <>{children}</>

export default MyApp