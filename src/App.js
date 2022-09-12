import React, { useState } from "react";
import Accordion from "./Components/Accordion";
import CurrentCount from "./Components/CurrentCount";
import Search from "./Components/Search";
import Dropdown from "./Components/Dropdown";
import Translate from "./Components/Translate";
import Exercise from "./Components/Exercise";
import Route from "./Components/Route";
import Header from "./Components/Header";

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

// const showAccordian = ()=>{
//     if (window.location.pathname === "/"){
//         return <Accordion items={items}/>
//     }
// }

// const showList = ()=>{
//     if(window.location.pathname === "/list"){
//         return <Search/>
//     }
// }

// const showDropdown = ()=>{
//     if(window.location.pathname === "/dropdown"){
//         return <Dropdown options={options}/>
//     }
// }

// const showTranslate = ()=>{
//     if(window.location.pathname === "/translate"){
//         return <Translate/>
//     }
// }



const App = ()=>{
    const [selected, setSelected] = useState(options[0]);
    return(
        <div>
            {/* <Search/>  */}
            {/* <Accordion items={items}/> */}
            {/* <CurrentCount/> */}
            {/* <Dropdown options={options}/> */}
            {/* <Translate/> */}
            {/* <Exercise/> */}

            <Header/>

            <Route path="/">
                <Accordion items={items}/>
            </Route>
            <Route path="/list">
                <Search/>
            </Route>
            <Route path="/dropdown">
                <Dropdown
                    label="Select a Color"
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            </Route>
            <Route path="/translate">
                <Translate/>
            </Route>




            {/* {showAccordian()}
            {showList()}
            {showDropdown()}
            {showTranslate()} */}











        </div>
    )

}

export default  App

