import React from "react";
import { ReactComponent as Profile } from "../assets/image/profile.svg";
import { Link } from "react-router-dom";

const ProfileListBox = ({ name, last28, githubUsername }) => {
    return (
        <Link
            to={`/member/${githubUsername}`}
            className="flex justify-between items-center m-3 p-2 md:p-2 bg-bgColor h-20 md:h-16 rounded-lg"
        >
            <div className="flex items-center">
                <img
                    src={`https://github.com/${githubUsername}.png`}
                    className="w-8 mr-3 h-8 md:w-8 md:h-8 text-nowrap rounded-full"
                />
                <div className="font-extrabold text-base text-nowrap w-20 mr-4">
                    {name}
                </div>
            </div>
            <div className="flex flex-wrap">
                <div className="flex flex-wrap">
                    {last28.map((i, index) => (
                        <div
                            key={index}
                            className={`w-3 h-3 sm:w-5 sm:h-5 ${
                                i === 0
                                    ? "bg-faultColor"
                                    : i === -1
                                    ? "bg-white"
                                    : "bg-pointColor"
                            } rounded-sm m-[2px]`}
                        ></div>
                    ))}
                </div>
            </div>
        </Link>
    );
};

export default ProfileListBox;
