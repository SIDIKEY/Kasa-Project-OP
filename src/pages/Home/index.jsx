import React from 'react';
import Nav from '../../components/nav.jsx';
import "./index.css";
import Banner from "../../components/banner.jsx"
import Accomodationgrid from '../../components/Grid_accomodation.jsx';



function Home() {
  
  return(
    <div>
    
     <Nav />
     <Banner />
     <Accomodationgrid />
  </div>
  )
  
                    
      
}

export default Home