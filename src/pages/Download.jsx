import SelectNav from "../components/nav/SelectNav";
import svg1 from "../assets/download/svg1.svg";
import svg2 from "../assets/download/svg2.svg";
import svg3 from "../assets/download/svg3.svg";
import svg4 from "../assets/download/svg4.svg";
import svg5 from "../assets/download/svg5.svg";
import { Link } from "react-router-dom";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import MetaData from "../SEO/MetaData";

const Download = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <MetaData title="Download Discord to Talk, Chat and Hang Out" />
            <section className="bg-bgBlack relative ">
                <SelectNav />

                <div className="flex flex-col md:flex-row items-center justify-between text-bgWhite md:px-10 py-16 sm:py-[100px]">
                    <div className="md:w-[50%] px-6 h-full">
                        <h1 className="text-[32px] sm:text-[54px] md:text-[70px] leading-[56px] fontAnton">
                            GET DISCORD FOR ANY <br />
                            DEVICE
                        </h1>
                        <p className="mt-6 leading-6 text-[18px]">
                            An adventure awaits. Hang out with your friends on
                            our desktop app and keep the conversation going on
                            mobile.
                        </p>
                        <div className="flex flex-col lg:flex-row gap-5 items-center mt-10">
                            <Link
                                to="https://discord.com/api/downloads/distributions/app/installers/latest?channel=stable&platform=win&arch=x86"
                                className="flex items-center justify-between gap-2 text-white bg-bgBlue rounded-[40px] px-10 py-4 w-fit hover:shadow-[0px_6px_12px_2px_rgba(0,0,0,0.3)] hover:bg-bgHover transition duration-200 hover:ease-in-out"
                            >
                                <FileDownloadOutlinedIcon /> Download for
                                Windows
                            </Link>
                            <span className="text-[14px]">
                                Windows 7 or higher
                            </span>
                        </div>
                    </div>
                    <div className="w-1/2 -mr-6 mt-2 hidden md:block">
                        <img
                            src={svg1}
                            alt="svg"
                            className="md:-mr-10 lg:scale-[1.1]"
                        />
                    </div>
                </div>
            </section>

            {/* section 2 */}
            <section className="py-20">
                <div className="flex flex-col gap-16 md:grid grid-cols-2 grid-rows-[156px,auto,156px,auto,156px] px-10 w-full">
                    <div className="col-span-1 row-span-2 flex items-center flex-col gap-20 bg-bgWhite lg:w-[550px] md:p-16 rounded-[20px] overflow-hidden">
                        <div className="flex flex-col gap-6 py-4 md:p-0 items-center w-full">
                            <span className="text-[30px] font-[600]">iOS</span>
                            <Link
                                to="https://discordapp.page.link/?link=https%3A%2F%2Fitunes.apple.com%2Fus%2Fapp%2Fdiscord-chat-for-games%2Fid985746746%3Ffingerprint%3D1165533823983951904.-Uc49CjCH3u5B6LE%26attemptId%3D5d56e76a-6098-466c-937c-e942c021de87&utm_source=download&apn=com.discord&isi=985746746&ibi=com.hammerandchisel.discord&sd=Your%20place%20to%20talk%20with%20communities%20and%20friends.&efr=1"
                                className="flex items-center justify-between gap-2 text-white bg-bgBlack rounded-[40px] text-[18px] font-[600] px-8 py-4 w-fit hover:shadow-[0px_6px_12px_2px_rgba(0,0,0,0.3)] hover:bg-bgGrey transition duration-200 hover:ease-in-out"
                            >
                                Download
                            </Link>
                        </div>
                        <div className="-mb-[400px]">
                            <img src={svg2} alt="svg" className="" />
                        </div>
                    </div>
                    <div className="col-start-2 row-start-2 row-span-2 flex items-center flex-col gap-20 bg-bgWhite lg:w-[550px] py-4 md:p-16 rounded-[20px] overflow-hidden">
                        <div className="flex flex-col gap-6 items-center w-full">
                            <span className="text-[30px] font-[600]">
                                Android
                            </span>
                            <Link
                                to="https://discordapp.page.link/?link=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.discord%26fingerprint%3D1165533823983951904.2_eqimiP1Ft-Uc49CjCH3u5B6LE%26attemptId%3D59e525b1-c5e8-4a3e-aae3-f81d411af643&utm_source=download&apn=com.discord&isi=985746746&ibi=com.hammerandchisel.discord&sd=Your%20place%20to%20talk%20with%20communities%20and%20friends.&efr=1"
                                className="flex items-center justify-between gap-2 text-white bg-bgBlack rounded-[40px] text-[18px] font-[600] px-8 py-4 w-fit hover:shadow-[0px_6px_12px_2px_rgba(0,0,0,0.3)] hover:bg-bgGrey transition duration-200 hover:ease-in-out"
                            >
                                Download
                            </Link>
                        </div>
                        <div className="-mb-[400px]">
                            <img src={svg3} alt="svg" className="" />
                        </div>
                    </div>
                    <div className="col-span-1 row-span-2 mt-10 flex items-center flex-col gap-20 bg-bgWhite lg:w-[550px] py-4 md:p-16 rounded-[20px] overflow-hidden">
                        <div className="flex flex-col gap-6 items-center w-full">
                            <span className="text-[30px] font-[600]">
                                Linux
                            </span>
                            <Link
                                to="https://discord.com/api/download?platform=linux&format=deb"
                                className="flex items-center justify-between gap-2 text-white bg-bgBlack rounded-[40px] text-[18px] font-[600] px-8 py-4 w-fit hover:shadow-[0px_6px_12px_2px_rgba(0,0,0,0.3)] hover:bg-bgGrey transition duration-200 hover:ease-in-out"
                            >
                                Download
                            </Link>
                        </div>
                        <div className="">
                            <img src={svg4} alt="svg" className="" />
                        </div>
                    </div>
                    <div className="col-span-1 row-span-2 flex items-center mt-20 flex-col gap-20 bg-bgWhite lg:w-[550px] py-4 md:p-16 rounded-[20px] overflow-hidden">
                        <div className="flex flex-col gap-6 items-center w-full">
                            <span className="text-[30px] font-[600]">Mac</span>
                            <Link
                                to="https://discord.com/api/download?platform=osx"
                                className="flex items-center justify-between gap-2 text-white bg-bgBlack rounded-[40px] text-[18px] font-[600] px-8 py-4 w-fit hover:shadow-[0px_6px_12px_2px_rgba(0,0,0,0.3)] hover:bg-bgGrey transition duration-200 hover:ease-in-out"
                            >
                                Download
                            </Link>
                        </div>
                        <div className="">
                            <img src={svg5} alt="svg" className="" />
                        </div>
                    </div>
                    <div className="col-span-1 row-span-2 flex items-center mt-20 flex-col gap-20 bg-bgWhite lg:w-[550px] p-4 md:p-10 ">
                        <div className="flex flex-col gap-6 items-start w-full">
                            <span className="text-[30px] font-[800]">
                                Feeling experimental?
                            </span>
                            <span className="text-[18px] font-[400]">
                                Try our Public Test Build and test new features
                                before they launch.
                            </span>
                            <div className="relative">
                                <button
                                    className="flex items-center justify-between gap-2 text-white bg-bgBlack rounded-[40px] text-[18px] font-[600] px-8 py-4 w-fit hover:shadow-[0px_6px_12px_2px_rgba(0,0,0,0.3)] hover:bg-bgGrey transition duration-200 hover:ease-in-out"
                                    onClick={() => {
                                        setIsOpen(!isOpen);
                                    }}
                                >
                                    Download Public Test Build{" "}
                                    <KeyboardArrowDownIcon />
                                </button>
                                {isOpen && (
                                    <div className="absolute p-2 bg-white rounded-lg w-full">
                                        <ul className="flex flex-col gap-3 p-2 text-[16px] ">
                                            <a
                                                href="https://discord.com/api/downloads/distributions/app/installers/latest?channel=ptb&platform=win&arch=x86"
                                                className="hover:underline hover:text-bgBlue w-full"
                                            >
                                                Window 32-bit
                                            </a>

                                            <a
                                                href="https://discord.com/api/downloads/distributions/app/installers/latest?channel=ptb&platform=win&arch=x64"
                                                className="hover:underline hover:text-bgBlue w-full"
                                            >
                                                Window 64-bit
                                            </a>

                                            <a
                                                href="https://discord.com/api/download/ptb?platform=linux&format=deb"
                                                className="hover:underline hover:text-bgBlue w-full"
                                            >
                                                Linux deb
                                            </a>

                                            <a
                                                href="https://discord.com/api/download/ptb?platform=linux&format=tar.gz"
                                                className="hover:underline hover:text-bgBlue w-full"
                                            >
                                                Linux tar.gz
                                            </a>

                                            <a
                                                href="https://discord.com/api/download/ptb?platform=osx"
                                                className="hover:underline hover:text-bgBlue w-full"
                                            >
                                                Mac
                                            </a>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Download;
