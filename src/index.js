import React from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import App from './App';
import Info from "./Info";

function Main() {
    return (
        <Routes>
            <Route path="/" element={<App/>} />
            <Route path="/info" element={<Info/>} />
        </Routes>
    )
}

const root = createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Main />
    </BrowserRouter>
);