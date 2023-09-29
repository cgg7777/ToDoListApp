import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const RegisterPage = () => {
    const navigate = useNavigate();
    const {
        register,
        watch,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const [errorFromSubmit, setErrorFromSubmit] = useState("");
    const [loading, setLoading] = useState(false);
    const password = useRef();
    password.current = watch("password");

    const onSubmit = async (data) => {
        try {
            setLoading(true);
            axios.post("http://localhost:8080/users", { email: data.email, password: data.password }).then((response) => {
                navigate("/login");
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
                <h3>Register</h3>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Email</label>
                <input type="email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                {errors.email && errors.email.type === "required" && <p>This field is required</p>}
                {errors.email && errors.email.type === "pattern" && <p>Email pattern is not sutible</p>}

                <label>Name</label>
                <input {...register("name", { required: true, maxLength: 10 })} />
                {errors.name && errors.name.type === "required" && <p>This field is required</p>}
                {errors.name && errors.name.type === "maxLength" && <p>Input exceed maximum</p>}

                <label>Password</label>
                <input type="password" {...register("password", { required: true, minLength: 6 })} />
                {errors.password && errors.password.type === "required" && <p>This field is required</p>}
                {errors.password && errors.password.type === "minLength" && <p>Password must have at least 6 characters</p>}

                <label>Password Confirm</label>
                <input
                    type="password"
                    {...register("passwordConfirm", {
                        required: true,
                        validate: (value) => value === password.current,
                    })}
                />
                {errors.passwordConfirm && errors.passwordConfirm.type === "required" && <p>This field is required</p>}
                {errors.passwordConfirm && errors.passwordConfirm.type === "validate" && <p>Password do not match</p>}

                {errorFromSubmit && <p>{errorFromSubmit}</p>}

                <input value="SUBMIT" type="submit" disabled={loading} />
                <Link style={{ color: "gray", textDecoration: "none" }} to="/login">
                    로그인하기
                </Link>
            </form>
        </div>
    );
};

export default RegisterPage;
