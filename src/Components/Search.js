import React, {useState, useEffect} from "react";
import axios from "axios";



const Search =()=>{

    const [term, setTerm] = useState("programming");
    const [debouncedTerm, setDebouncedTerm] = useState(term)
    const [results , setResults] = useState([]);

    // console.log(results)

    // console.log("I run with every rander.")

    useEffect(()=>{
        const timerId = setTimeout(()=>{
            setDebouncedTerm(term)
        }, 1000);
        return ()=>{
            clearTimeout(timerId)
        }
    }, [term]);

    useEffect(()=>{
        const search = async ()=>{
            // https://en.wikipedia.org/w/api.php
            //http://localhost:3000
            const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
                params: {
                    action : "query",
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm
                }
            });
            
            setResults(data.query.search);
        };
        search();

    }, [debouncedTerm])


    // useEffect main 3 senerio hoty hyn, agr second argument empety array ho to Run at initial render or agr kuch b na ho to Run at initial render and run after every rerender or agr last array mian data ho to Run at initial render and run after every rerender if data has changed since last render
    // useEffect(()=>{
    //     console.log("I Only Run Once")
    // }, []);
    // useEffect(()=>{
    //     console.log("I Run after every render and at initial render")
    // });
    // useEffect(
    //     ()=>{
    //         // console.log("initial Render or term was changed")

    //         // return ()=>{
    //         //     console.log("Cleanup")
    //         // }
    //     // console.log("I Run after every render and at initial render")
        
    //     const search = async ()=>{
    //         // https://en.wikipedia.org/w/api.php
    //         //http://localhost:3000
    //         const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
    //             params: {
    //                 action : "query",
    //                 list: 'search',
    //                 origin: '*',
    //                 format: 'json',
    //                 srsearch: term
    //             }
    //         });

    //         setResults(data.query.search);
    //     };

    //     if(term && !results.length){
    //         search();
    //     }else{
    //         const timeoutId = setTimeout(()=>{
    //             if(term){
    //                 search();
    //             }
    //         }, 1000);
            
    //         return ()=>{
    //             clearTimeout(timeoutId)
    //         };
    //     }

    //     // another method 
    //     // (async ()=>{await axios.get("jfalsd;kf")})()
    // }, [term, results.length]
    // );

    const renderedResults = results.map((result)=>{
        return(
            <div className="item" key={result.pageid}>
                <div className="right floated content">
                    <a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`}>
                        Go
                    </a>
                </div>
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