import { Link } from 'react-router-dom';
import api from "../../../services/api";
import React, { useEffect, useState } from "react";
import PrikazNarocil from "./PrikazNarocil";
import Alert from '@mui/material/Alert';
import AddIcon from '@mui/icons-material/Add';
import MainCard from '../../../components/MainCard';
import { Button } from "@mui/material";

// ================================|| PripravaNarocil ||================================ //

const PripravaNarocil = () => {
   const [narocila, setNarocila] = useState([]);
   const [showTable, setShowTable] = useState(true);
   

  const fetchNarocila = () => {
     api.get("/narocila/TODO").then((result) => {
         setNarocila(result.data);
     });
  };

  useEffect(() => {
    fetchNarocila();
  }, []);

return (
   <MainCard>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
      </div>
    
    {showTable && <PrikazNarocil narocila={narocila} fetchNarocila={fetchNarocila} />}
   </MainCard>
 );
 
};

export default PripravaNarocil;