import React, { useEffect, useState } from "react";
import axios from "axios";
import Plan from "./Plan";
import AddPlanButton from "./AddPlanButton";
import { Modal, Button, Form } from "react-bootstrap";
const PlanBox = () => {
    const [show, setShow] = useState(false);
    const [newPlanName, setNewPlanName] = useState("");

    const [plans, setPlans] = useState([]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [id, setID] = useState(10);
    const addPlans = (newPlanName) => {
        const plan = { title: newPlanName, id: id };
        const newPlan = [...plans];
        newPlan.push(plan);
        setPlans(newPlan);
        setID(id + 1);
    };
    const handleDelete = (id) => {
        let newPlan = [...plans];
        newPlan = newPlan.filter((plan) => plan.id !== id);
        setPlans(newPlan);
    };
    // useEffect(() => {
    //     axios
    //         .get("/api/plans")
    //         .then((response) => {
    //             const planList = [];
    //             response.data.rows.forEach((plan) => {
    //                 planList.push(plan.title);
    //             });
    //             setPlans(planList);
    //         })
    //         .catch((error) => console.log(error));
    // }, []);

    const handleSubmit = (e) => {
        addPlans(newPlanName);
        // e.preventDefault();
        // if (newPlanName) {
        //     axios
        //         .post("/api/plans", { newPlanName })
        //         .then((response) => {
        //             const planList = [];
        //             response.data.rows.forEach((plan) => {
        //                 planList.push(plan.title);
        //             });
        //             setPlans(planList);
        //         })
        //         .catch((error) => console.log(error));
        // }
        handleClose();
    };

    const renderPlans = (plans) => plans.length > 0 && plans.map((plan) => <Plan id={plan.id} plan={plan.title} handleDelete={handleDelete} />);
    return (
        <div style={{ width: "50%" }}>
            <div style={{ display: "flex", marginBottom: "1vw" }}>
                <p className="text" style={{ marginRight: "1vw" }}>
                    오늘
                </p>
                <p style={{ display: "flex", alignItems: "flex-end", fontSize: "0.5rem" }}>일, 10월 1일</p>
            </div>

            {renderPlans(plans)}
            <AddPlanButton handleShow={handleShow} />
            <div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>계획 생성하기</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>Title</Form.Label>
                                <Form.Control onChange={(e) => setNewPlanName(e.target.value)} type="text" placeholder="달성할 계획을 작성해주세요" />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            취소
                        </Button>
                        <Button variant="primary" onClick={handleSubmit}>
                            추가
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
};

export default PlanBox;
