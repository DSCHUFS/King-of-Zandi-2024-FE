import React from "react";
import { ReactComponent as Profile } from "../assets/image/profile.svg";

const ProfileListBox = () => {
    return (
        <div className="flex justify-between items-center m-3 p-2 md:p-2 bg-bgColor h-20 md:h-16 rounded-lg">
            <div className="flex items-center">
                <Profile className="w-8 mr-3 h-8 md:w-8 md:h-8 text-nowrap" />
                <div className="font-extrabold text-base text-nowrap mr-4">
                    김훕스
                </div>
            </div>
            <div className="flex flex-wrap">
                <div className="flex flex-wrap">
                    {Array.from({ length: 28 }).map((_, index) => (
                        <div
                            key={index}
                            className="w-5 h-5 bg-white rounded-sm m-[2px]"
                        ></div>
                    ))}
                </div>
                {/* <div className="flex flex-wrap">
                    {Array.from({ length: 14 }).map((_, index) => (
                        <div
                            key={index}
                            className="w-4 h-4 bg-white rounded-sm m-[2px] md:m-[4px]"
                        ></div>
                    ))}
                </div> */}
            </div>
        </div>
    );
};

export default ProfileListBox;
