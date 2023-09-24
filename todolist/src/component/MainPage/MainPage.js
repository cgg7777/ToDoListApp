import React from "react";
import TopBar from "./SideBar/TopBar";
import SideMenu from "./SideBar/SideMenu";
import { useState } from "react";

import MainPanel from "./MainPanel/MainPanel";
const MainPage = () => {
    const [show, setShow] = useState(false);
    const handleMenuClick = () => {
        if (show) setShow(false);
        else setShow(true);
    };
    return (
        <div>
            <TopBar handleMenuClick={handleMenuClick} />
            <div style={{ display: "flex" }}>
                {show && <SideMenu />}
                <MainPanel />
            </div>
        </div>
    );
};

export default MainPage;
