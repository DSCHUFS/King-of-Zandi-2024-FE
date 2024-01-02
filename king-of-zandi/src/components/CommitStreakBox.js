import React from "react";

function CommitStreakBox() {
    return (
        <div className="flex flex-wrap">
            <div className="flex flex-wrap">
                {Array.from({ length: 14 }).map((_, index) => (
                    <div
                        key={index}
                        className="w-5 md:w-9 h-5 md:h-9 bg-white rounded-sm m-[2px] md:m-[4px]"
                    >
                        d
                    </div>
                ))}
            </div>
            <div className="flex flex-wrap">
                {Array.from({ length: 14 }).map((_, index) => (
                    <div
                        key={index}
                        className="w-5 md:w-9 h-5 md:h-9 bg-white rounded-sm m-[2px] md:m-[4px]"
                    >
                        d
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CommitStreakBox;
