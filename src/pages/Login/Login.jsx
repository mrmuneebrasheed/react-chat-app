import React from "react"
import { Link } from "react-router-dom"
import classes from "./Login.module.css"

export default function Login() {
    return (
        <div
            className={`${classes["login-page"]} flex-column justify-center align-center`}
        >
            <form
                className={`${classes["login-form"]} flex-column justify-center align-center`}
            >
                <input
                    className={classes["login-input"]}
                    type="email"
                    placeholder="Email"
                />
                <input
                    className={classes["login-input"]}
                    type="password"
                    placeholder="Password"
                />
                <button type="submit" className={classes["connection-button"]}>
                    Login
                </button>
            </form>
            <p>
                If you're new then,{" "}
                <Link to="/signup" className={classes.link}>
                    Sign Up
                </Link>
            </p>
        </div>
    )
}
