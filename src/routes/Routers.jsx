import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Download from "../pages/Download";
import Nitro from "../pages/Nitro";

const Routers = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/download" element={<Download />} />
                <Route path="/nitro" element={<Nitro />} />
            </Routes>
        </>
    );
};

export default Routers;
