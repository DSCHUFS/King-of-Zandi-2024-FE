import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { lastHomeUpdateDateState, tabState } from "./atom";

const tabs = [
    { content: "최근 커밋 순", id: 0 },
    { content: "Streak🔥 순", id: 1 },
    { content: "총 커밋 일자 순", id: 2 },
];

export function cls(...classNames) {
    return classNames.join(" ");
}

const TabBar = () => {
    const [tabId, setTabId] = useRecoilState(tabState);
    const lastHomeUpdateDate = useRecoilValue(lastHomeUpdateDateState);

    const onClickTab = (id) => {
        setTabId(id);
        console.log(tabId);
    };

    return (
        <div className="flex justify-between text-xl items-center px-4 md:px-20 py-5 sm:py-3">
            <div className="flex ">
                {tabs.map((tab, i) => (
                    <div key={i} className="mr-2">
                        <div
                            onClick={() => onClickTab(tab.id)}
                            className={cls(
                                "btn bg-none h-auto border rounded-full px-3 py-1 cursor-pointer ",
                                tabId === tab.id
                                    ? "bg-pointColor text-white font-bold border-pointColor hover:bg-pointColor hover:border-pointColor"
                                    : "bg-black text-dummyColor border-dummyColor font-normal hover:border-dummyColor"
                            )}
                            style={{ minHeight: "auto" }}
                        >
                            {tab.content}
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-sm hidden md:inline-block">
                업데이트 시간{" "}
                <span className="font-bold">
                    {lastHomeUpdateDate
                        ? lastHomeUpdateDate.toLocaleString()
                        : "Loading..."}
                </span>
            </div>
        </div>
    );
};

export default TabBar;
