import React from "react";
import { ReactComponent as Right } from "../assets/image/right.svg";

function TodayCommitsBox({ commits, name }) {
    return (
        <a
            href={`https://github.com/${commits.repositoryName}`}
            target="_blank"
            rel="noopener noreferrer"
        >
            {" "}
            <div className="flex justify-between items-center p-3 md:p-6 bg-[#242625] h-12 md:h-24 rounded-xl">
                <div className="flex flex-col">
                    <div className="flex flex-wrap font-bold text-xs md:text-xl">
                        <div className="pr-1 flex flex-wrap">
                            {name} commited to commits
                        </div>{" "}
                        <div className="flex-wrap">
                            {" "}
                            {commits.repositoryName}
                        </div>
                    </div>
                    <div className=" text-xs md:text-base mt-1 text-dummyColor">
                        {commits.id} |{" "}
                        {new Date(commits.createdAt).toLocaleTimeString(
                            "en-GB",
                            {
                                hour: "2-digit",
                                minute: "2-digit",
                                second: "2-digit",
                            }
                        )}
                    </div>
                </div>
                <Right className="w-2" />
            </div>
        </a>
    );
}

export default TodayCommitsBox;
