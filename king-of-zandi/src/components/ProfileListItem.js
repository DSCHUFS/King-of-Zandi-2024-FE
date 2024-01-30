import React from "react";
import { Link } from "react-router-dom";

const Box = ({ color }) => {
    return <div className={`w-2 h-2 rounded-[1px] m-0.5 ${color}`}></div>;
};

const Grid = ({ last28 }) => {
    const rows = 4;
    const columns = 7;

    const colors = last28.map((i) =>
        i === 0 ? "bg-faultColor" : i === -1 ? "bg-white" : "bg-pointColor"
    );
    // 28개의 색상 정보 배열

    // 행렬을 만들기 위한 이중 반복문
    const matrix = [];
    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < columns; j++) {
            // colors 배열에서 색상을 가져와서 적용
            const colorIndex = j * rows + i; // 행과 열의 순서를 바꿔줍니다.
            const color = colors[colorIndex] || "bg-white"; // colors 배열을 넘어갈 경우 기본값은 "bg-white"
            row.push(<Box key={`${i}-${j}`} color={color} />);
        }
        matrix.push(
            <div key={i} className="flex">
                {row}
            </div>
        );
    }

    return <div className="hidden xs:block">{matrix}</div>;
};

function extractDateAndTime(dateTimeString) {
    // Default : "None"
    if (!dateTimeString) {
        return { date: "None", time: "" };
    }
    let utcDate = new Date(dateTimeString);

    // YYYY년 MM월 DD일 형식
    const datePart = `${utcDate.getFullYear()}년 ${(utcDate.getMonth() + 1)
        .toString()
        .padStart(2, "0")}월 ${utcDate
        .getDate()
        .toString()
        .padStart(2, "0")}일`;
    // 시간 HH:MM:SS 형식
    const timePart = `${utcDate
        .getHours()
        .toString()
        .padStart(2, "0")}:${utcDate
        .getMinutes()
        .toString()
        .padStart(2, "0")}:${utcDate.getSeconds().toString().padStart(2, "0")}`;

    return { date: datePart, time: timePart };
}

const ProfileListItem = ({
    index,
    name,
    githubUsername,
    streak,
    total,
    last28,
    lastPush,
}) => {
    const { date, time } = extractDateAndTime(lastPush);

    return (
        <Link
            to={`/member/${githubUsername}`}
            className=" flex justify-between items-center m-3 p-2 sm:p-4 bg-bgColor h-20 md:h-16 rounded-lg"
        >
            <div className="flex items-center">
                <div className="font-bold sm:font-extrabold text-sm sm:text-xl w-5">
                    {index}
                </div>
                <img
                    src={`https://github.com/${githubUsername}.png`}
                    className="w-7 h-7 sm:w-12 sm:h-12 mx-1 sm:mx-3 text-nowrap rounded-full"
                />
                <div className="font-bold sm:font-extrabold text-sm sm:text-base text-nowrap mr-4">
                    {name}
                </div>
            </div>

            <div className="flex md:flex-col lg:flex-row items-center">
                <div className="hidden lg:block font-normal text-sm text-nowrap mx-4">
                    최근 커밋 시간
                </div>
                <div className="hidden ml:block font-extrabold text-base w-[140px] mr-2">
                    {date}
                </div>
                <div className="hidden ml:block font-extrabold text-base w-20 mr-4">
                    {time}
                </div>
            </div>

            <div className="md:flex w-32 sm:w-auto">
                <div className="flex items-center">
                    <div className="font-normal text-sm sm:text-base text-nowrap">
                        Streak🔥
                    </div>
                    <div className="font-extrabold text-pointColor sm:w-12 text-sm sm:text-base">
                        {streak}
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="font-normal text-sm sm:text-base text-nowrap mr-2">
                        총 커밋 일자
                    </div>
                    <div className="font-extrabold text-pointColor text-sm sm:text-base sm:w-12 mr-2">
                        {last28.filter((i) => i > 0).length}
                    </div>
                </div>
            </div>
            <Grid last28={last28} />
        </Link>
    );
};

export default ProfileListItem;
