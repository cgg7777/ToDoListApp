import React from "react";
import Plan from "./Plan";
import AddPlanButton from "./AddPlanButton";
const PlanBox = () => {
    return (
        <div style={{ width: "50%" }}>
            <div style={{ display: "flex", marginBottom: "2vw" }}>
                <div className="text" style={{ marginRight: "1vw" }}>
                    오늘
                </div>
                <div style={{ display: "flex", alignItems: "flex-end", fontSize: "0.5rem" }}>일, 10월 1일</div>
            </div>
            <Plan />
            <AddPlanButton />
        </div>
    );
};

export default PlanBox;
