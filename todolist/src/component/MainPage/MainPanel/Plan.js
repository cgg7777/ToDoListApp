import React, { useState } from "react";
import CheckBox from "./../icons/CheckBox";

const Plan = (props) => {
    const [description, setDescription] = useState(props.plan);
    const [completed, setCompleted] = useState(false);

    const handleCheck = () => {
        if (completed) setCompleted(false);
        else setCompleted(true);
    };

    return (
        <div style={{ display: "flex", marginBottom: "1vw", borderBottom: "1px solid #aaa" }}>
            <CheckBox handleCheck={handleCheck} />
            <p className={completed ? "completed" : ""} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                {description}
            </p>
        </div>
    );
};

export default Plan;
