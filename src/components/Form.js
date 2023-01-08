import React from "react";
function Form() {
    function generate() {}
    return (
        <div>
            <div className="div-form">
                <input type="text" placeholder="Top text" className="form-input" />
                <input type="text" placeholder="Bottom text" className="form-input" />
                <button className="form-button" onClick={generate}>
                    Generate meme
                </button>
                <img src="" alt="" />;
            </div>
        </div>
    );
}
export default Form;
