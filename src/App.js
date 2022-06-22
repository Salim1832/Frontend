import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/GlobalStyle";
import Layout from "./Layout";
import DataAbout from "./pages/covid/About";
import DataIndonesia from "./pages/covid/Indonesia";
import DataProvince from "./pages/covid/Province";
import Home from "./pages/Home";
import data from "./utils/constants/provinces";
import theme from "./utils/constants/theme";

function App() {
  const [provinces, setProvinces] = useState(data.provinces);
  return (
    <>
      {/*
       * Render Halaman Home
       * Jika ingin diubah, maka ubah di Halaman Home.
       */}

       <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Layout>
            <Routes>
              <Route path="/" element={<Home provinces={provinces}/>} /> 
              <Route path="/covid/indonesia" element={<DataIndonesia/>}/>
              <Route path="/covid/province" element={<DataProvince provinces={provinces} setProvinces={setProvinces}/>}/>
              <Route path="/covid/about" element={<DataAbout/>}/>
            </Routes>
        </Layout>
       </ThemeProvider>
       
       
    </>
  );
}

export default App;
