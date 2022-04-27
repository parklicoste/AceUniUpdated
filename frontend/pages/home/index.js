import React from 'react';
import SearchResult from './search';
import Layout from '../components/layout/Layout';
import secureRouteHandler from '../../lib/secureRouteHandler';


// export function Layout({ Component, pageProps }) {

//   return Layout = Component.Layout || EmptyLayout;
// }
// const EmptyLayout = ({children}) => <>{children}</>;
// export default MyPage
const HomePage = props => {
  return (
    <Layout>
      <div><SearchResult {...props} /></div>
    </Layout>
  )
}

export const getServerSideProps = secureRouteHandler;

export default HomePage;