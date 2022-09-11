import React, {useState, useEffect} from "react";
import axios from "axios";



const Search =()=>{

    const [term, setTerm] = useState("programming");
    const [results , setResults] = useState([]);

    console.log(results)

    // console.log("I run with every rander.")

    // useEffect main 3 senerio hoty hyn, agr second argument empety array ho to Run at initial render or agr kuch b na ho to Run at initial render and run after every rerender or agr last array mian data ho to Run at initial render and run after every rerender if data has changed since last render
    // useEffect(()=>{
    //     console.log("I Only Run Once")
    // }, []);
    // useEffect(()=>{
    //     console.log("I Run after every render and at initial render")
    // });
    useEffect(()=>{
        // console.log("I Run after every render and at initial render")
        
        const search = async ()=>{
            // https://en.wikipedia.org/w/api.php
            const { data } = await axios.get("http://localhost:3000", {
                params: {
                    action : "query",
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                }
            });

            setResults(data.query.search);
        }
        if(term){
            search();
        }
        

        // another method 
        // (async ()=>{await axios.get("jfalsd;kf")})()
    }, [term]);

    const renderedResults = results.map((result)=>{
        return(
            <div className="item" key={result.pageid}>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet}}></span>
                    {/* upper laine can create xss cross site scripting attack, attack, because it's create security hole */}
                    {/* {result.snippet} */}
                </div>
            </div>
        )
    })


    return( 
    <div>
        <div className="ui form">
            <div className="field">
                <label>Enter Search Term:</label>
                <input className="input"
                 value={term}   
                 onChange={(e)=>{setTerm(e.target.value)}}/>
                 
            </div>
        </div>
        <div className="ui celled list">
            {renderedResults}
        </div>
    </div>
    
    )


}

export default Search;