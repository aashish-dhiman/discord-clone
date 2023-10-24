import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Download from "../pages/Download";
import Nitro from "../pages/Nitro";
import Safety from "../pages/Safety";

const Routers = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/download" element={<Download />} />
                <Route path="/nitro" element={<Nitro />} />
                <Route path="/safety" element={<Safety />} />
            </Routes>
        </>
    );
};

export default Routers;
