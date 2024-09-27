import React from "react";

function Meme() {
    return (
        <main>
            <div className="form">
                <div>
                    <label> Top Text 
                        <input 
                        type="text" 
                        placeholder="Shut up" 
                        className="form--input" 
                        />
                    </label>
                </div>

                <div>
                    <label> Bottom Text
                        <input 
                        type="text" 
                        placeholder="and take my money" 
                        className="form--input" 
                        />
                    </label>
                </div>
            </div>

                <button 
                className="form--button"
                >
                Generate a new meme 
                </button>
        </main>
    )
}

export default Meme;