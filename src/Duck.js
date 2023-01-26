import React,{useState} from "react";

function Duck(){
    const [url, setUrl] = useState('')

    function fetchData(){
        fetch('https://random-d.uk/api/random').then(res=>{
            if(res.ok){
                return res.json
            }
            throw new Error('Request failed');
        },networkError=> console.log(networkError.message)
        ).then(jsonRes=>{
            setUrl(jsonRes[0].url)
        })
    }

    return(
        <div className="duck-main">
            <img src={url} className="duckImg"/>
            <button className="newImage" onClick={fetchData}>NEW</button>
        </div>
    )
}

export default Duck