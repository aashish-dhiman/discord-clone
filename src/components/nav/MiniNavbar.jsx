import { MenuItems } from "../../constants/MenuItems";
import { NavLink, Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import black_logo from "../../assets/logo/black_logo.svg";

const MiniNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        if (isOpen) {
            // When the menu is open, disable scrolling on the body
            document.body.style.overflow = "hidden";
        } else {
            // When the menu is closed, allow scrolling on the body
            document.body.style.overflow = "visible";
        }

        // Clean up the effect
        return () => {
            document.body.style.overflow = "visible";
        };
    }, [isOpen]);

    return (
        <nav>
            <div className=" bg-transparent relative px-10 py-6 w-full flex items-center justify-between">
                <Link to="/">
                    <img
                        src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0b5493894cf60b300587_full_logo_white_RGB.svg "
                        alt="logo"
                        className=" w-[130px] h-full"
                    />
                </Link>
                <div className="w-[130px] flex justify-end gap-4">
                    <Link className="bg-white text-black font-[500] w-[70px] px-3 py-2 tracking-wide text-center rounded-[40px] text-[12px] hover:shadow-[0px_6px_12px_2px_rgba(0,0,0,0.3)] hover:text-bgBlue transition duration-200 hover:ease-in-out ">
                        Login
                    </Link>
                    <span
                        className="mt-1 cursor-pointer"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <MenuIcon className="text-white scale-[1.2]" />
                    </span>
                </div>
                {isOpen && (
                    <div className="absolute top-0 left-0 flex flex-col items-end w-full min-h-screen overflow-scroll">
                        <div className="w-[350px] relative bg-white min-h-screen rounded-xl z-30 p-8 overflow-scroll">
                            <div className="flex items-center justify-between">
                                <Link to="/">
                                    <img
                                        src={black_logo}
                                        alt="logo"
                                        className=" w-[130px] h-full"
                                    />
                                </Link>
                                <span
                                    onClick={() => {
                                        setIsOpen(!isOpen);
                                    }}
                                    className="hover:scale-[1.06]"
                                >
                                    <CloseIcon />
                                </span>
                            </div>
                            <ul className="flex flex-col items-start gap-6 mt-16">
                                {MenuItems.map((item, i) => {
                                    return (
                                        <NavLink
                                            key={i}
                                            to={`/${item.toLowerCase()}`}
                                            className={({
                                                isActive,
                                                isPending,
                                            }) =>
                                                isPending
                                                    ? "text-btnDark text-[15px] hover:underline p-3"
                                                    : isActive
                                                    ? "text-bgBlue text-[15px] underline p-3"
                                                    : ""
                                            }
                                        >
                                            {item}
                                        </NavLink>
                                    );
                                })}
                            </ul>
                            <div className="">
                                <a
                                    href="https://discordapp.page.link/?link=https%3A%2F%2Fitunes.apple.com%2Fus%2Fapp%2Fdiscord-chat-for-games%2Fid985746746%3Ffingerprint%3D1165395575823413372.cHT-wuYpWUxRFm-AZTuqxJm1o-g%26attemptId%3D519d33fe-55f1-49c0-868f-41eb50a63867&utm_source=download&apn=com.discord&isi=985746746&ibi=com.hammerandchisel.discord&sd=Your%20place%20to%20talk%20with%20communities%20and%20friends.&efr=1"
                                    className="absolute bottom-10 left-7 w-fit bg-bgBlue text-white py-3 px-8 rounded-[40px] text-[14px] hover:shadow-[0px_6px_12px_2px_rgba(0,0,0,0.3)] transition duration-200 hover:ease-in-out"
                                >
                                    <FileDownloadOutlinedIcon className="mr-2" />
                                    Download from Google Play
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default MiniNavbar;