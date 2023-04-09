import React, { useState } from "react";
import memeData from "./memeData.js";

function Form() {
    const [image, setimage] = useState("https://i.imgflip.com/21tqf4.jpg");
    function generate() {
        const datas = memeData.data.memes;
        const random = Math.floor(Math.random() * datas.length);
        setimage(datas[random].url);
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