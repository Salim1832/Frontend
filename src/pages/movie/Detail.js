import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../components/utils/constants/endpoints";

function Detail() {
    const params = useParams();
    const [movie, setMovies] = useState([]);
    

    useEffect((id) => {
        getRecommendationMovies();
    }, [params.id]);

    async function getRecommendationMovies() {
        
        const response = await axios(ENDPOINTS.RECOMMENDATIONS(params.id));
        setMovies(response.data.results);
    }

    return(
        <>
            <DetailMovie />
            <Movies title="Recommendation" movies={movie} />
        </>
    )
};

export default Detail;