import React from "react";
import MenuIcon from "../icons/MenuIcon";
const TopBar = (props) => {
    return (
        <div style={{ display: "flex", width: "100%", height: "60px", background: "#504848" }}>
            <div onClick={props.handleMenuClick} style={{ display: "flex", marginLeft: "2vw", cursor: "pointer", alignItems: "center" }}>
                <MenuIcon />
            </div>
        </div>
    );
};

export default TopBar;
