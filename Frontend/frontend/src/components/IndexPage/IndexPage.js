import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import ArtikliTable from "./ArtikliTable";
import Alert from '@mui/material/Alert';


const Index = () => {
   const [artikli, setArtikel] = useState([]);
   const [showAlert, setShowAlert] = useState(false);

   const fetchArtikli = () => {
       api.get("/artikli").then((result) => {
           setArtikel(result.data);
       });
   };

   useEffect(fetchArtikli, []);

   const showDeleteAlert = () => {
       setShowAlert(true);
       setTimeout(() => setShowAlert(false), 3000);
   };

   const alertStyle = {
      position: 'fixed', // Fixed position
      top: 15,          // 10px from the top
      left: '50%',      // Centered horizontally
      transform: 'translateX(-50%)', // Adjust for centering
      zIndex: 1000,     // Ensure it's above other elements
      margin: '0 auto', // Centering for smaller screens
      width: '80%',      // Responsive width
      opacity: 0.95,  // 85% opacity
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  };

   return (
       <>
           {showAlert && <Alert  style={alertStyle} severity="success">Artikel uspešno izbrisan</Alert>}
           <h1>Artikli</h1>
           <Link to="/hise/dodaj"><Button variant="contained">Dodaj artikli</Button></Link>
           <ArtikliTable artikli={artikli} fetchArtikli={fetchArtikli} showDeleteAlert={showDeleteAlert} />
       </>
   );
};

export default Index;
