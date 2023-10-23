import MetaData from "../SEO/MetaData";
import SelectNav from "../components/nav/SelectNav";
import anime from "../assets/nitro/anime.webp";
import nitro1 from "../assets/nitro/nitro1.svg";
import nitro2 from "../assets/nitro/nitro2.svg";
import card1 from "../assets/nitro/card1.svg";
import card2 from "../assets/nitro/card2.svg";
import card3 from "../assets/nitro/card3.svg";
import card4 from "../assets/nitro/card4.svg";
import card11 from "../assets/nitro/card11.svg";
import card12 from "../assets/nitro/card12.svg";
import star2 from "../assets/nitro/star2.svg";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import LabelIcon from "@mui/icons-material/Label";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import DiamondIcon from "@mui/icons-material/Diamond";
import { Link } from "react-router-dom";
import { useState } from "react";
import ExtraPerks from "../components/Nitro/ExtraPerks";
import Pricing from "../components/Nitro/Pricing";
import FAQ from "../components/Nitro/FAQ";

const Nitro = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <MetaData title="Nitro Benefits and Features | Discord" />
            <section className="bg-gradient-to-b from-[#8f86f5] via-[#c886f6] to-[#e085f4] w-full relative">
                <SelectNav />
                <div className="flex flex-col lg:flex-row justify-between gap-10 px-10 lg:px-20 lg:py-20">
                    <div className="sm:w-[80%] lg:w-[40%] text-bgWhite py-16">
                        <h1 className="text-[60px] fontAnton leading-[56px] tracking-wide">
                            Unleash <br /> more fun <br /> with Nitro
                        </h1>
                        <p className="text-[18px] mt-6">
                            Subscribe to Nitro to upgrade your emoji,
                            personalize your profile, share bigger files, and so
                            much more.
                        </p>
                    </div>
                    <div className="flex-grow p-10 -mt-20">
                        <img
                            src={anime}
                            alt="anime"
                            className="scale-[1.2] lg:scale-0 animate-[move_3s_ease-in-out_infinite] "
                        />
                    </div>
                </div>
                <div className="lg:absolute -bottom-[240px] left-0 flex flex-col gap-6 md:gap-8 lg:flex-row justify-between px-6 sm:px-10 lg:px-16 py-6 lg:py-0 w-full text-bgWhite">
                    <div className=" bg-gradient-to-r from-[#2e6fdb] via-[#2a71d9] to-[#0d79c9] lg:w-[50%] rounded-lg p-6  ">
                        <img src={nitro1} alt="name" />
                        <div className="mt-6 px-2 flex flex-col gap-4 font-[600]">
                            <span className="flex gap-3 items-center">
                                <FileUploadIcon /> 50MB uploads
                            </span>
                            <span className="flex gap-3 items-center">
                                <EmojiEmotionsIcon />
                                Custom emoji anywhere
                            </span>
                            <span className="flex gap-3 items-center">
                                <LabelIcon /> Special Nitro badge on your
                                profile
                            </span>
                        </div>
                        <Link
                            to="https://discord.com/settings/premium"
                            className="mt-[100px] flex items-center justify-center text-btnDark bg-white rounded-[40px] font-[600] px-10 py-4 w-full hover:shadow-[0px_6px_12px_2px_rgba(0,0,0,0.3)] hover:text-bgBlue transition duration-200 hover:ease-in-out"
                        >
                            <span className="text-[18px]">Subscribe</span>
                        </Link>
                    </div>
                    <div className="bg-gradient-to-br from-[#8447c5] via-[#ab45c2] to-[#ad5993] lg:w-[50%]  rounded-lg p-6">
                        <img src={nitro2} alt="name" />
                        <div className="mt-6 px-2 flex flex-col gap-4 font-[600]">
                            <span className="flex gap-3 items-center">
                                <FileUploadIcon /> 500MB uploads
                            </span>
                            <span className="flex gap-3 items-center">
                                <EmojiEmotionsIcon />
                                Custom emoji anywhere
                            </span>
                            <span className="flex gap-3 items-center">
                                <OndemandVideoIcon /> HD video streaming
                            </span>
                            <span className="flex gap-3 items-center">
                                <DiamondIcon /> 2 Server Boosts
                            </span>
                            <span className="flex gap-3 items-center">
                                <ContactMailIcon /> Custom profiles and more!
                            </span>
                        </div>
                        <Link
                            to="https://discord.com/settings/premium"
                            className="mt-[20px] flex items-center justify-center text-btnDark bg-white rounded-[40px] font-[600] px-10 py-4 w-full hover:shadow-[0px_6px_12px_2px_rgba(0,0,0,0.3)] hover:text-bgBlue transition duration-200 hover:ease-in-out"
                        >
                            <span className="text-[18px]">Subscribe</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* section 2-> perks */}
            <section className="w-full pt-16 md:pt-[300px] ">
                <div className="px-10 md:px-16">
                    <div className="flex items-center justify-center text-[26px] sm:text-[36px] md:text-[50px] text-bgBlack font-[700]">
                        <h3>Popular Nitro Perks</h3>
                    </div>
                    <div className="grid md:grid-cols-2 grid-rows-2 gap-6 mt-10 lg:mt-20 text-[24px] text-center font-[700]">
                        <div className="flex flex-col items-center gap-6 bg-bgWhite text-bgBlack rounded-md px-10 py-10">
                            <span className=" w-[90%] text-center">
                                From clips to pics, share away with bigger file
                                uploads
                            </span>
                            <img src={card1} alt="card" />
                        </div>
                        <div className="flex flex-col items-center gap-6 bg-bgWhite text-bgBlack rounded-md px-10 py-10">
                            <span className=" w-[90%] ">
                                Stream apps and games in sweet, sweet HD
                            </span>
                            <img src={card2} alt="card" />
                        </div>
                        <div className="flex flex-col items-center gap-6 bg-bgWhite text-bgBlack rounded-md px-10 py-10">
                            <span className="w-[90%] ">
                                Hype and meme with custom emoji anywhere
                            </span>
                            <img src={card3} alt="card" />
                        </div>
                        <div className="flex flex-col items-center gap-6 bg-bgWhite text-bgBlack rounded-md px-10 py-10">
                            <span className="w-[90%]">
                                Unlock perks for your communities with 2 Server
                                Boosts
                            </span>
                            <img src={card4} alt="card" />
                        </div>
                    </div>

                    <div className="flex items-center flex-col gap-10 justify-center mt-10 w-full">
                        {isOpen && <ExtraPerks />}
                        <button
                            className="bg-bgBlack hover:bg-bgGrey text-white py-3 px-8 text-[18px] font-[600] rounded-[40px] hover:shadow-[0px_6px_12px_2px_rgba(0,0,0,0.3)] hover:-translate-y-1  transition duration-200 hover:ease-in-out"
                            onClick={() => {
                                setIsOpen(!isOpen);
                            }}
                        >
                            {isOpen ? "Show fewer perks" : "Show all perks"}
                        </button>
                    </div>
                </div>
            </section>

            {/* section pricing */}
            <section className="w-full py-16 px-2 md:px-16 ">
                <Pricing />
            </section>

            {/* section FAQ */}
            <section className="w-full pb-10 md:py-16 px-2 md:px-16 ">
                <FAQ />
            </section>

            {/* section card */}
            <section className="w-full relative py-[100px] md:py-[130px] px-2 md:px-16 mx-auto bg-gradient-to-br from-[#8547c6] via-[#b749ba] to-[#ac5a90]   ">
                <img src={card12} alt="" className="hidden lg:block absolute left-0 top-0"/>
                <img src={card11} alt="" className="hidden lg:block absolute right-0 top-0"/>
                <img src={star2} alt="" className="lg:hidden block absolute left-1 top-5"/>
                <img src={star2} alt="" className="lg:hidden block absolute right-1 top-5 rotate-180"/>
                <div className="flex flex-col gap-8 items-center">
                    <h3 className="text-bgWhite text-[26px] md:text-[42px] font-[700]">
                        Unleash the fun with Nitro
                    </h3>
                    <Link
                        to="https://discord.com/settings/premium"
                        className="flex items-center justify-between gap-2 text-btnDark font-[500] bg-white rounded-[40px] text-[18px] px-14 py-3 md:py-4 w-fit hover:shadow-[0px_6px_12px_2px_rgba(0,0,0,0.3)] hover:text-bgBlue transition duration-200 hover:ease-in-out"
                    >
                        Subscribe
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Nitro;
