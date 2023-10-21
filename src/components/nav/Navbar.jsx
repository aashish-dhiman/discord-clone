import { MenuItems } from "../../constants/MenuItems";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <div className=" z-20 bg-transparent relative px-10 py-6 w-full flex items-center justify-between">
                <Link to="/">
                    <img
                        src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0b5493894cf60b300587_full_logo_white_RGB.svg "
                        alt="logo"
                        className=" w-[130px] h-full"
                    />
                </Link>
                <div>
                    <NavLink className="flex items-center gap-10">
                        {MenuItems.map((item, i) => {
                            return (
                                <Link
                                    key={i}
                                    className="text-white text-[15px] hover:underline "
                                >
                                    {item}
                                </Link>
                            );
                        })}
                    </NavLink>
                </div>
                <div className="w-[130px] flex justify-end">
                    <Link className="bg-white text-black font-[500] w-[70px] px-3 py-2 tracking-wide text-center rounded-[40px] text-[12px] hover:shadow-[0px_6px_12px_2px_rgba(0,0,0,0.3)] hover:text-bgBlue transition duration-200 hover:ease-in-out ">
                        Login
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;