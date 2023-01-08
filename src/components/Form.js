import React from "react";
import memeData from "./memeData.js";

function Form() {
    function generate() {
        const datas = memeData.data.memes;
        const random = Math.floor(Math.random() * datas.length);
        const url = datas[random].url;
        console.log(url);
        <img src={url}></img>;
    }
    return (
        <div className="div-form">
            <input type="text" placeholder="Top text" className="form-input" />
            <input type="text" placeholder="Bottom text" className="form-input" />
            <button className="form-button" onClick={generate}>
                Generate meme
            </button>
            <img src="" alt="" />;
        </div>
    );
}
export default Form;
