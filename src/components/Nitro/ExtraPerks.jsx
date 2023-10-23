import card5 from "../../assets/nitro/card5.svg";
import card6 from "../../assets/nitro/card6.svg";
import card7 from "../../assets/nitro/card7.svg";
import card8 from "../../assets/nitro/card8.svg";
import card9 from "../../assets/nitro/card9.svg";
import card10 from "../../assets/nitro/card10.svg";

const ExtraPerks = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-6">
            <div className="flex flex-col items-center gap-6 bg-bgWhite text-bgBlack rounded-md px-10 py-10">
                <img src={card5} alt="card" />
                <div className="flex flex-col items-center justify-center text-center gap-1 w-[90%] ">
                    <h4 className="text-[20px] font-[700]">
                        Avatar Decorations
                    </h4>
                    <p className="text-[14px] font-[400]">
                        Access exclusive decorations and the shop, where you can
                        buy and collect your favorite styles.
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-center gap-6 bg-bgWhite text-bgBlack rounded-md px-10 py-10">
                <img src={card6} alt="card" />
                <div className="flex flex-col items-center justify-center text-center gap-1 w-[90%] ">
                    <h4 className="text-[20px] font-[700]">Custom Profiles</h4>
                    <p className="text-[14px] font-[400]">
                        Use a different avatar, profile theme, banner and bio in
                        each of your servers.
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-center gap-6 bg-bgWhite text-bgBlack rounded-md px-10 py-10">
                <img src={card7} alt="card" />
                <div className="flex flex-col items-center justify-center text-center gap-1 w-[90%] ">
                    <h4 className="text-[20px] font-[700]">
                        Custom Sounds Everywhere
                    </h4>
                    <p className="text-[14px] font-[400]">
                        Use custom sounds and personalized entrance sounds
                        across voice channels.
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-center gap-6 bg-bgWhite text-bgBlack rounded-md px-10 py-10">
                <img src={card8} alt="card" />
                <div className="flex flex-col items-center justify-center text-center gap-1 w-[90%] ">
                    <h4 className="text-[20px] font-[700]">Super Reactions</h4>
                    <p className="text-[14px] font-[400]">
                        Hype up the chat with action-packed, animated reactions.
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-center gap-6 bg-bgWhite text-bgBlack rounded-md px-10 py-10">
                <img src={card9} alt="card" />
                <div className="flex flex-col items-center justify-center text-center gap-1 w-[90%] ">
                    <h4 className="text-[20px] font-[700]">More Backgrounds</h4>
                    <p className="text-[14px] font-[400]">
                        Customize video calls with your own video backgrounds.
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-center gap-6 bg-bgWhite text-bgBlack rounded-md px-10 py-10">
                <img src={card10} alt="card" />
                <div className="flex flex-col items-center justify-center text-center gap-1 w-[90%] ">
                    <h4 className="text-[20px] font-[700]">Colour Themes</h4>
                    <p className="text-[14px] font-[400]">
                        Add your vibe to Discord with unique theme colours.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ExtraPerks;
