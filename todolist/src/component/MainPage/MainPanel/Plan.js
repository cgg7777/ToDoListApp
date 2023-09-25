import React, { useEffect, useState } from "react";
import CheckBox from "./../icons/CheckBox";
import { AiOutlineClose } from "react-icons/ai";
const Plan = (props) => {
    const id = props.id;
    const [title, setTitle] = useState(props.title);
    const [completed, setCompleted] = useState(false);

    useEffect(() => {
        setTitle(props.title);
    }, [props]);

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
                    {title}
                </p>
            </span>
            <div style={{ cursor: "pointer" }} onClick={planDelete}>
                <AiOutlineClose />
            </div>
        </div>
    );
};

export default Plan;
