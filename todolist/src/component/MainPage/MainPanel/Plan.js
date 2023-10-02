import React, { useEffect, useState } from "react";
import CheckBox from "../../icons/CheckBox";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import useStore from "../../../utils/zustand.module";

const Plan = ({ plan, handleDelete }) => {
    const { fullDate } = useStore();
    const token = localStorage.getItem("jwtToken");

    const id = plan.id;
    const [title, setTitle] = useState(plan.title);
    const [completed, setCompleted] = useState(plan.completed);

    const textColor = !completed && new Date(plan.due_date).getDate() !== fullDate.getDate() ? "red" : "black";
    const handleCheck = () => {
        const futureCompletedValue = plan.completed ? false : true;

        const offset = -9;
        const currentDate = new Date();
        const koreanDate = new Date(currentDate.getTime() - offset * 60 * 60 * 1000);
        const datetimeString = koreanDate.toISOString().slice(0, 19).replace("T", " ");

        axios
            .put(`http://localhost:8080/api/plans/${id}`, { futureCompletedValue, datetimeString }, { headers: { authorization: token } })
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
                <p className={completed ? "completed" : ""} style={{ color: textColor, display: "flex", alignItems: "center", justifyContent: "center" }}>
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
