import React from "react";
import TopBar from "./MainPage/SideBar/TopBar";
import SideMenu from "./MainPage/SideBar/SideMenu";
import { useState } from "react";
import useStore from "../utils/zustand.module";
import MainPanel from "./MainPage/MainPanel/MainPanel";
import CalendarPanel from "./CalendarPage/CalendarPanel";

const MainPage = () => {
    const { page } = useStore();
    const [show, setShow] = useState(false);

    const handleMenuClick = () => {
        if (show) setShow(false);
        else setShow(true);
    };

    const CurrentPage = page === "main" ? MainPanel : CalendarPanel;
    return (
        <div>
            <TopBar handleMenuClick={handleMenuClick} />
            <div style={{ display: "flex" }}>
                {show && <SideMenu />}
                <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
                    <CurrentPage />
                </div>
            </div>
        </div>
    );
};

export default MainPage;
