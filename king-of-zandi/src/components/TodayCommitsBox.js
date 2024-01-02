import React from "react";
import { ReactComponent as Right } from "../assets/image/right.svg";

function TodayCommitsBox() {
    return (
        <div className="flex justify-between items-center p-3 md:p-6 bg-[#242625] h-12 md:h-24 rounded-xl">
            <div className="flex flex-col">
                <div className=" font-bold text-xs md:text-xl">
                    Created 1 commit in 1 repository
                </div>
                <div className=" text-xs md:text-base">
                    NLP_FeelIT/FeelIT-iOS
                </div>
            </div>
            <Right className="w-2" />
        </div>
    );
}

export default TodayCommitsBox;
