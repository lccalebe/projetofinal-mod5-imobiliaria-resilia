import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
import Adm from "../Pages/Adm/Adm";
import AdmEdit from "../Pages/Adm/AdmEdit";
import AdmPost from "../Pages/Adm/AdmPost";
import Aluguel from "../Pages/Aluguel/Aluguel";
import AluguelEdit from "../Pages/Aluguel/AluguelEdit";
import AluguelPost from "../Pages/Aluguel/AluguelPost";
import Cadastro from "../Pages/Cadastro/Cadastro";
import ClientePost from "../Pages/Clientes/ClientePost";
import Cliente from "../Pages/Clientes/Clientes";
import ClienteEdit from "../Pages/Clientes/ClientesEdit";
import Corretores from "../Pages/Corretores/Corretores";
import CorretoresEdit from "../Pages/Corretores/CorretoresPost";
import CorretoresPost from "../Pages/Corretores/CorretoresPost";
import Login from "../Pages/Login/Login";
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
                <Route path="/cliente" element={<Cliente />}></Route>
                <Route path="/clientePost" element={<ClientePost />}></Route>
                <Route path="/clienteEdit/:id" element={<ClienteEdit />}></Route>
                <Route path="/adm" element={<Adm />}></Route>
                <Route path="/admPost" element={<AdmPost />}></Route>
                <Route path="/admEdit/:id" element={<AdmEdit />}></Route>  
                <Route path="/login" element={<Login />}></Route>
                <Route path="/cadastro" element={<Cadastro />}></Route>        
            </Routes>
        </Router>
    )
}

export default Rotas;