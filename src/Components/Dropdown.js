import React, { useEffect, useRef, useState } from "react";


const Dropdown = ({label ,options, selected, onSelectedChange})=>{
    const [open, setOpen] = useState(false)
    const ref = useRef();


    useEffect(()=>{
        document.body.addEventListener('click', (event)=>{
        // const onBodyClick = (event) =>{
            if (ref.current && ref.current.contains(event.target)){
                return;
            }
            console.log(event.target)
            // console.log("Clicked on body.")
            setOpen(false)
        }, {capture: true});
        //use upper line for when addEventListener functin use
        // });
        //if we are using react v17 or above then use this capture field


        return () =>{

        }



    }, []);

    const renderedOptions = options.map((option)=>{

        if(option.value === selected.value){
            return null;
        }


        return(
            <div key={option.value} 
                className="item"
                onClick={() => {
                    // console.log("item Clicked")
                    onSelectedChange(option)
                    }}
                >
                {option.label}
            </div>
        )
    });



    console.log(ref.current)

    return(
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div onClick={()=> {
                    // console.log("Dropdown clicked")
                    setOpen(!open)
                }} 
                    className={`ui selection dropdown ${open ? 'visible active': ""}`}>
                        <i className="dropdown icon"></i>
                        <div className="text">{selected.label}</div>
                        <div className={`menu ${ open ?'visible transition' : ""}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown;