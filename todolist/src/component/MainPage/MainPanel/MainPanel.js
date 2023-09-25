import React from "react";
import Header from "./Header";
import PlanBox from "./PlanBox";
import { useState } from "react";
const MainPanel = () => {
    const now = new Date();
    const [fullDate, setFullDate] = useState(now);
    return (
        <div style={{ width: "100%", justifyContent: "center" }}>
            <Header fullDate={fullDate} setFullDate={setFullDate} />
            <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
                <PlanBox fullDate={fullDate} />
            </div>
        </div>
    );
};

export default MainPanel;
