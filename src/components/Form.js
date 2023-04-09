import React, { useState } from "react";
import memeData from "./memeData.js";

function Form() {
    const [meme,setMeme]=React.useState({
        topText:'',
        bottomText:'',
        randomImg:'https://i.imgflip.com/21tqf4.jpg'
    })

    const [allImage, setAllImage] = useState(memeData);
    function generate() {
        const datas = memeData.data.memes;
        const random = Math.floor(Math.random() * datas.length);
        const url=datas[random].url
        setAllImage();
    }
    return (
        <div className="div-form">
            <input type="text" placeholder="Top text" className="form-input" />
            <input type="text" placeholder="Bottom text" className="form-input" />
            <button className="form-button" onClick={generate}>
                Generate meme 
            </button>
            <img className="imgs" src={image} alt="" />
        </div>
    );
}
    export default Form; 