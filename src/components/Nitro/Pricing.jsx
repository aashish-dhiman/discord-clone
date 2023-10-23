import name1 from "../../assets/nitro/name1.svg";
import name2 from "../../assets/nitro/name2.svg";
import tag from "../../assets/nitro/tag.svg";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

const Pricing = () => {
    return (
        <div className="rounded-lg bg-bgWhite py-16 lg:py-20">
            <div className="md:w-[60%] mx-auto text-center text-[26px] sm:text-[36px] md:text-[50px] text-bgBlack leading-[50px] font-[700] px-4">
                <h3>Pick the plan that works best for you</h3>
            </div>
            <div className="flex items-center mt-10 sm:mt-[100px] px-2 lg:px-20">
                <div className="flex-grow flex flex-col ">
                    <span className="text-[22px] font-[700] h-[80px] p-5 border-b-2">
                        Features
                    </span>
                    <span className="text-[14px] md:text-[18px] text-bgGrey font-[400] h-[80px] px-1 md:p-5 border-b-2 flex items-center">
                        Super Reactions
                    </span>
                    <span className="text-[14px] md:text-[18px] text-bgGrey font-[400] h-[80px] px-1 md:p-5 border-b-2 flex items-center">
                        Custom emoji anywhere and make them animated
                    </span>
                    <span className="text-[14px] md:text-[18px] text-bgGrey font-[400] h-[80px] px-1 md:p-5 border-b-2 flex items-center">
                        Custom stickers anywhere
                    </span>
                    <span className="text-[14px] md:text-[18px] text-bgGrey font-[400] h-[80px] px-1 md:p-5 border-b-2 flex items-center">
                        Bigger file sharing
                    </span>
                    <span className="text-[14px] md:text-[18px] text-bgGrey font-[400] h-[80px] px-1 md:p-5 border-b-2 flex items-center ">
                        HD streaming
                    </span>
                    <span className="text-[14px] md:text-[18px] text-bgGrey font-[400] h-[80px] px-1 md:p-5 border-b-2 flex items-center ">
                        2 Free Boosts <br /> + 30% off extra Boosts
                    </span>
                    <span className="text-[14px] md:text-[18px] text-bgGrey font-[400] h-[80px] px-1 md:p-5 border-b-2 flex items-center ">
                        Animated avatar, banner and profile theme
                    </span>
                    <span className="text-[14px] md:text-[18px] text-bgGrey font-[400] h-[80px] px-1 md:p-5 border-b-2 flex items-center ">
                        Early access to Clips
                    </span>
                    <span className="text-[14px] md:text-[18px] text-bgGrey font-[400] h-[80px] px-1 md:p-5 border-b-2 flex items-center ">
                        Custom server profiles
                    </span>
                    <span className="text-[14px] md:text-[18px] text-bgGrey font-[400] h-[80px] px-1 md:p-5 border-b-2 flex items-center ">
                        Nitro badge on your profile
                    </span>
                    <span className="text-[14px] md:text-[18px] text-bgGrey font-[400] h-[80px] px-1 md:p-5 border-b-2 flex items-center ">
                        Custom video backgrounds
                    </span>
                    <span className="text-[14px] md:text-[18px] text-bgGrey font-[400] h-[80px] px-1 md:p-5 border-b-2 flex items-center ">
                        Join up to 200 servers
                    </span>
                    <span className="text-[14px] md:text-[18px] text-bgGrey font-[400] h-[80px] px-1 md:p-5 border-b-2 flex items-center ">
                        Longer messages up to 4,000 characters
                    </span>
                    <span className="text-[14px] md:text-[18px] text-bgGrey font-[400] h-[80px] px-1 md:p-5 border-b-2 flex items-center ">
                        Colours for your Discord Theme
                    </span>
                    <span className="text-[14px] md:text-[18px] text-bgGrey font-[400] h-[80px] px-1 md:p-5 border-b-2 flex items-center ">
                        Custom sounds anywhere
                    </span>
                    <span className="text-[14px] md:text-[18px] text-bgGrey font-[400] h-[80px] px-1 md:p-5 border-b-2 flex items-center ">
                        Personalised entrance sounds
                    </span>
                    <span className="text-[14px] md:text-[18px] text-bgGrey font-[400] h-[80px] px-1 md:p-5 md:border-b-2 flex items-center ">
                        Access to the shop and exclusive avatar decorations
                    </span>
                    <span className="hidden md:flex items-center text-[14px] md:text-[18px] text-bgGrey font-[400] h-[80px] px-1 md:p-5 "></span>
                </div>
                <div className="w-[180px] flex flex-col ">
                    <span className="h-[80px] p-5 border-b-2 flex justify-center">
                        <img src={name1} alt="" />
                    </span>
                    <span className="text-[14px] md:text-[18px] font-[700]  h-[80px] p-5 border-b-2 flex items-center justify-center">
                        2/week
                    </span>
                    <span className="text-[14px] md:text-[18px] font-[700]  h-[80px] p-5 border-b-2 flex items-center justify-center">
                        <DoneIcon />
                    </span>
                    <span className="text-[14px] md:text-[18px] font-[700]  h-[80px] p-5 border-b-2 flex items-center justify-center">
                        <DoneIcon />
                    </span>
                    <span className="text-[14px] md:text-[18px] font-[700]  h-[80px] p-5 border-b-2 flex items-center justify-center">
                        50MB
                    </span>
                    <span className="text-[14px] md:text-[18px] text-gray-500 font-[700]  h-[80px] p-5 border-b-2 flex items-center justify-center">
                        <CloseIcon />
                    </span>
                    <span className="text-[18px] text-gray-500 font-[700] h-[80px] p-5 border-b-2 flex items-center justify-center">
                        <CloseIcon />
                    </span>
                    <span className="text-[14px] md:text-[18px] text-gray-500 font-[700] h-[80px] p-5 border-b-2 flex items-center justify-center">
                        <CloseIcon />
                    </span>
                    <span className="text-[14px] md:text-[18px] text-gray-500 font-[700] h-[80px] p-5 border-b-2 flex items-center justify-center">
                        <CloseIcon />
                    </span>
                    <span className="text-[14px] md:text-[18px] text-gray-500 font-[700]  h-[80px] p-5 border-b-2 flex items-center justify-center">
                        <CloseIcon />
                    </span>
                    <span className="text-[14px] md:text-[18px] font-[700]  h-[80px] p-5 border-b-2 flex items-center justify-center">
                        <DoneIcon />
                    </span>
                    <span className="text-[14px] md:text-[18px] font-[700]  h-[80px] p-5 border-b-2 flex items-center justify-center">
                        <DoneIcon />
                    </span>
                    <span className="text-[14px] md:text-[18px] text-gray-500 font-[700]  h-[80px] p-5 border-b-2 flex items-center justify-center">
                        <CloseIcon />
                    </span>
                    <span className="text-[14px] md:text-[18px] text-gray-500 font-[700]  h-[80px] p-5 border-b-2 flex items-center justify-center">
                        <CloseIcon />
                    </span>
                    <span className="text-[14px] md:text-[18px] text-gray-500 font-[700]  h-[80px] p-5 border-b-2 flex items-center justify-center">
                        <CloseIcon />
                    </span>
                    <span className="text-[14px] md:text-[18px] text-gray-500 font-[700]  h-[80px] p-5 border-b-2 flex items-center justify-center">
                        <CloseIcon />
                    </span>
                    <span className="text-[14px] md:text-[18px] text-gray-500 font-[700]  h-[80px] p-5 border-b-2 flex items-center justify-center">
                        <CloseIcon />
                    </span>
                    <span className="text-[14px] md:text-[18px] text-gray-500 font-[700]  h-[80px] p-5 md:border-b-2 flex items-center justify-center">
                        <CloseIcon />
                    </span>
                    <span className="hidden md:flex items-center justify-center  text-[14px] md:text-[18px] text-gray-500 font-[700]  h-[80px] p-5 ">
                        <Link
                            to="https://discord.com/app"
                            className="mt-[20px] flex items-center justify-center text-bgWhite bg-bgBlue rounded-[40px] font-[600] py-2 w-full hover:shadow-[0px_6px_12px_2px_rgba(0,0,0,0.3)] hover:bg-bgHover transition duration-200 hover:ease-in-out"
                        >
                            <span className="text-[12px]">Subscribe Basic</span>
                        </Link>
                    </span>
                </div>
                <div className="w-[200px] flex flex-col md:py-6 rounded-[20px] border-2 border-bgBorder relative">
                    <img
                        src={tag}
                        alt=""
                        className=" hidden md:block absolute -top-[12px] left-[40px]"
                    />
                    <span className="h-[80px] p-5 border-b-2 flex justify-center">
                        <img src={name2} alt="" className="-mt-3" />
                    </span>
                    <span className="text-[14px] md:text-[18px] font-[700] h-[80px] p-5 border-b-2 flex items-center justify-center">
                        5/week
                    </span>
                    <span className="text-[14px] md:text-[18px] font-[700] h-[80px] p-5 border-b-2 flex items-center justify-center">
                        <DoneIcon />
                    </span>
                    <span className="text-[14px] md:text-[18px] font-[700] h-[80px] p-5 border-b-2 flex items-center justify-center">
                        <DoneIcon />
                    </span>
                    <span className="text-[14px] md:text-[18px] font-[700] h-[80px] p-5 border-b-2 flex items-center justify-center">
                        500MB
                    </span>
                    <span className="text-[14px] md:text-[16px] font-[700] h-[80px] p-5 border-b-2 flex items-center justify-center">
                        Up to 4K and 60fps
                    </span>
                    <span className="text-[14px] md:text-[18px] font-[700] h-[80px] p-5 border-b-2 flex items-center justify-center">
                        <DoneIcon />
                    </span>
                    <span className="text-[14px] md:text-[18px] font-[700] h-[80px] p-5 border-b-2 flex items-center justify-center">
                        <DoneIcon />
                    </span>
                    <span className="text-[14px] md:text-[18px] font-[700]  h-[80px] p-5 border-b-2 flex items-center justify-center">
                        <DoneIcon />
                    </span>
                    <span className="text-[14px] md:text-[18px] font-[700]  h-[80px] p-5 border-b-2 flex items-center justify-center">
                        <DoneIcon />
                    </span>
                    <span className="text-[14px] md:text-[18px] font-[700]  h-[80px] p-5 border-b-2 flex items-center justify-center">
                        <DoneIcon />
                    </span>
                    <span className="text-[14px] md:text-[18px] font-[700]  h-[80px] p-5 border-b-2 flex items-center justify-center">
                        <DoneIcon />
                    </span>
                    <span className="text-[14px] md:text-[18px] font-[700]  h-[80px] p-5 border-b-2 flex items-center justify-center">
                        <DoneIcon />
                    </span>
                    <span className="text-[14px] md:text-[18px] font-[700]  h-[80px] p-5 border-b-2 flex items-center justify-center">
                        <DoneIcon />
                    </span>
                    <span className="text-[14px] md:text-[18px] font-[700]  h-[80px] p-5 border-b-2 flex items-center justify-center">
                        <DoneIcon />
                    </span>
                    <span className="text-[14px] md:text-[18px] font-[700]  h-[80px] p-5 border-b-2 flex items-center justify-center">
                        <DoneIcon />
                    </span>
                    <span className="text-[14px] md:text-[18px] font-[700]  h-[80px] p-5 border-b-2 flex items-center justify-center">
                        <DoneIcon />
                    </span>
                    <span className="text-[14px] md:text-[18px] font-[700]  h-[80px] p-5 md:border-b-2 flex items-center justify-center">
                        <DoneIcon />
                    </span>
                    <span className="hidden md:flex items-center justify-center text-[14px] md:text-[18px] font-[700]  h-[80px] p-5 ">
                        <Link
                            to="https://discord.com/app"
                            className="mt-[20px] flex items-center justify-center text-bgWhite bg-bgBlue rounded-[40px] font-[600] py-2 w-full hover:shadow-[0px_6px_12px_2px_rgba(0,0,0,0.3)] hover:bg-bgHover transition duration-200 hover:ease-in-out"
                        >
                            <span className="text-[12px]">Subscribe Nitro</span>
                        </Link>
                    </span>
                </div>
            </div>
            <div className="md:hidden flex flex-col gap-10 mt-10 px-5 sm:px-10">
                <div className="flex items-center justify-between gap-8">
                    <img src={name1} alt="" />
                    <Link
                        to="https://discord.com/app"
                        className="flex items-center justify-center text-bgWhite bg-bgBlue rounded-[40px] font-[600] py-2 w-full hover:shadow-[0px_6px_12px_2px_rgba(0,0,0,0.3)] hover:bg-bgHover transition duration-200 hover:ease-in-out"
                    >
                        <span className="text-[12px]">Subscribe Basic</span>
                    </Link>
                </div>
                <div className="flex items-center justify-between gap-8">
                    <img src={name2} alt="" />
                    <Link
                        to="https://discord.com/app"
                        className=" flex items-center justify-center text-bgWhite bg-bgBlue rounded-[40px] font-[600] py-2 w-full hover:shadow-[0px_6px_12px_2px_rgba(0,0,0,0.3)] hover:bg-bgHover transition duration-200 hover:ease-in-out"
                    >
                        <span className="text-[12px]">Subscribe Nitro</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
