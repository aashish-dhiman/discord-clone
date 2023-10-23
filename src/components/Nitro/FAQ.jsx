import GeneralTabs from "./GeneralTabs";
import { useState } from "react";
import anime2 from "../../assets/nitro/anime2.svg";
import star from "../../assets/nitro/star.svg";
import { Promotions, General, Payments, Other } from "../../constants/faq";

const FAQ = () => {
    const [activeTab, setActiveTab] = useState(3);

    return (
        <div className="relative min-h-[650px] ">
            <div className="relative">
                <h3 className="md:w-[60%] mx-auto text-center text-[26px] sm:text-[36px] md:text-[50px] text-bgBlack leading-[50px] font-[700] px-2">
                    Frequently Asked Questions
                </h3>
                <img
                    src={anime2}
                    alt=""
                    className="hidden md:block absolute -right-[50px] -top-[100px]"
                />
                <img
                    src={star}
                    alt=""
                    className="hidden md:block absolute -left-[60px] -bottom-[500px]"
                />
            </div>
            <div className="mt-10">
                {/* tabs */}
                <div className="flex items-center justify-center my-8 md:mt-16">
                    <ul className="flex flex-wrap gap-6 items-center justify-center px-10 text-[16px] font-[500] text-gray-500">
                        <li
                            className={`cursor-pointer py-2 ${
                                activeTab === 1 &&
                                "border-b-2 border-bgBlue font-[600] text-bgBlue"
                            }`}
                            onClick={() => {
                                setActiveTab(1);
                            }}
                        >
                            General
                        </li>
                        <li
                            className={`cursor-pointer py-2 ${
                                activeTab === 2 &&
                                "border-b-2 border-bgBlue font-[600] text-bgBlue"
                            }`}
                            onClick={() => {
                                setActiveTab(2);
                            }}
                        >
                            Payments
                        </li>
                        <li
                            className={`cursor-pointer py-2 ${
                                activeTab === 3 &&
                                "border-b-2 border-bgBlue font-[600] text-bgBlue"
                            }`}
                            onClick={() => {
                                setActiveTab(3);
                            }}
                        >
                            Gifting and Promotions
                        </li>
                        <li
                            className={`cursor-pointer py-2 ${
                                activeTab === 4 &&
                                "border-b-2 border-bgBlue font-[600] text-bgBlue"
                            }`}
                            onClick={() => {
                                setActiveTab(4);
                            }}
                        >
                            Other
                        </li>
                    </ul>
                </div>
                <div className="px-6 md:px-2">
                    {(() => {
                        switch (activeTab) {
                            case 1:
                                return <GeneralTabs faq={General} />;
                            case 2:
                                return <GeneralTabs faq={Payments} />;
                            case 3:
                                return <GeneralTabs faq={Promotions} />;
                            case 4:
                                return <GeneralTabs faq={Other} />;
                            default:
                                console.log("Sorry");
                                return null;
                        }
                    })()}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
