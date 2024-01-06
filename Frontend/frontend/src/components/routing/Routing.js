import React from "react";
import { Route } from "react-router";
import { Routes } from "react-router-dom";
//import DodajHiso from "../Hise/DodajHiso";
//import Hise from "../Hise/Hise";
import PageNotFound from "../PageNotFound/PageNotFound";
import IndexPage from "../IndexPage/IndexPage";
import CreateUser from "../CreateUser/CreateUser";

export default function Routing(){
    return(
        <Routes>
            <Route path="/" element={<IndexPage/>}/>
            <Route path="*" element={<PageNotFound />}/>
            <Route path="/zaposleni" element={<CreateUser/>}/>
        </Routes>
    );
}