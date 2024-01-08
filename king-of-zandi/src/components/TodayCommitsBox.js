import React from "react";
import { ReactComponent as Right } from "../assets/image/right.svg";

function TodayCommitsBox({ commits, name }) {
    return (
        <div className="flex justify-between items-center p-3 md:p-6 bg-[#242625] h-12 md:h-24 rounded-xl">
            <div className="flex flex-col">
                <div className=" font-bold text-xs md:text-xl">
                    {name} commited to commits {commits.repositoryName}
                </div>
                <div className=" text-xs md:text-base mt-1 text-dummyColor">
                    {commits.id} |{" "}
                    {new Date(commits.createdAt).toLocaleTimeString("en-GB", {
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                    })}
                </div>
            </div>
            <Right className="w-2" />
        </div>
    );
}

export default TodayCommitsBox;
