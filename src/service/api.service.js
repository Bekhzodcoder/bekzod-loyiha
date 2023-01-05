import axios from "axios";

const BASE_URL = "https://youtube-v3-alternative.p.rapidapi.com";
const options = {
    params:{
        maxResults:'50'
    },
    headers: {
        'X-RapidAPI-Key': '6cc91b71b4msh2c1d0ff7111c568p1c21b7jsnb4bc9926cf92',
        'X-RapidAPI-Host': "youtube-v31.p.rapidapi.com",
      },
}



export const ApiService = {
    async fetching(url){
        const response = await axios.get(`${BASE_URL}/${url}`, options);
        return response.data;
    },
}