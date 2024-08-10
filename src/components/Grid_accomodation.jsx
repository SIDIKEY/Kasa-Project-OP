import React from "react";
import { useEffect, useState } from "react";
import DisplayCards from "./Accommodation_cards";
import "./Grid_accomodation.css";


function Accomodationgrid(){
    const [data, setData] = useState([]);

    useEffect(() => {
       const fetchData = async () => {
       try {
       const response = await fetch("Accomodations.json");
       const jsonData = await response.json();
       console.log(jsonData);
       setData(jsonData);
       
       } catch (error) 
       {console.log(error, "error");}
       };
       fetchData();
    }, []);




    return     (
        <>
            <div  className="grid">
            
       {
            
              data.map((dataItem) => (

                <DisplayCards  id={dataItem.id}  key = {dataItem.id} cover={dataItem.cover} title={dataItem.title}/>
    
              ))
        }  
            </div> 
        </>
      )}; 
export default Accomodationgrid