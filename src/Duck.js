import React,{useState} from "react";

function Duck(){
    const [url, setUrl] = useState('')

    function fetchData(){
        fetch('https://random-d.uk/api/random').then(res=>{
            if(res.ok){
                return res.json
            }
            throw new Error('Request failed');
        })
    }
}