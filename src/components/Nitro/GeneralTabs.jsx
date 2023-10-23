/* eslint-disable react/prop-types */
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const GeneralTabs = ({ faq }) => {
    const [isOpen, setIsOpen] = useState();

    return faq.map((item, i) => {
        return (
            <div
                key={i}
                className={`p-6 mt-3 rounded-lg cursor-pointer select-none transition duration-2000 hover:ease-in-out ${
                    isOpen === item.index
                        ? "bg-bgBlue text-bgWhite "
                        : "bg-bgWhite"
                }`}
                onClick={() => {
                    isOpen === item.index
                        ? setIsOpen(-1)
                        : setIsOpen(item.index);
                }}
            >
                <div className="flex items-center justify-between text-[18px] font-[600]">
                    <h4 className="px-1">{item.question}</h4>
                    <CloseIcon
                        className={`${
                            isOpen === item.index ? "rotate-0" : "rotate-45"
                        } transition duration-2000 hover:ease-in-out `}
                    />
                </div>
                {isOpen === item.index && <p className="mt-3 md:pr-6">{item.answer}</p>}
            </div>
        );
    });
};

export default GeneralTabs;
