import React from "react";

const CheckBox = (props) => {
    return (
        <label style={{ alignItems: "flex-start", marginRight: "2vw" }}>
            <input type="checkbox" checked={props.isCompleted} onChange={props.handleCheck} />
        </label>
    );
};

export default CheckBox;
