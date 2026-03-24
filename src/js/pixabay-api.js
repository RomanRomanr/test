import axios from "axios";


export async function fetchArticle(query, page) {
    const API_KEY = '28988b93b6304d3885e33119dfdb45e9';
    const BASE_URL = 'https://newsapi.org/v2';
    const END_POINT = '/everything';
    const url = `${BASE_URL}${END_POINT}`;

    const params = {
        apiKey: API_KEY,
        q: query,
        pageSize: 10,
        page: page,
        

    };
    const res = await axios.get( url, {params});
    return res.data;
    
}