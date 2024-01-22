
import api from "../../../services/api";
import React, { useEffect, useState } from "react";
import NarocilaTable from "./NarocilaTable";
import Alert from '@mui/material/Alert';
import AddIcon from '@mui/icons-material/Add';
import MainCard from '../../../components/MainCard';
import { Button } from "@mui/material";
import DodajNarocilo from './dodajNarocilo';

// ================================|| NAROCILA ||================================ //

const Narocila = () => {
   const [narocila, setNarocila] = useState([]);
   const [showAlert, setShowAlert] = useState(false);
   const [showTable, setShowTable] = useState(true);
   const [showDodajNarocilo, setShowNarocilo] = useState(false);
   

  const fetchNarocila = () => {
     api.get("/narocila").then((result) => {
         setNarocila(result.data);
     });
  };

  useEffect(() => {
    fetchNarocila();
  }, []);

  const handleUstvariClick = () => {
   setShowTable(!showTable);
   setShowNarocilo(!showDodajNarocilo);
};

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
   <MainCard>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
                  <Button variant="contained" onClick={handleUstvariClick}>
                     <AddIcon />Ustvari
                  </Button>
      </div>
    
    {showAlert && <Alert  style={alertStyle} severity="success">Narocilo uspešno izbrisano</Alert>}
    {showTable && <NarocilaTable narocila={narocila} fetchNarocila={fetchNarocila} showDeleteAlert={showDeleteAlert} />}
    {showDodajNarocilo && <DodajNarocilo></DodajNarocilo>}
   </MainCard>
 );
 
};

export default Narocila;