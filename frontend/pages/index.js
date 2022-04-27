import React, { useEffect,useState } from "react"
import Router from 'next/router'
import Login from './login'

// import styles from '../node_modules/carbon-components-react/umd/carbon-components-react.min.js'


export default function Home() {
  const [loaded,setLoaded] = useState(false)
    useEffect(() => {
        const {pathname} = Router
        // conditional redirect
        if(pathname == '/' ){
            // with router.push the page may be added to history
            // the browser on history back will  go back to this page and then forward again to the redirected page
            // you can prevent this behaviour using location.replace
            Router.push('/login')
           //location.replace("/hello-nextjs")
        }else{
            setLoaded(false)
        }
      },[]);
    return ( <div></div>
    //   <Layout>
    //     <Login/>
    // </Layout>
    )
}
