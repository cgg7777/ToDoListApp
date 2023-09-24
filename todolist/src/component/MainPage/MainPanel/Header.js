import React from "react";
import LeftArrow from "../icons/LeftArrow";
import RightArrow from "../icons/RightArrow";
const Header = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "2vw" }}>
            <div style={{ display: "flex", alignItems: "center", marginRight: "3vw" }}>
                <LeftArrow />
            </div>
            <div>
                <p className="text">2023</p>
                <div style={{ alignItems: "flex-start" }}>
                    <p className="text" style={{ fontSize: "30px" }}>
                        10.10
                    </p>
                </div>
                <p className="text">SUN</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", marginLeft: "3vw" }}>
                <RightArrow />
            </div>
        </div>
    );
};

export default Header;
