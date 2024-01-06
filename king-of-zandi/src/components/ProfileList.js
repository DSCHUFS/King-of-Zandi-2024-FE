import React from "react";
import ProfileListItem from "./ProfileListItem";

const ProfileList = ({ n }) => {
    // Generate an array of indices from 1 to n
    const indices = Array.from({ length: n }, (_, index) => index + 1);

    return (
        <div className="flex flex-col md:items-center md:px-20 bg-black">
            {indices.map((index) => (
                <ProfileListItem key={index} index={index} />
            ))}
        </div>
    );
};

export default ProfileList;
