const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "http://api.themoviedb.org/3";

const ENDPOINTS = {
    POPULAR: `${BASE_URL}/movie/popular?api_key=${API_KEY}`,
    NOW_PLAYING: `${BASE_URL}/movie/now_playing?api_key=${API_KEY}`,
    TOP_RATED: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`,
    TRENDING(id){ 
        return `${BASE_URL}movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
    },
    DETAIL(id){ 
        return `${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
    },
    RECOMMENDATIONS(id){
        return `${BASE_URL}/movie/${id}/recommendations?api_key=${API_KEY}`;
    },
};

export default ENDPOINTS;