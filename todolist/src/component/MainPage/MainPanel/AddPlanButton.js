import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
const AddPlanButton = (props) => {
    return (
        <Button onClick={props.handleShow} variant="dark">
            계획 추가
        </Button>
    );
};

export default AddPlanButton;
