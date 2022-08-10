import axios from 'axios';

const getMemeName = async () => {
    try {
        const options = {
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_TRAVEL_KEY,
                'X-RapidAPI-Host': 'ronreiter-meme-generator.p.rapidapi.com'
            }
        };
        const {data} = await axios.get(`https://ronreiter-meme-generator.p.rapidapi.com/images`, options);
        return data
    }
    catch (error) {
        console.log(error)
    }
}

export default getMemeName;
