import axios from 'axios';

const getMeme = async (top, bottom, name, font, fontSize) => {
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
            }
        };
        const {data} = await axios.get(`https://ronreiter-meme-generator.p.rapidapi.com/meme`, options);
        let output = "data:image/png;base64, " + btoa(encodeURIComponent(data));
        console.log(output)
        return output
    }
    catch (error) {
        console.log(error)
    }
}

export default getMeme;