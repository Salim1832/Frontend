import { Route, Routes } from "react-router-dom";
import CreateMovie from "./pages/movie/Create";
import Home from "./pages/Home";
import PopularMovie from "./pages/movie/Popular";
import NowPlayingMovie from "./pages/movie/NowPlaying";
import TopRatedMovie from "./pages/movie/TopRated";
import Layout from "./layout";
import { ThemeProvider } from "styled-components";
import theme from "./components/utils/constants/theme";
import GlobalStyle from "./components/GlobalStyle";
// import theme provider

function App(){
    return (
        <>
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movie/create" element={<CreateMovie />} />
                    <Route path="/movie/popular" element={<PopularMovie />} />
                    <Route path="/movie/now" element={<NowPlayingMovie/>} />
                    <Route path="/movie/top" element={<TopRatedMovie/>} />
                </Routes>
            </Layout>
        </ThemeProvider>
        </>
    );
}

export default App;