import React from "react";
import TopBar from "./SideBar/TopBar";
import SideMenu from "./SideBar/SideMenu";

import MainPanel from "./MainPanel/MainPanel";
const MainPage = () => {
    return (
        <div>
            <TopBar />
            <div style={{ display: "flex" }}>
                <SideMenu />
                <MainPanel />
            </div>
        </div>
    );
};

export default MainPage;
