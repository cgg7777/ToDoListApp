import React, { useEffect, useState } from "react";
import CheckBox from "./../icons/CheckBox";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";

const Plan = ({ plan, handleDelete }) => {
    const id = plan.id;
    const [title, setTitle] = useState(plan.title);
    const [completed, setCompleted] = useState(false);

    useEffect(() => {
        setTitle(plan.title);
    }, [plan.title]);

    const handleCheck = () => {
        const futureCompletedValue = plan.completed ? false : true;
        axios
            .put(`http://localhost:8080/api/plans/${id}`, { futureCompletedValue })
            .then((response) => {
                plan.completed = response.data.completedValue;
                setCompleted(plan.completed);
            })
            .catch((error) => console.log(error));
    };

    const planDelete = () => {
        handleDelete(id);
    };
    return (
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1vw", borderBottom: "1px solid #aaa" }}>
            <span style={{ display: "flex" }}>
                <CheckBox isCompleted={completed} handleCheck={handleCheck} />
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
