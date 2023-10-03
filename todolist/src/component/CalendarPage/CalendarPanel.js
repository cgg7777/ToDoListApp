import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import axios from "axios";
import { Modal, Button, Form } from "react-bootstrap";
import useStore from "../../utils/zustand.module";
import Header from "./Header";
import "react-big-calendar/lib/css/react-big-calendar.css";
const localizer = momentLocalizer(moment);

function CalendarPanel() {
    const { calendarDate, setCalendarDate, setIsLogined } = useStore();
    const [view, setView] = useState("month");
    const token = localStorage.getItem("jwtToken");

    const [events, setEvents] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());

    const [newPlanName, setNewPlanName] = useState("");
    const [datetimeStart, setDatetimeStart] = useState("");
    const [datetimeEnd, setDatetimeEnd] = useState("");

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleViewChange = (newView) => {
        setView(newView);
    };

    useEffect(() => {
        axios
            .get("http://localhost:8080/api/plans", { headers: { Authorization: `${token}` } })
            .then((response) => {
                const tempEvents = [];
                response.data.rows.forEach((plan) => {
                    tempEvents.push({ title: plan.title, start: new Date(plan.start_date), end: new Date(plan.due_date) });
                });
                setEvents(tempEvents);
            })
            .catch((error) => {
                setIsLogined(false);
                console.log(error);
            });
    }, []);
    const handleSubmit = () => {
        axios
            .post("http://localhost:8080/api/plans", { newPlanName, datetimeStart, datetimeEnd }, { headers: { Authorization: `${token}` } })
            .then((response) => {
                const tempEvents = [];
                response.data.rows.forEach((plan) => {
                    tempEvents.push({ title: plan.title, start: new Date(plan.start_date), end: new Date(plan.due_date) });
                });
                setEvents(tempEvents);
            })
            .catch((error) => console.log(error));
        closeModal();
    };
    const customToolbar = ({ onNavigate }) => {
        return (
            <div className="custom-toolbar">
                <span className="custom-btn-group">
                    <button type="button" onClick={() => handleViewChange("month")}>
                        MONTH
                    </button>
                    <button type="button" onClick={() => handleViewChange("week")}>
                        WEEK
                    </button>
                    <button type="button" onClick={() => handleViewChange("day")}>
                        DAY
                    </button>
                </span>
            </div>
        );
    };
    return (
        <div style={{ width: "100%", justifyContent: "center" }}>
            <Header />
            <div style={{ display: "flex", width: "100%", justifyContent: "center", padding: "1vw" }}>
                <div className="App">
                    <Button onClick={openModal}>일정 추가</Button>
                    <div style={{ width: "60vw", height: "40vw" }}>
                        <Calendar
                            components={{ toolbar: customToolbar }}
                            view={view}
                            onView={handleViewChange}
                            date={calendarDate}
                            onNavigate={setCalendarDate}
                            localizer={localizer}
                            events={events}
                            startAccessor="start"
                            endAccessor="end"
                            style={{ margin: "20px" }}
                        />
                    </div>

                    <div>
                        <Modal show={isModalOpen} onHide={closeModal}>
                            <Modal.Header closeButton>
                                <Modal.Title>계획 생성하기</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Title</Form.Label>
                                        <Form.Control onChange={(e) => setNewPlanName(e.target.value)} type="text" placeholder="달성할 계획을 작성해주세요" />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Start Time</Form.Label>
                                        <Form.Control onChange={(e) => setDatetimeStart(e.target.value)} type="datetime-local" placeholder="시작 시간" />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Due</Form.Label>
                                        <Form.Control onChange={(e) => setDatetimeEnd(e.target.value)} type="datetime-local" placeholder="종료 시간" />
                                    </Form.Group>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={closeModal}>
                                    취소
                                </Button>
                                <Button variant="primary" onClick={handleSubmit}>
                                    추가
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CalendarPanel;
