import React, { useState } from "react";
import { AiOutlineCalendar, AiFillHome } from "react-icons/ai";
import useStore from "../../../utils/zustand.module";

const SideMenu = () => {
    const { page, setPage } = useStore();
    const mainClickHandler = () => {
        setPage("main");
    };
    const calendarClickHandler = () => {
        setPage("calendar");
    };
    return (
        <div style={{ minHeight: "100vh", width: "12vw", height: "auto", background: "#00000012" }}>
            <div onClick={mainClickHandler} style={{ backgroundColor: page === "main" ? "#D3D3D3" : "transparent" }} className="side-menu">
                <AiFillHome /> <div style={{ marginLeft: "0.3vw" }}>일 별로 보기</div>
            </div>
            <div onClick={calendarClickHandler} style={{ backgroundColor: page === "calendar" ? "#D3D3D3" : "transparent" }} className="side-menu">
                <AiOutlineCalendar /> <div style={{ marginLeft: "0.3vw" }}>월 별로 보기</div>
            </div>
        </div>
    );
};

export default SideMenu;
