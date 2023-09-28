import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";
import useStore from "../../utils/zustand.module.js";

const LoginPage = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const [errorFromSubmit, setErrorFromSubmit] = useState("");
    const [loading, setLoading] = useState(false);
    const { token, setToken, setEmail } = useStore();

    const onSubmit = async (data) => {
        try {
            setLoading(true);
            axios.post("http://localhost:8080/login", { email: data.email, password: data.password }).then((response) => {
                setToken(response.data.token);
                setEmail(data.email);
            });
            setLoading(false);
        } catch (error) {
            setErrorFromSubmit(error.message);
            setLoading(false);
            setTimeout(() => {
                setErrorFromSubmit("");
            }, 5000);
        }
    };

    return (
        <div className="auth-wrapper">
            <div style={{ textAlign: "center" }}>
                <h3>Login</h3>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Email</label>
                <input type="email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                {errors.email && errors.email.type === "required" && <p>This field is required</p>}
                {errors.email && errors.email.type === "pattern" && <p>Email pattern is not sutible</p>}

                <label>Password</label>
                <input type="password" {...register("password", { required: true, minLength: 6 })} />
                {errors.password && errors.password.type === "required" && <p>This field is required</p>}
                {errors.password && errors.password.type === "minLength" && <p>Password must have at least 6 characters</p>}

                {errorFromSubmit && <p>{errorFromSubmit}</p>}

                <input value="SUBMIT" type="submit" disabled={loading} />
                <Link style={{ color: "gray", textDecoration: "none" }} to="/register">
                    회원가입
                </Link>
            </form>
        </div>
    );
};

export default LoginPage;
