import axios from 'axios';

const getMeme = async (top, bottom, name, fontSize, font) => {
    try {
        const options = {
            params: {
                top: top,
                bottom: bottom,
                meme: name,
                font_size: fontSize,
                font: font
            },
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_TRAVEL_KEY,
                'X-RapidAPI-Host': 'ronreiter-meme-generator.p.rapidapi.com'
            },
            responseType: "arraybuffer"
        };
        const result = await axios.get(`https://ronreiter-meme-generator.p.rapidapi.com/meme`, options)
        var base64String = btoa(String.fromCharCode.apply(null, new Uint8Array(result.data)));
        let output = "data:image/png;base64," + base64String;
        return output
    }
    catch (error) {
        console.log(error)
    }
}

export default getMeme;