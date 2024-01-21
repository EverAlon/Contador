import React from "react";
import ReacDOM from "react-dom/client";
import { Contador } from "./components/Contador";
import { Texto } from "./components/Texto";
import { Estados } from "./components/Estados";
import Puerta from "./components/Puerta";

const root = ReacDOM.createRoot(document.getElementById("root"));

root.render(
    <>
        <Contador />
        <Texto />
        <Estados />
        <Puerta />
    </>
)