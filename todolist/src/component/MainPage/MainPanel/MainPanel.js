import React from "react";
import Header from "./Header";
import PlanBox from "./PlanBox";
import { useState } from "react";
const MainPanel = () => {
    return (
        <div style={{ width: "100%", justifyContent: "center" }}>
            <Header />
            <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
                <PlanBox />
            </div>
        </div>
    );
};

export default MainPanel;
