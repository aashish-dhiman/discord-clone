import "./App.css";
import Routers from "./routes/Routers";
import Footer from "./components/footer/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function App() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [pathname]);

    return (
        <>
            <Routers />
            <Footer />
        </>
    );
}

export default App;
