import React, { useEffect, useState } from "react";
import ProfileListItem from "./ProfileListItem";
import ProfileListBox from "./ProfileListBox";
import axios from "axios";
import "./loading.css"
import { useRecoilValue } from "recoil";
import { tabState, tableState } from "./atom";

const ProfileList = () => {
    // Generate an array of indices from 1 to n
    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)
    const table = useRecoilValue(tableState)

    const tabId = useRecoilValue(tabState)

    const getUrl = () => {
        if (tabId === 0) {
            return "latestPushedAt"
        } else if (tabId === 1) {
            return "streakCounts"
        } else return "totalCommitCounts"
    }


    useEffect(() => {
        axios.get(`https://api-jandi.gdschufs.com/profiles?sort=${getUrl()}`)
            .then(res => {
                console.log(res)
                setData(res.data.data)
                setLoading(true)
            }).catch(err => console.log(err))
    }, [tabId])

    return (
        <div className="flex flex-col md:items-center md:px-20 bg-black">
            {loading ?
                data.map((user, i) =>

                    table ?
                        <ProfileListItem
                            key={i} index={i + 1}
                            name={user.name}
                            githubUsername={user.githubUsername}
                            streak={user.streakCounts}
                            total={user.totalCommitCounts}
                            last28={user.last28daysContributionCounts}
                            lastPush={user.latestPushedAt}
                        />
                        :
                        <ProfileListBox name={user.name} last28={user.last28daysContributionCounts} githubUsername={user.githubUsername} />
                )
                :
                <div className=" flex justify-center mt-72">
                    <div className="custom-loader"></div>
                </div>
            }
        </div >
    );
};

export default ProfileList;
