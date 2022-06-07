import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
import Aluguel from "../Pages/Aluguel/Aluguel";
import AluguelEdit from "../Pages/Aluguel/AluguelEdit";
import AluguelPost from "../Pages/Aluguel/AluguelPost";
import Corretores from "../Pages/Corretores/Corretores";
import CorretoresEdit from "../Pages/Corretores/CorretoresPost";
import CorretoresPost from "../Pages/Corretores/CorretoresPost";
import Vendas from "../Pages/Vendas/Vendas";
import VendasEdit from "../Pages/Vendas/VendasEdit";
import VendasPost from "../Pages/Vendas/VendasPost";

function Rotas() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />}/>
                <Route path="/vendas" element={<Vendas />}></Route>
                <Route path="/vendasPost" element={<VendasPost />}></Route>
                <Route path="/vendasEdit/:id" element={<VendasEdit />}></Route>
                <Route path="/aluguel" element={<Aluguel />}></Route>
                <Route path="/aluguelPost" element={<AluguelPost />}></Route>
                <Route path="/aluguelEdit/:id" element={<AluguelEdit />}></Route>
                <Route path="/corretores" element={<Corretores />}></Route>
                <Route path="/corretoresPost" element={<CorretoresPost />}></Route>
                <Route path="/corretoresEdit/:id" element={<CorretoresEdit />}></Route>

            </Routes>
        </Router>
    )
}

export default Rotas;