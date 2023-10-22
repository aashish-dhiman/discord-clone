import Navbar from "./Navbar";
import MiniNavbar from "./MiniNavbar";
import { useState,useEffect } from "react";

const SelectNav = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
            // console.log(window.innerWidth);
        }

        //  event listener to update windowWidth when the window is resized
        window.addEventListener("resize", handleResize);

        // Remove the event listener when the component unmounts
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return windowWidth >= 1024 ? <Navbar /> : <MiniNavbar />;
};

export default SelectNav;
