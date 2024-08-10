import React, { useState, useEffect } from "react";

const DisplayPage = () => {
 const [data, setData] = useState([]);

useEffect(() => {
const fetchData = async () => {
  try {
    const response = await fetch("./Accomodation.json");
    const jsonData = await response.json();
    console.log(jsonData); // logs the data to the console
    setData(jsonData);
  } catch (error) {
    console.log(error, "error"); // logs the error message to the console
  }
};
fetchData();
}, []);    

return (
<>
            
            
            {
                 
                   data.map((dataItem) => (
     
                     <div>  {dataItem.id} {dataItem.title} </div>
         
                   ))
             }  
                
</>
)}; 
export default DisplayPage
