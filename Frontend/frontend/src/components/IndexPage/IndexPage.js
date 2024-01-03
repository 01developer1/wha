import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import ArtikliTable from "./ArtikliTable";

const Index = () => {
    const [artikli, setArtikel] = useState([]);
    console.log(artikli + "neko besedilo")
    useEffect(() => {
        const pridobiArtikle = () => {
            api.get("/artikli").then((result) => {
                setArtikel(result.data);
                console.log(result + "zdravo");
            });
        }
        pridobiArtikle();
    }, []);
    return (
        <>
            <h1>Artikli</h1>
            <Link to="/hise/dodaj"><Button variant="contained">Dodaj artikli</Button></Link>
            <ArtikliTable artikli={artikli} />
        </>
    );
}
export default Index
