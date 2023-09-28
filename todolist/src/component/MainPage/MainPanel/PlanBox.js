import React, { useEffect, useState } from "react";
import axios from "axios";
import Plan from "./Plan";
import AddPlanButton from "./AddPlanButton";
import { Modal, Button, Form } from "react-bootstrap";
import findDay from "../../../utils/findDay.js";
import useStore from "../../../utils/zustand.module.js";
const PlanBox = () => {
    const { fullDate, token } = useStore();
    const [show, setShow] = useState(false);
    const [newPlanName, setNewPlanName] = useState("");

    const [plans, setPlans] = useState([]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        axios
            .get("http://localhost:8080/api/plans", { headers: { Authorization: `${token}` } })
            .then((response) => {
                const planList = [];
                response.data.rows.forEach((plan) => {
                    planList.push(plan);
                });
                setPlans(
                    planList.filter((plan) => {
                        const dateObj = new Date(plan.due_date);
                        if ((dateObj.getFullYear() === fullDate.getFullYear() && dateObj.getMonth() === fullDate.getMonth() && dateObj.getDate() === fullDate.getDate()) || (!plan.completed && dateObj <= fullDate)) return true;
                        else return false;
                    })
                );
            })
            .catch((error) => console.log(error));
    }, [fullDate]);
    console.log(plans);
    const handleDelete = (id) => {
        axios
            .delete(`http://localhost:8080/api/plans/${id}`)
            .then((response) => {
                let newPlan = [...plans];
                newPlan = newPlan.filter((plan) => plan.id !== id);
                setPlans(newPlan);
            })
            .catch((error) => console.log(error));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newPlanName) {
            axios
                .post("http://localhost:8080/api/plans", { newPlanName, fullDate })
                .then((response) => {
                    const planList = [];
                    response.data.rows.forEach((plan) => {
                        planList.push(plan);
                    });
                    setPlans(
                        planList.filter((plan) => {
                            const dateObj = new Date(plan.due_date);
                            if ((dateObj.getFullYear() === fullDate.getFullYear() && dateObj.getMonth() === fullDate.getMonth() && dateObj.getDate() === fullDate.getDate()) || (!plan.completed && dateObj <= fullDate)) return true;
                            else return false;
                        })
                    );
                })
                .catch((error) => console.log(error));
        }
        handleClose();
    };

    const renderPlans = (plans) => plans.length > 0 && plans.map((plan) => <Plan key={plan.id} plan={plan} handleDelete={handleDelete} />);
    return (
        <div style={{ width: "50%" }}>
            <div style={{ display: "flex", marginBottom: "1vw" }}>
                <p className="text" style={{ marginRight: "1vw" }}>
                    오늘
                </p>
                <p style={{ display: "flex", alignItems: "flex-end", fontSize: "0.5rem" }}>
                    {findDay[fullDate.getDay()]}, {fullDate.getMonth() + 1}월 {fullDate.getDate()}일
                </p>
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
