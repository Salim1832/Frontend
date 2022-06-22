import FormCovid from "../components/AddFormCovid/FormCovid";
import { useState } from "react";
import Footer from "../components/Footer";
import GlobalSection from "../components/GlobalSection/GlobalSection";
import Hello from "../components/Hello";
import Provinsi from "../components/Provinsi/Provinsi";
import data from "../utils/constants/provinces";
import ENDPOINTS from "../utils/constants/endpoints";
import Summary from "../components/SUMMARY/Summary";
import Status from "../components/Status/Status";


function Home() {

  return (
    <>
       {/* <h1>Final Project - Covid ID</h1>
      <h2>Good Luck, Bestie</h2> */}
      <Hello />
      <Status/>
      <Summary title="Summary Data Global" summary={ENDPOINTS.SUMMARYGLOBAL}/>
    </>
  );
}

export default Home;
