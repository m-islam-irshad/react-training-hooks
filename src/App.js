import React, { useState } from "react";
import Accordion from "./Components/Accordion";
import CurrentCount from "./Components/CurrentCount";
import Search from "./Components/Search";
import Dropdown from "./Components/Dropdown";
import Translate from "./Components/Translate";
import Exercise from "./Components/Exercise";

const items = [
    {
        title: "Whais is React?",
        content: "React is a front end javascript library"
    },
    {
        title: "Why use React?",
        content: "React is a favorite JS library among engineers"
    },
    {
        title: "How do you use React?",
        content: "You use React by creaing components"
    }
 ];

 const options = [
    {
        label: "The Color Red",
        value: 'red'
    },
    {
        label: "The Color Green",
        value: "green"
    },
    {
        label: "The Shade of Blue",
        value: "Blue"
    }
 ];

//  export default ()=>{
//     const [selected, setSelected] = useState(options[0]);
//     const [showDropdown, setShowDropdown] = useState(true);

//     return (
//         <div>
//             <button onClick={()=>{
//                 setShowDropdown(!showDropdown)
//             }}>Toggle Dropdown</button>
//             { showDropdown ? 
//             <Dropdown 
//                 selected={selected} 
//                 onSelectedChange = {setSelected}
//                 options={options}

//                 /> : null
//             }
//         </div>
//     );
//  }





const App = ()=>{
    return(
        <div>
            {/* <Search/>  */}
            {/* <Accordion items={items}/> */}
            {/* <CurrentCount/> */}
            {/* <Dropdown options={options}/> */}
            <Translate/>
            {/* <Exercise/> */}
        </div>
    )

}

export default  App

