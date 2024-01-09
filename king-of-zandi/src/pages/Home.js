import React from "react";
import Header from "../components/Header";
import TabBar from "../components/TabBar";
import ProfileList from "../components/ProfileList";

const Home = () => {
    return (
        <div>
            <TabBar />
            <ProfileList />
        </div>
    );
};

export default Home;
