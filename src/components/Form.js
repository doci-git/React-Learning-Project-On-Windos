import React, { useState } from "react";
import memeData from "./memeData.js";

function Form() {
    const [image, setimage] = useState;
    function generate() {
        const datas = memeData.data.memes;
        const random = Math.floor(Math.random() * datas.length);
        const url = image.datas[random].url;
        console.log(url);
    }
    return (
        <div className="div-form">
            <input type="text" placeholder="Top text" className="form-input" />
            <input type="text" placeholder="Bottom text" className="form-input" />
            <button className="form-button" onClick={generate}>
                Generate meme
            </button>
            <img src={setimage} alt="" />;
        </div>
    );
}
export default Form;
