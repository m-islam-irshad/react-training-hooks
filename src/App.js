import React from "react";
import Accordion from "./Components/Accordion";
import CurrentCount from "./Components/CurrentCount";
import Search from "./Components/Search";

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
 ]

const App = ()=>{
    return(
        <div>
            <Search/> 
            {/* <Accordion items={items}/> */}
            {/* <CurrentCount/> */}
        </div>
    )

}

export default App

