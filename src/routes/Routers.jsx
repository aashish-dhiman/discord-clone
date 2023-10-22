import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Download from "../pages/Download";


const Routers = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/download" element={<Download />} />
            </Routes>
        </>
    );
};

export default Routers;
