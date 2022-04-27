import { Route, Routes } from "react-router-dom";
import CreateMovie from "./pages/movie/Create";
import Home from "./pages/Home";
import PopularMovie from "./pages/movie/Popular";

function App(){
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie/create" element={<CreateMovie />} />
                <Route path="/movie/popular" element={<PopularMovie />} />
            </Routes>
        </>
    );
}

export default App;