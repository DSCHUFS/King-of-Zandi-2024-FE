import React from "react";

function CommitStreakBox({ pushCounts }) {
    const firstHalf = pushCounts.slice(0, 14);
    const secondHalf = pushCounts.slice(14);

    const renderBoxes = (data) => (
        <div className="flex flex-wrap">
            {data.map((count, index) => (
                <div
                    key={index}
                    className={`w-5 md:w-9 h-5 md:h-9 rounded-sm m-[2px] md:m-[4px] ${
                        count > 0 ? " bg-pointColor" : ""
                    } ${count === 0 ? " bg-faultColor" : ""} ${
                        count === -1 ? "bg-white" : ""
                    }`}
                ></div>
            ))}
        </div>
    );

    return (
        <div className="flex flex-wrap">
            {renderBoxes(firstHalf)}
            {renderBoxes(secondHalf)}
        </div>
    );
}

export default CommitStreakBox;
