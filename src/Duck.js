import React,{useState} from "react";

function Duck(){

    const [img, setImg] = useState("https://random-d.uk/api/randomimg");
    const getDuck = () => {
   
        setTimeout(() => {
          fetch('https://random-d.uk/api/random')
          .then(res => res.json())
          .then(data => {
            setImg(data.url);
            setTimeout(() => {
            }, 1000)
          })
          .catch(err => console.log(err));
        }, 1200);
      }

    return(
        <div className="duck-main">
            <img src={img} width="400px" height="400px" alt="duck"/>
            <button className="newImage" onClick={getDuck}>New Duck!</button>
        </div>
    )
}

export default Duck