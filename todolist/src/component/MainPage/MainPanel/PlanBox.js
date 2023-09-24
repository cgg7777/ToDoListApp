import React from "react";
import Plan from "./Plan";
const PlanBox = () => {
    return (
        <div style={{ width: "60%" }}>
            <div style={{ display: "flex", marginBottom: "2vw" }}>
                <div style={{ marginRight: "1vw" }}>오늘</div>
                <div style={{ display: "flex", alignItems: "flex-end", fontSize: "0.5rem" }}>일, 10월 1일</div>
            </div>
            <Plan />
        </div>
    );
};

export default PlanBox;
