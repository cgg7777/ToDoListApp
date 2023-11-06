import React from "react";
import LeftArrow from "../icons/LeftArrow";
import RightArrow from "../icons/RightArrow";
import useStore from "../../utils/zustand.module";
import mothToName from "../../utils/monthToName";

const Header = () => {
    const { calendarDate, setCalendarDate } = useStore();
    const handleDownButtonClick = () => {
        const yesterday = new Date(calendarDate);
        yesterday.setMonth(calendarDate.getMonth() - 1);
        setCalendarDate(yesterday);
    };

    const handleUpButtonClick = () => {
        const tomorrow = new Date(calendarDate);
        tomorrow.setMonth(calendarDate.getMonth() + 1);
        setCalendarDate(tomorrow);
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "2vw" }}>
            <div onClick={handleDownButtonClick} style={{ cursor: "pointer", display: "flex", alignItems: "center", marginRight: "3vw" }}>
                <LeftArrow />
            </div>
            <div>
                <p className="text">{calendarDate.getFullYear()}</p>
                <div style={{ alignItems: "flex-start" }}>
                    <p className="text" style={{ fontSize: "30px" }}>
                        {calendarDate.getMonth() + 1}
                    </p>
                </div>
                <p className="text">{mothToName[calendarDate.getMonth()]}</p>
            </div>
            <div onClick={handleUpButtonClick} style={{ cursor: "pointer", display: "flex", alignItems: "center", marginLeft: "3vw" }}>
                <RightArrow />
            </div>
        </div>
    );
};

export default Header;
