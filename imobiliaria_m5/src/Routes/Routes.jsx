import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
import Vendas from "../Pages/Vendas/Vendas";

function Rotas() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />}/>
                <Route path="/vendas" element={<Vendas />}></Route>
            </Routes>
        </Router>
    )
}

export default Rotas;