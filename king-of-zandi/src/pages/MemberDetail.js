import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ReactComponent as Left } from "../assets/image/left.svg";
import { ReactComponent as LinkIcon } from "../assets/image/link.svg";
import TodayCommitsBox from "../components/TodayCommitsBox";
import CommitStreakBox from "../components/CommitStreakBox";
import axios from "axios";

function MemberDetail() {
    let { githubProfileID } = useParams();
    const [userData, setUserData] = useState(null);
    const [todayCommits, setTodayCommits] = useState([]);
    const [lastUpdatedAt, setLastUpdatedAt] = useState(null);

    useEffect(() => {
        // 사용자 데이터 가져오기
        axios
            .get(`https://api-jandi.gdschufs.com/profiles/${githubProfileID}`)
            .then((res) => {
                setUserData(res.data.data);
                setLastUpdatedAt(res.data.lastUpdatedAt);
            })
            .catch((err) => {
                console.log(err);
            });

        // 오늘의 커밋 데이터 가져오기
        axios
            .get(
                `https://api-jandi.gdschufs.com/profiles/${githubProfileID}/pushEvents/today`
            )
            .then((res) => {
                setTodayCommits(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [githubProfileID]);

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex flex-col px-4 md:px-20 pb-12 md:pb-32 bg-black">
            <div className="flex items-center mt-4 md:mt-7">
                <Left className=" w-2 md:w-4 mr-2" />
                <Link to="/" className="text-xs md:text-2xl">
                    목록으로
                </Link>
            </div>
            <div className="flex mt-5 md:mt-10">
                <div className="avatar mr-3 md:mr-7">
                    <div className=" w-14 h-14 md:w-28 md:h-28 rounded-full">
                        <img
                            alt="avatar"
                            src={`https://github.com/${userData.githubUsername}.png`}
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    <div className="text-xl md:text-4xl font-extrabold md:mb-5">
                        {userData.name}님의 커밋 기록
                    </div>
                    <div className="hidden md:flex md:flex-wrap ">
                        <div className=" md:block text-xl mr-3">
                            업데이트 시간
                        </div>
                        <div className=" md:block text-xl font-extrabold mr-5">
                            {" "}
                            {new Date(lastUpdatedAt).toLocaleString()}
                        </div>
                        <div className="flex flex-wrap">
                            {" "}
                            <div className=" md:block text-xl mr-3">
                                {userData.name}
                            </div>
                            <div className=" md:block text-xl font-extrabold">
                                @{userData.githubUsername}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex mt-4">
                <div className="text-base mr-3 md:hidden">{userData.name}</div>
                <div className="text-base font-extrabold md:hidden">
                    @{userData.githubUsername}
                </div>
            </div>
            <div className="flex mt-5">
                <div className="flex flex-col mr-5 md:mr-16">
                    <div className=" text-xs md:text-lg whitespace-nowrap">
                        Streak🔥
                    </div>
                    <div className=" text-xs md:text-2xl font-extrabold text-pointColor mt-2">
                        15
                    </div>
                </div>
                <div className="flex flex-col mr-5  md:mr-16">
                    <div className="text-xs md:text-lg whitespace-nowrap">
                        총 커밋 횟수
                    </div>
                    <div className=" text-xs md:text-2xl font-extrabold text-pointColor mt-2">
                        {userData.totalCommitCounts}
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="text-xs md:text-lg whitespace-nowrap">
                        최근 커밋 시간
                    </div>
                    <div className="text-xs md:text-2xl font-extrabold mt-2">
                        {new Date(userData.latestPushedAt).toLocaleString()}
                    </div>
                </div>
            </div>
            <div class="md:hidden w-full border-t border-divideColor border-[0.5px] mt-4 mb-4"></div>
            <div className="w-full flex flex-wrap  md:mt-7">
                <div className="flex mr-5 md:mr-7">
                    {" "}
                    <div className="til-text text-sm mr-1 md:text-xl md:mr-10">
                        TIL
                    </div>
                    <div className="til-link flex text-sm md:text-xl md:mr-7 text-pointColor">
                        <Link className="mr-2 md:w-6 md:h-6" />
                        {userData.websiteUrl}
                    </div>
                </div>

                <div className=" flex-wrap flex">
                    <div className="github-text text-sm mr-1 md:text-xl">
                        Github
                    </div>
                    <div className="github-link flex text-sm md:text-xl text-pointColor">
                        <LinkIcon className="mr-2 md:w-6 md:h-6" />
                        https://github.com/{userData.githubUsername}
                    </div>
                </div>
            </div>
            <div className="flex items-center mt-7 mb-3 md:mt-8 md:mb-5">
                <div className="font-bold text-sm mr-3 md:text-xl">
                    Push Events
                </div>
                <div className="flex items-center justify-center rounded-full text-xs font-bold bg-pointColor w-7 h-4 md:w-9 md:h-6">
                    {todayCommits.length}
                </div>
            </div>
            {todayCommits.length > 0 && (
                <TodayCommitsBox
                    commits={todayCommits[0]}
                    name={userData.name}
                />
            )}{" "}
            {/* Commit Streak Box 구현 */}
            <div className="font-bold text-sm mr-3 md:text-xl mt-7 md:mt-16 mb-3 md:mb-5">
                Commit Streak🔥
            </div>{" "}
            {userData && userData.last28daysContributionCounts && (
                <CommitStreakBox
                    pushCounts={userData.last28daysContributionCounts}
                />
            )}
        </div>
    );
}

export default MemberDetail;
