import React from "react";
import { useParams } from "react-router-dom";
import { ReactComponent as Left } from "../assets/image/left.svg";
import { ReactComponent as Link } from "../assets/image/link.svg";
import TodayCommitsBox from "../components/TodayCommitsBox";

function MemberDetail() {
    let { memberId } = useParams();
    return (
        <div className="flex flex-col px-4 md:px-20">
            <div className="flex items-center mt-4 md:mt-7">
                <Left className=" w-2 md:w-4 mr-2" />
                <div className=" text-xs md:text-2xl">목록으로</div>
            </div>
            <div className="flex mt-5 md:mt-10">
                <div className="avatar mr-7">
                    <div className=" w-14 h-14 md:w-28 md:h-28 rounded-full">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    <div className="text-xl md:text-4xl font-extrabold md:mb-5">
                        진윤겸님의 커밋 기록
                    </div>
                    <div className="hidden md:flex md:flex-wrap ">
                        <div className=" md:block text-xl mr-3">
                            업데이트 시간
                        </div>
                        <div className=" md:block text-xl font-extrabold mr-5">
                            {" "}
                            2024년 1월 13일 16:03:22{" "}
                        </div>
                        <div className="flex flex-wrap">
                            {" "}
                            <div className=" md:block text-xl mr-3">진윤겸</div>
                            <div className=" md:block text-xl font-extrabold">
                                @Younkyum
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex mt-4">
                <div className="text-base mr-3 md:hidden">진윤겸</div>
                <div className="text-base font-extrabold md:hidden">
                    @Younkyum
                </div>
            </div>
            <div className="flex mt-5">
                <div className="flex flex-col mr-5 md:mr-16">
                    <div className=" text-xs md:text-lg">Streak🔥</div>
                    <div className=" text-xs md:text-2xl font-extrabold text-pointColor mt-2">
                        15
                    </div>
                </div>
                <div className="flex flex-col mr-5  md:mr-16">
                    <div className="text-xs md:text-lg whitespace-nowrap">
                        총 커밋 횟수
                    </div>
                    <div className=" text-xs md:text-2xl font-extrabold text-pointColor mt-2">
                        745
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="text-xs md:text-lg">최근 커밋 시간</div>
                    <div className="text-xs md:text-2xl font-extrabold mt-2">
                        2024년 1월 13일 16;03:22
                    </div>
                </div>
            </div>
            <div class="md:hidden w-full border-t border-divideColor border-[0.5px] mt-4 mb-4"></div>
            <div className="w-full grid grid-cols-[1fr,6fr] md:grid-cols-[1fr,4fr,1fr,4fr] md:mt-7 gap-1">
                <div className="text-sm md:text-xl md:mr-10">TIL</div>
                <div className="flex text-sm md:text-xl md:mr-7 text-pointColor">
                    <Link className="mr-2 md:w-6 md:h-6" />
                    https://onve.tistory.com/
                </div>
                <div className="text-sm md:text-xl md:mr-10">Github</div>
                <div className="flex text-sm md:text-xl text-pointColor">
                    <Link className="mr-2 md:w-6 md:h-6" />
                    https://github.com/Younkyum
                </div>
            </div>
            <div className="flex items-center mt-7 mb-3 md:mt-8 md:mb-5">
                <div className="font-bold text-sm mr-3 md:text-xl">
                    Today Commits
                </div>
                <div className="flex items-center justify-center rounded-full text-xs font-bold bg-pointColor w-7 h-4 md:w-9 md:h-6">
                    1
                </div>
            </div>
            <TodayCommitsBox />
            {/* Commit Streak Box 구현 */}
            <div className="font-bold text-sm mr-3 md:text-xl mt-7 md:mt-16">
                Commit Streak🔥
            </div>{" "}
            <div>box</div>
        </div>
    );
}

export default MemberDetail;
