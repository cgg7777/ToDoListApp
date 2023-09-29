import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import LoginPage from "./component/LoginPage/LoginPage";
import RegisterPage from "./component/RegisterPage/RegisterPage";
import MainPage from "./component/MainPage/MainPage";
import useStore from "./utils/zustand.module";
function App() {
    const navigate = useNavigate();
    const { isLogined, setIsLogined } = useStore();

    useEffect(() => {
        const token = localStorage.getItem("jwtToken");
        if (token) setIsLogined(true);
        else setIsLogined(false);
    }, []);

    useEffect(() => {
        if (isLogined) {
            navigate("/");
        } else {
            navigate("/login");
        }
    }, [isLogined]);

    return (
        <Routes>
            <Route exact path="/" element={<MainPage />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/register" element={<RegisterPage />} />
        </Routes>
    );
}

export default App;
