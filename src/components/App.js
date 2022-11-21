import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "../assets/GlobalStyle";
import Login from "./Login";
import SignUp from "./SignUp";
import Register from "./Register.js";
import Entrance from "./Entrance";
import Output from "./Output";

export default function App() {
    return (

        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signUp" element={<SignUp/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/entrance" element={<Entrance/>} />
                <Route path="/output" element={<Output/>} />

            </Routes>
        </BrowserRouter>

    )
}