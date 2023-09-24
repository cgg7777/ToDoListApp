import React, { useState } from "react";
import CheckBox from "./../icons/CheckBox";

const Plan = () => {
    const [description, setDescription] = useState("테스트용 계획");
    return (
        <div style={{ display: "flex", marginBottom: "1vw", borderBottom: "1px solid #aaa" }}>
            <CheckBox />
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>{description}</div>
        </div>
    );
};

export default Plan;
