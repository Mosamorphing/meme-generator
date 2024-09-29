import React from "react";

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });
    const [allMemes, setAllMemes] = React.useState([]);

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then((res) => res.json())
            .then((data) => setAllMemes(data.data.memes));
    }, []);

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNumber].url;
        setMeme((prevMeme) => ({
            ...prevMeme,
            randomImage: url
        }));
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setMeme((prevMeme) => ({
            ...prevMeme,
            [name]: value
        }));
    }

    return (
        <main>
            <div className="form">
    <div>
        <label htmlFor="topText" className="form--label">
            Top Text
        </label>
        <input
            type="text"
            id="topText"
            name="topText"
            className="form--input"
            value={meme.topText}
            onChange={handleChange}
        />
    </div>
    <div>
        <label htmlFor="bottomText" className="form--label">
            Bottom Text
        </label>
        <input
            type="text"
            id="bottomText"
            name="bottomText"
            className="form--input"
            value={meme.bottomText}
            onChange={handleChange}
        />
    </div>
    <button className="form--button" onClick={getMemeImage}>
        Generate a new meme
    </button>
</div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" alt="Generated Meme" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    );
}
