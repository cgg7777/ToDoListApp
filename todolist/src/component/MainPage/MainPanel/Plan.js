import React, { useState } from "react";
import CheckBox from "./../icons/CheckBox";
import { AiOutlineClose } from "react-icons/ai";
const Plan = (props) => {
    const [id, setID] = useState(props.id);
    const [description, setDescription] = useState(props.plan);
    const [completed, setCompleted] = useState(false);

    const handleCheck = () => {
        if (completed) setCompleted(false);
        else setCompleted(true);
    };

    const planDelete = () => {
        props.handleDelete(id);
    };
    return (
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1vw", borderBottom: "1px solid #aaa" }}>
            <span style={{ display: "flex" }}>
                <CheckBox handleCheck={handleCheck} />
                <p className={completed ? "completed" : ""} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {description}
                </p>
            </span>
            <div style={{ cursor: "pointer" }} onClick={planDelete}>
                <AiOutlineClose />
            </div>
        </div>
    );
};

export default Plan;
