import React,{useState, useEffect} from "react";
import Loading from "./Loading";

function Duck(){

    const [img, setImg] = useState("https://random-d.uk/api/randomimg");
    const [loading, setLoading] = useState(undefined);
    const [done, setDone] = useState(undefined);

    useEffect(() => {
        getDuck();
      }, []);
    
    const getDuck = () => {

        setDone(false)
   
        setTimeout(() => {
          fetch('https://random-d.uk/api/random')
          .then(res => res.json())
          .then(data => {
            setImg(data.url);
            setLoading(true)
            setTimeout(() => {
                setDone(true)
                setLoading(false)
            }, 1000)
          })
          .catch(err => console.log(err));
        }, 1200);
      }

    return(
        <div className="duck-main">
            <div>
                {!done ? (<Loading loading={loading} />) : (<img src={img} width="400px" height="400px" alt="duck"/>)}
                <button className="newImage" onClick={getDuck}>New Duck!</button>
            </div> 
        </div>
    )
}

export default Duck