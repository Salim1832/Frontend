import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import GlobalSection from "../../components/GlobalSection/GlobalSection";
import Hello from "../../components/Hello";
import Summary from "../../components/SUMMARY/Summary";
import ENDPOINTS from "../../utils/constants/endpoints";

 function DataIndonesia() {

    const [covids, setCovid] = useState([]);

    const URL = `https://covid19.mathdro.id/api/countries/indonesia`;

    useEffect(async() => {
        const response = await axios(URL);

        setCovid(response.data.results);
    }, []);

    console.log(covids);

    return (
        <>
            <Hello/>
            <GlobalSection globals={covids} title="Indonesia" text="Data Covid Berdasarkan Indonesia"/>
            <Summary title="Summary Data Indonesia" summary={ENDPOINTS.SUMMARYINDONSIA}/>
        </>
            );
}

export default DataIndonesia;