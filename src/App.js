import React from "react"
import logo from "./assets/img/logo1.png"
import { Router, BrowserRouter, Routes, Route } from "react-router-dom"
import Navigation from "./components/Navigation/Navigation"
import socket from "./store/webSocket"

import "./App.css"

//importing Pages
import Login from "./pages/Login/Login"

export default function App() {
    console.log(socket)
    return (
        <div className="App">
            <div className="logo-div">
                <img className="logo" src={logo}></img>
            </div>

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
