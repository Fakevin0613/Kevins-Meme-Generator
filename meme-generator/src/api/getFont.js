import axios from 'axios';

const getFont = async () => {
    try {
        const options = {
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_TRAVEL_KEY,
                'X-RapidAPI-Host': 'ronreiter-meme-generator.p.rapidapi.com'
            }
        };
        const {data} = await axios.get(`https://ronreiter-meme-generator.p.rapidapi.com/fonts`, options);
        return data
    }
    catch (error) {
        console.log(error)
    }
}

export default getFont;