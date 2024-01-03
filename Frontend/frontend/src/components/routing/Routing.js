import React from "react";
import { Route } from "react-router";
import { Routes } from "react-router-dom";
//import DodajHiso from "../Hise/DodajHiso";
//import Hise from "../Hise/Hise";
import PageNotFound from "../PageNotFound/PageNotFound";
import IndexPage from "../IndexPage/IndexPage";

export default function Routing(){
    return(
        <Routes>
            <Route path="/" element={<IndexPage/>}/>
            <Route path="*" element={<PageNotFound />}/>
        </Routes>
    );
}