import React from "react";
import { ReactComponent as Profile } from "../assets/image/profile.svg";

const Box = ({ color }) => {
    return <div className={`w-2 h-2 rounded-[1px] m-0.5 ${color}`}></div>;
};

const Grid = () => {
    const rows = 4;
    const columns = 7;

    // 28개의 색상 정보 배열
    const colors = [
        "bg-pointColor",
        "bg-pointColor",
        "bg-pointColor",
        "bg-pointColor",
        "bg-pointColor",
        "bg-faultColor",
        "bg-pointColor",
        "bg-pointColor",
        "bg-pointColor",
        "bg-pointColor",
        "bg-pointColor",
        "bg-faultColor",
        "bg-pointColor",
        "bg-pointColor",
        // 추가적인 색상을 필요에 따라 계속 추가
    ];

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

    return <div>{matrix}</div>;
};

const ProfileListItem = ({ index = 0 }) => {
    return (
        <div className="flex justify-between items-center m-3 p-4 md:p-4 bg-bgColor h-20 md:h-16 rounded-lg">
            <div className="flex items-center">
                <div className="font-extrabold text-xl w-5">{index}</div>
                <Profile className="w-12 mx-3 h-12 md:w-12 md:h-12 text-nowrap" />
                <div className="font-extrabold text-base text-nowrap mr-4">
                    김훕스
                </div>
            </div>

            <div className="flex">
                <div className="hidden md:block font-normal text-sm text-nowrap mx-4">
                    최근 커밋 시간
                </div>
                <div className="hidden md:block font-extrabold text-base mr-8">
                    2024년 1월 13일 16:03:22
                </div>
            </div>

            <div className="md:flex">
                <div className="flex items-center">
                    <div className="font-normal text-base text-nowrap ml-2">
                        Streak🔥
                    </div>
                    <div className="font-extrabold text-pointColor text-base mr-8">
                        2
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="font-normal text-sm text-nowrap mr-2">
                        총 커밋 횟수
                    </div>
                    <div className="font-extrabold text-pointColor text-base mr-12">
                        745
                    </div>
                </div>
            </div>
            <Grid />
        </div>
    );
};

export default ProfileListItem;
