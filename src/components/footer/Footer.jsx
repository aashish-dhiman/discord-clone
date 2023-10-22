import React from "react";
import { Company, Product, Resources, Policies } from "../../constants/Footer";
import { Link } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    select: {
        color: "white", // Set the text color to white
        "& .MuiSelect-icon": {
            color: "white", // Set the arrow color to white
        },
    },
}));

const Footer = () => {
    const [age, setAge] = React.useState("English");
    const classes = useStyles();

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <footer>
            <div className="bg-bgBlack w-full flex flex-col items-center justify-between px-10 py-10 text-bgWhite">
                {/* top */}
                <div className="flex flex-col sm:flex-row gap-5 w-full py-16 ">
                    <div className="sm:w-[350px]">
                        <div className="mt-6">
                            <Box sx={{ width: 150 }}>
                                <FormControl variant="standard" fullWidth>
                                    <Select
                                        id="demo-simple-select"
                                        value={age}
                                        label="Age"
                                        onChange={handleChange}
                                        style={{
                                            color: "white",
                                            backgroundColor: "transparent",
                                        }}
                                        className={classes.select}
                                    >
                                        <MenuItem value={"English"}>
                                            English, US
                                        </MenuItem>
                                        <MenuItem value={"Arabic"}>
                                            Arabic
                                        </MenuItem>
                                        <MenuItem value={"Hindi"}>
                                            Hindi
                                        </MenuItem>
                                        <MenuItem value={"Romana"}>
                                            Romana
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                            <ul className="flex items-center gap-5 mt-10">
                                <li>
                                    <a href="https://twitter.com/discord">
                                        <TwitterIcon />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/discord/">
                                        <InstagramIcon />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/discord/">
                                        <FacebookIcon />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/discord/">
                                        <YouTubeIcon />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.tiktok.com/@discord">
                                        <MusicNoteIcon />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex-grow items-center mt-10 sm:mt-0 ">
                        <div className="px-4 pb-5 flex flex-row flex-wrap gap-10 items-start justify-center sm:justify-between ">
                            {/* Product */}
                            <div className="w-[150px]">
                                <h5 className="text-bgBlue ">Product</h5>
                                <ul className="flex flex-col gap-3 font-[400] mt-8">
                                    {Product.map(({ name, link }, i) => {
                                        return (
                                            <Link
                                                key={i}
                                                to={link}
                                                className="hover:underline"
                                            >
                                                {name}
                                            </Link>
                                        );
                                    })}
                                </ul>
                            </div>
                            {/* Company */}
                            <div className="w-[150px]">
                                <h5 className="text-bgBlue ">Company</h5>
                                <ul className="flex flex-col gap-3 font-[400] mt-8">
                                    {Company.map(({ name, link }, i) => {
                                        return (
                                            <Link
                                                key={i}
                                                to={link}
                                                className="hover:underline"
                                            >
                                                {name}
                                            </Link>
                                        );
                                    })}
                                </ul>
                            </div>
                            {/* Resources */}
                            <div className="w-[150px]">
                                <h5 className="text-bgBlue ">Resources</h5>
                                <ul className="flex flex-col gap-3 font-[400] mt-8">
                                    {Resources.map(({ name, link }, i) => {
                                        return (
                                            <Link
                                                key={i}
                                                to={link}
                                                className="hover:underline"
                                            >
                                                {name}
                                            </Link>
                                        );
                                    })}
                                </ul>
                            </div>
                            {/* Policies */}
                            <div className="w-[150px]">
                                <h5 className="text-bgBlue ">Policies</h5>
                                <ul className="flex flex-col gap-3 font-[400] mt-8">
                                    {Policies.map(({ name, link }, i) => {
                                        return (
                                            <Link
                                                key={i}
                                                to={link}
                                                className="hover:underline"
                                            >
                                                {name}
                                            </Link>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* bottom */}
                <div className="border-t-2 border-bgBlue w-full">
                    <div className="flex items-center justify-between mt-8">
                        <Link to="/">
                            <img
                                src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0b5493894cf60b300587_full_logo_white_RGB.svg "
                                alt="logo"
                                className=" w-[130px] h-full"
                            />
                        </Link>
                        <Link
                            to="/register"
                            className="text-[14px] text-white bg-bgBlue rounded-[40px] px-4 py-3 w-fit hover:shadow-[0px_6px_12px_2px_rgba(0,0,0,0.3)] hover:bg-bgHover transition duration-200 hover:ease-in-out"
                        >
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
