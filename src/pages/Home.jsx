import Navbar from "../components/nav/Navbar";
import MiniNavbar from "../components/nav/MiniNavbar";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import clouds from "../assets/home/clouds.svg";
import poster1 from "../assets/home/poster1.svg";
import poster2 from "../assets/home/poster2.svg";

const Home = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
            console.log(window.innerWidth);
        }
        
        //  event listener to update windowWidth when the window is resized
        window.addEventListener("resize", handleResize);

        // Remove the event listener when the component unmounts
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            <div className="bg-bgBlue md:min-h-screen relative overflow-hidden">
                {windowWidth >= 1024 ? <Navbar /> : <MiniNavbar />}

                <div className="grid grid-cols-10 grid-rows-5 text-left lg:text-center ">
                    <div className="col-start-2 col-end-10 lg:col-start-3 lg:col-end-9 row-start-1 row-end-4 lg:row-start-2 lg:row-end-5 text-white z-10 mt-14 lg:mt-0">
                        <h1 className="uppercase text-[24px] sm:text-[34px] md:text-[60px] fontAnton font-[800] tracking-widest mb-5 ">
                            imagine a place...
                        </h1>
                        <p className="text-[14px] md:text-[18px] md:leading-8 ">
                            ...where you can belong to a school club, a gaming
                            group, or a worldwide art community. Where just you
                            and a handful of friends can spend time together. A
                            place that makes it easy to talk every day and hang
                            out more often.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row lg:items-center gap-5 text-[14px] md:text-[16px] justify-center ">
                            <Link
                                to="https://discord.com/api/downloads/distributions/app/installers/latest?channel=stable&platform=win&arch=x86"
                                className="flex items-center justify-between gap-2 text-btnDark bg-white rounded-[40px] px-10 py-4 w-fit hover:shadow-[0px_6px_12px_2px_rgba(0,0,0,0.3)] hover:text-bgBlue transition duration-200 hover:ease-in-out"
                            >
                                <FileDownloadOutlinedIcon /> Download for
                                Windows
                            </Link>
                            <Link className="text-white bg-btnDark rounded-[40px] px-10 py-4 w-fit hover:shadow-[0px_6px_12px_2px_rgba(0,0,0,0.3)] transition duration-200 hover:ease-in-out">
                                Open Discord in your browser
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="">
                    <img
                        src={clouds}
                        alt="clouds"
                        className="hidden md:block absolute bottom-[100px] scale-[2]"
                    />
                    <img
                        src={[poster1]}
                        alt="[poster1]"
                        className="mx-12 -mt-[240px] sm:-mt-[180px] md:absolute -bottom-10 -right-[350px] "
                    />
                    <img
                        src={poster2}
                        alt="poster2"
                        className="hidden lg:block absolute -bottom-10 -left-[400px]"
                    />
                </div>
            </div>
        </>
    );
};

export default Home;
