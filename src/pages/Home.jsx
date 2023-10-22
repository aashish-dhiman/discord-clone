import Navbar from "../components/nav/Navbar";
import MiniNavbar from "../components/nav/MiniNavbar";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import clouds from "../assets/home/clouds.svg";
import poster1 from "../assets/home/poster1.svg";
import poster2 from "../assets/home/poster2.svg";
import card3 from "../assets/home/card3.svg";
import card2 from "../assets/home/card2.svg";
import card4 from "../assets/home/card4.svg";
import stars from "../assets/home/stars.svg";

const Home = () => {
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

    return (
        <>
            {/* section 1- HERO SECTION */}
            <section className="bg-bgBlue relative overflow-hidden">
                {windowWidth >= 1024 ? <Navbar /> : <MiniNavbar />}

                <div className="grid grid-cols-10 grid-rows-5 text-left lg:text-center py-3">
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
            </section>

            {/* section 2  */}
            <section>
                <div className="flex flex-col md:flex-row gap-6 items-center justify-between px-4 sm:px-10 py-20 ">
                    <div>
                        <img src={card4} alt="card" />
                    </div>
                    <div className="md:w-[420px] h-full">
                        <h2 className="text-[24px] md:text-[42px] fontAnton md:leading-[56px]  text-bgBlack">
                            Create an invite-only place where you belong
                        </h2>
                        <p className="text-bgBlack md:leading-9 mt-4 font-[400] tracking-wide">
                            Discord servers are organized into topic-based
                            channels where you can collaborate, share, and just
                            talk about your day without clogging up a group
                            chat.
                        </p>
                    </div>
                </div>
            </section>

            {/* section 3  */}
            <section>
                <div className="flex flex-col md:flex-row gap-6 items-center justify-between px-4 sm:px-10 py-20 bg-bgWhite">
                    <div className="md:w-[420px] h-full">
                        <h2 className="text-[24px] md:text-[42px] fontAnton md:leading-[56px]  text-bgBlack">
                            Where hanging out is easy
                        </h2>
                        <p className="text-bgBlack md:leading-9 mt-4 font-[400] tracking-wide">
                            Grab a seat in a voice channel when you’re free.
                            Friends in your server can see you’re around and
                            instantly pop in to talk without having to call.
                        </p>
                    </div>
                    <div>
                        <img src={card2} alt="card" />
                    </div>
                </div>
            </section>

            {/* section 4  */}
            <section>
                <div className="flex flex-col md:flex-row gap-6 items-center justify-between px-4 sm:px-10 py-20 ">
                    <div>
                        <img src={card4} alt="card" />
                    </div>
                    <div className="md:w-[420px] h-full">
                        <h2 className="text-[24px] md:text-[42px] fontAnton md:leading-[56px]  text-bgBlack">
                            From few to a fandom
                        </h2>
                        <p className="text-bgBlack md:leading-9 mt-4 font-[400] tracking-wide">
                            Get any community running with moderation tools and
                            custom member access. Give members special powers,
                            set up private channels, and more.
                        </p>
                    </div>
                </div>
            </section>

            {/* section 5  */}
            <section>
                <div className="flex flex-col gap-6 items-center justify-between px-4 sm:px-10 py-20 bg-bgWhite">
                    <div className="sm:w-[80%] h-full">
                        <h2 className="text-[20px] md:text-[44px] text-center tracking-wider fontAnton md:leading-[56px]  text-bgBlack">
                            RELIABLE TECH FOR STAYING CLOSE
                        </h2>
                        <p className="text-bgBlack md:leading-9 mt-4 text-md text-center tracking-wide">
                            Low-latency voice and video feels like you’re in the
                            same room. Wave hello over video, watch friends
                            stream their games, or gather up and have a drawing
                            session with screen share.
                        </p>
                    </div>
                    <div className="mt-10">
                        <img
                            src={card3}
                            alt="card"
                            className="lg:scale-[1.3]"
                        />
                    </div>
                    <div className="relative mt-10 md:mt-20 w-full">
                        <div className="flex flex-col gap-10 items-center relative">
                            <img
                                src={stars}
                                alt="stars"
                                className="absolute -top-2 sm:scale-[1.3]"
                            />
                            <h2 className="text-[26px] md:text-[30px] text-center fontAnton md:leading-[48px]  text-bgBlack">
                                Ready to start your journey?
                            </h2>
                            <Link
                                to="https://discord.com/api/downloads/distributions/app/installers/latest?channel=stable&platform=win&arch=x86"
                                className="flex items-center justify-between gap-2 text-white bg-bgBlue rounded-[40px] px-10 py-4 w-fit hover:shadow-[0px_6px_12px_2px_rgba(0,0,0,0.3)] hover:bg-bgHover transition duration-200 hover:ease-in-out"
                            >
                                <FileDownloadOutlinedIcon /> Download for
                                Windows
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
