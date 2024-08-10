import React, { useState, useEffect } from "react";
import Slideshow from "./Slideshow";
import "../components/AccomodationComponent.css"

function AccomodationComponent({lodgingId}){
    

    const [data, setData] = useState();
    console.log(data);
    
    useEffect(() => {

      const fetchData = async () => {
        // Par contre tu dois me déco sinon je vais te faire des requêtes à l'infini
        // hahah
        // je vais foutre le zbeul
        // Déco moi sinon je vais tout casser
        // je vais tout casser mouhahahahah
        try {
          const response = await fetch("../Accomodations.json");
          const jsonData = await response.json();
          if (jsonData.length) {
            setData(jsonData.find((item) => item.id === lodgingId));
          }
        
        } catch (error) {
            console.log(error, "error");
          }
        };



      if (lodgingId) {
        fetchData();
      }

    }, [lodgingId]); 




        return  <div>
                  

                {data && <div>
                    <div>
                    <Slideshow lodgingCover={data.cover}/>
                    </div>
                    <div className="info_wrapper">
                      <div className="lodging_info"> 
                        <h1>{data?.title}</h1>
                        <p>{data?.location}</p>
                      </div>
                      
                      <div className="host_info">
                        <p>{data?.host.name}</p>
                        <img src={data?.host.picture} alt="host picture" className="host_pic" />
                      </div> 

                    </div>
                    
                    
                    
                </div>}
                </div>

}

export default AccomodationComponent;