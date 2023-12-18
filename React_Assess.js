// import React from 'react';
import { hover } from "@testing-library/user-event/dist/hover";
import React, {useState} from "react";

const React_Assess = () => {
    // Step 1: Declare React states for search input values
    const [searchTerm, setSearchTerm] = useState("");
    const [items, setItems] = useState([
        "Apple", "Banana", "PineApple", "Orange", "Mango", "Kiwi", "WaterMelon", "Strawberry"
    ]);

    // Step 2: Create HTML input text for entering search term and update state in onChange function
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    // Step 3: Add Array.filter() on list of items with search term value
    const filteredItems = items.filter((item) =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Business logic: Display the filtered items in the console
    console.log('filtered Items :', filteredItems);

    const h2 = {
        textAlign : "center",
        fontSize : "40px"
    }
    const div = {
        width : "550px",
        margin : "0 auto",
        backgroundColor : "#333",
        padding : "20px",
        borderRadius : "10px"
    }
    const input = {
        marginLeft : "100px",
        padding:"10px 20px",
        fontSize : "25px",
        borderRadius : "5px",
        border : "3px solid #333"
    }
    const ul ={
        marginLeft : "55px",
       fontSize : "30px",
       color: "seagreen",
       fontWeight : "700",
       cursor : "pointer",
    // $nest : {
    // '& : hover' : {
    //     TextDecoderation : "underLine",
    //     color : "red"
    // }
    // }
}
    
  return (
    <>
    <h2 style={h2}>Build Search filter in React</h2>
    <div style={div}> 
      <input style={input} type="text" placeholder="Search..." value={searchTerm} onChange={handleSearch} />
        {/* Display filtered items */}
        <ul style={ul}>
            {filteredItems.map((item, index) => (
                <li key={index}> {item}</li>
            ))}
        </ul>
    </div>
    </>
  )
}

export default React_Assess;