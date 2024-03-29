import React, { useEffect, useState } from 'react';
import { Search } from "carbon-components-react";
import axios from 'axios';
import styles from './styles.module.css';
    
const SearchResult = props => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([])
  console.log(results);
  useEffect(() => {
    console.log(props)
    // axios.post('', data, {
    //   headers
    // })
    axios.get(`http://localhost:8080/api/material?search=${search}`, {
      headers: {
        'Authorization': 'Bearer ' + props.user.token
      }
    })
    .then(res => setResults(res.data))
    .catch(err => console.log(err))
  }, [search])

  return(
          <div className="container">
            <h2>Hello {props.user.name || 'Acer'}</h2>
            <Search
            size="xl"
            defaultValue=""
            placeholder='Course, University, or material'
            labelText="Search"
            closeButtonLabelText="Clear search input"
            id="search-1"
              onChange={e => setSearch(e.target.value)}
            />
                <div className={styles.root}>
                  {results.map(material => <div key={material._id}>{material.description}</div>)}
                  </div>        
          </div>
  );

}


export default  SearchResult;

// const StoryContent = () => {
//     const content = (
//       <div className="bx--grid">
//         <div className="bx--row">
//           <section className="bx--offset-lg-3 bx--col-lg-13">
//             <h2
//               style={{
//                 fontWeight: "800",
//                 margin: "30px 0",
//                 fontSize: "20px"
//               }}
//             >
//               Purpose and function
//             </h2>
//             <p style={{ lineHeight: "20px" }}>
//               The shell is perhaps the most crucial piece of any UI built with
//               Carbon. It contains the shared navigation framework for the entire
//               design system and ties the products in IBM’s portfolio together in a
//               cohesive and elegant way. The shell is the home of the topmost
//               navigation, where users can quickly and dependably gain their
//               bearings and move between pages.
//               <br />
//               <br />
//               The shell was designed with maximum flexibility built in, to serve
//               the needs of a broad range of products and users. Adopting the shell
//               ensures compliance with IBM design standards, simplifies development
//               efforts, and provides great user experiences. All IBM products built
//               with Carbon are required to use the shell’s header.
//               <br />
//               <br />
//               To better understand the purpose and function of the UI shell,
//               consider the “shell” of MacOS, which contains the Apple menu,
//               top-level navigation, and universal, OS-level controls at the top of
//               the screen, as well as a universal dock along the bottom or side of
//               the screen. The Carbon UI shell is roughly analogous in function to
//               these parts of the Mac UI. For example, the app switcher portion of
//               the shell can be compared to the dock in MacOS.
//             </p>
//             <h2
//               style={{
//                 fontWeight: "800",
//                 margin: "30px 0",
//                 fontSize: "20px"
//               }}
//             >
//               Header responsive behavior
//             </h2>
//             <p style={{ lineHeight: "20px" }}>
//               As a header scales down to fit smaller screen sizes, headers with
//               persistent side nav menus should have the side nav collapse into
//               “hamburger” menu. See the example to better understand responsive
//               behavior of the header.
//             </p>
//             <h2
//               style={{
//                 fontWeight: "800",
//                 margin: "30px 0",
//                 fontSize: "20px"
//               }}
//             >
//               Secondary navigation
//             </h2>
//             <p style={{ lineHeight: "20px" }}>
//               The side-nav contains secondary navigation and fits below the
//               header. It can be configured to be either fixed-width or flexible,
//               with only one level of nested items allowed. Both links and category
//               lists can be used in the side-nav and may be mixed together. There
//               are several configurations of the side-nav, but only one
//               configuration should be used per product section. If tabs are needed
//               on a page when using a side-nav, then the tabs are secondary in
//               hierarchy to the side-nav.
//             </p>
//           </section>
//         </div>
//       </div>
//     );
  
//     return <Content id="main-content">{content}</Content>;
//   };