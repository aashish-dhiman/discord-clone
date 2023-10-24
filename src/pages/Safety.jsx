import MetaData from "../SEO/MetaData";
import SelectNav from "../components/nav/SelectNav";
import svg1 from "../assets/safety/svg1.svg";
import svg2 from "../assets/safety/svg2.svg";
import svg3 from "../assets/safety/svg3.svg";
import svg4 from "../assets/safety/svg4.svg";
import svg5 from "../assets/safety/svg5.svg";
import svg6 from "../assets/safety/svg6.svg";
import svg7 from "../assets/safety/svg7.webp";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Safety = () => {
    return (
        <>
            <MetaData title="Nitro Benefits and Features | Discord" />
            <section className="bg-[#5865f2] w-full relative">
                <SelectNav />

                <div className="flex flex-col md:flex-row items-center justify-between text-bgWhite md:px-10 py-16 sm:py-[100px]">
                    <div className="md:w-[50%] px-6 h-full">
                        <h1 className="text-[30px] sm:text-[44px] md:text-[56px] tracking-wider leading-[50px] fontAnton">
                            DISCORD <br /> SAFETY CENTER
                        </h1>
                        <p className="mt-6 text-[16px] w-[90%] tracking-wide leading-5">
                            Discord is the place to hang out with your friends
                            and build community around shared interests. We’re
                            committed to creating a safe, inclusive and
                            welcoming place.
                        </p>{" "}
                        <p className="mt-4 w-[90%] text-[16px] tracking-wide leading-5">
                            {" "}
                            That’s why we’re working to make Discord private and
                            safe, by design. Learn how to shape the best
                            experience for yourself and find the resources you
                            need, whether you’re a teen, parent, educator, or
                            long-time Discord user.
                        </p>
                    </div>
                    <div className="w-[40%] mt-2 hidden md:block">
                        <img
                            src={svg1}
                            alt="svg"
                            className="md:-mr-10 lg:scale-[1.1]"
                        />
                    </div>
                </div>
                <div className="text-bgWhite px-10 md:px-16 py-6 md:py-10">
                    <div className="bg-[#3442d9] rounded-lg py-2 md:px-2 flex items-center flex-col md:flex-row  ">
                        <span className="border-b-2 md:border-b-0 md:border-r-2 border-[#4e5ade] py-6 flex-1 flex items-center justify-center  ">
                            <a
                                href="https://discord.com/safety-library"
                                className=" font-[700] text-[18px] md:text-[24px] px-2 text-center"
                            >
                                Safety Library
                            </a>
                        </span>
                        <span className="border-b-2 md:border-b-0 md:border-r-2 border-[#4e5ade] py-6 flex-1 flex items-center justify-center">
                            <a
                                href="https://discord.com/safety-parents"
                                className="font-[700] text-[18px] md:text-[24px] px-2 text-center"
                            >
                                Parent Hub
                            </a>
                        </span>
                        <span className="border-b-2 md:border-b-0 md:border-r-2 border-[#4e5ade] py-6 flex-1 flex items-center justify-center  ">
                            <a
                                href="https://discord.com/safety-transparency"
                                className="font-[700] text-[18px] md:text-[24px] px-2 text-center"
                            >
                                Transparency Hub
                            </a>
                        </span>
                        <span className=" py-6 flex-1 flex items-center justify-center">
                            <a
                                href="https://discord.com/safety-news"
                                className=" font-[700] text-[18px] md:text-[24px] px-2 text-center"
                            >
                                Safety News Hub
                            </a>
                        </span>
                    </div>
                </div>
            </section>

            {/* section 2 */}
            <section>
                <div className="px-6 md:px-16 py-12 ">
                    <div className="bg-bgBlue rounded-lg flex items-center justify-center relative overflow-hidden">
                        <img
                            src={svg2}
                            alt=""
                            className="hidden lg:block absolute scale-[0.3] -left-[420px]"
                        />
                        <img
                            src={svg2}
                            alt=""
                            className="hidden lg:block absolute scale-[0.3] -right-[420px] transform scale-x-[-0.3]"
                        />
                        <div className=" flex flex-col items-center justify-center gap-3 py-10 lg:w-[50%] text-center">
                            <h3 className="text-[30px] sm:text-[36px] md:text-[50px] font-[700] text-bgWhite ">
                                Privacy Hub
                            </h3>
                            <p className="text-[15px] text-bgWhite leading-6 px-10">
                                Privacy is an essential part of feeling safe. No
                                matter what, we build privacy into our products,
                                and we will always try to let you know what's
                                happening where and when. Learn more about what
                                that means, including the data we collect and
                                the tools to put you in control.
                            </p>
                            <Link
                                to="https://discord.com/safety-privacy"
                                className="mt-2 text-btnDark text-[14px] font-[500] bg-white rounded-[40px] px-4 py-2 w-fit hover:shadow-[0px_6px_12px_2px_rgba(0,0,0,0.3)] hover:text-bgBlue transition duration-200 hover:ease-in-out"
                            >
                                Explore More
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mt-6 bg-bgWhite">
                    <div className="px-6 sm:px-10 lg:px-[140px] py-16">
                        <Link to="https://discord.com/safety-library">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-10 w-full">
                                <div className=" sm:w-[70%] md:w-[50%] order-2 md:order-1 text-bgBlack mb-6">
                                    <h4 className="text-[32px] md:text-[46px] font-[700]">
                                        Safety Library
                                    </h4>
                                    <p className="text-gray-500 my-5">
                                        Everything you could ever want to know
                                        about safety on Discord. Whether you’re
                                        a user, a moderator, or a parent,
                                        discover all of our tools and resources
                                        and how to use them.
                                    </p>
                                    <span className=" group">
                                        <Link
                                            to="https://discord.com/safety-library"
                                            className="font-[500]"
                                        >
                                            Explore more{" "}
                                            <ArrowForwardIcon className="ml-2 rounded-[50%] bg-bgBlue text-bgWhite p-[4px] group-hover:translate-x-1 group-hover:transition-all group:hover:ease-in-out group-hover:duration-400  " />
                                        </Link>
                                    </span>
                                </div>
                                <div className="md:w-[50%] order-1 md:order-2 rounded-lg w-fit overflow-hidden">
                                    <img src={svg3} alt="" className="" />
                                </div>
                            </div>
                        </Link>

                        <Link to="https://discord.com/safety-parents">
                            <div className="mt-6 md:mt-14 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-10 w-full">
                                <div className="md:w-[50%] rounded-lg overflow-hidden">
                                    <img src={svg4} alt="" className="" />
                                </div>
                                <div className=" sm:w-[70%] md:w-[50%] text-bgBlack mb-6">
                                    <h4 className="text-[32px] md:text-[46px] font-[700]">
                                        Parent Hub
                                    </h4>

                                    <p className="text-gray-500 my-5">
                                        Learn more about what we’re doing to
                                        help your teen stay safer on our
                                        platform, explore our Family Center
                                        tool, and download our Parent's Guide to
                                        Discord.
                                    </p>
                                    <span className=" group">
                                        <Link
                                            to="https://discord.com/safety-library"
                                            className="font-[500]"
                                        >
                                            Explore more{" "}
                                            <ArrowForwardIcon className="ml-2 rounded-[50%] bg-bgBlue text-bgWhite p-[4px] group-hover:translate-x-1 group-hover:transition-all group:hover:ease-in-out group-hover:duration-400  " />
                                        </Link>
                                    </span>
                                </div>
                            </div>
                        </Link>

                        <Link to="https://discord.com/safety-library">
                            <div className="mt-6 md:mt-14 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-10 w-full">
                                <div className=" sm:w-[70%] md:w-[50%] order-2 md:order-1 text-bgBlack mb-6">
                                    <h4 className="text-[32px] md:text-[46px] font-[700]">
                                        Transparency Hub
                                    </h4>
                                    <p className="text-gray-500 my-5">
                                        Explore data, trends, and analysis into
                                        the work done to help keep people on
                                        Discord safe. Transparency reports cover
                                        information about enforcement of our
                                        platform policies, as well as our
                                        response to legal, emergency, and
                                        intellectual property removal requests.
                                    </p>
                                    <span className=" group">
                                        <Link
                                            to="https://discord.com/safety-library"
                                            className="font-[500]"
                                        >
                                            Explore more{" "}
                                            <ArrowForwardIcon className="ml-2 rounded-[50%] bg-bgBlue text-bgWhite p-[4px] group-hover:translate-x-1 group-hover:transition-all group:hover:ease-in-out group-hover:duration-400  " />
                                        </Link>
                                    </span>
                                </div>
                                <div className="md:w-[50%] order-1 md:order-2 rounded-lg w-fit overflow-hidden">
                                    <img src={svg5} alt="" className="" />
                                </div>
                            </div>
                        </Link>

                        <Link to="https://discord.com/safety-parents">
                            <div className="mt-6 md:mt-14 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-10 w-full">
                                <div className="md:w-[50%] rounded-lg overflow-hidden">
                                    <img src={svg6} alt="" className="" />
                                </div>
                                <div className=" sm:w-[70%] md:w-[50%] text-bgBlack mb-6">
                                    <h4 className="text-[32px] md:text-[46px] font-[700]">
                                        Safety News Hub
                                    </h4>

                                    <p className="text-gray-500 my-5">
                                        The latest news and updates on Discord’s
                                        Safety, Privacy, and Policy initiatives.
                                    </p>
                                    <span className=" group">
                                        <Link
                                            to="https://discord.com/safety-news"
                                            className="font-[500]"
                                        >
                                            Explore more{" "}
                                            <ArrowForwardIcon className="ml-2 rounded-[50%] bg-bgBlue text-bgWhite p-[4px] group-hover:translate-x-1 group-hover:transition-all group:hover:ease-in-out group-hover:duration-400  " />
                                        </Link>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Safety;
