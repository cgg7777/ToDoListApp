import React from "react";
import MenuIcon from "../icons/MenuIcon";
import { Button } from "react-bootstrap";
import useStore from "../../../utils/zustand.module";
const TopBar = (props) => {
    const { setIsLogined } = useStore();

    const handleLogout = () => {
        localStorage.removeItem("jwtToken");
        setIsLogined(false);
    };

    return (
        <div style={{ display: "flex", justifyContent: "space-between", width: "100%", height: "60px", background: "#504848" }}>
            <div onClick={props.handleMenuClick} style={{ display: "flex", marginLeft: "2vw", cursor: "pointer", alignItems: "center" }}>
                <MenuIcon />
            </div>
            <div style={{ display: "flex", alignItems: "center", marginRight: "1vw" }}>
                <Button variant="light" size="sm" onClick={handleLogout}>
                    로그아웃
                </Button>
            </div>
        </div>
    );
};

export default TopBar;
