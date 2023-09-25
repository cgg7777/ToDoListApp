import React, { useState } from "react";
import LeftArrow from "../icons/LeftArrow";
import RightArrow from "../icons/RightArrow";
import findDay from "../../../utils/findDay.js";
const Header = () => {
    const now = new Date();
    const [fullDate, setFullDate] = useState(now);

    const handleDownButtonClick = () => {
        const yesterday = new Date(fullDate);
        yesterday.setDate(fullDate.getDate() - 1);
        setFullDate(yesterday);
    };

    const handleUpButtonClick = () => {
        const tomorrow = new Date(fullDate);
        tomorrow.setDate(fullDate.getDate() + 1);
        setFullDate(tomorrow);
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "2vw" }}>
            <div onClick={handleDownButtonClick} style={{ cursor: "pointer", display: "flex", alignItems: "center", marginRight: "3vw" }}>
                <LeftArrow />
            </div>
            <div>
                <p className="text">{fullDate.getFullYear()}</p>
                <div style={{ alignItems: "flex-start" }}>
                    <p className="text" style={{ fontSize: "30px" }}>
                        {fullDate.getMonth() + 1}.{String(fullDate.getDate()).padStart(2, "0")}
                    </p>
                </div>
                <p className="text">{findDay[fullDate.getDay()]}</p>
            </div>
            <div onClick={handleUpButtonClick} style={{ cursor: "pointer", display: "flex", alignItems: "center", marginLeft: "3vw" }}>
                <RightArrow />
            </div>
        </div>
    );
};

export default Header;
