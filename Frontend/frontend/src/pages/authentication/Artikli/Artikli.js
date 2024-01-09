import { Link } from 'react-router-dom';

import React, { useEffect, useState } from "react";
import api from "../../../services/api";
import ArtikliTable from "./ArtikliTable";
import { Button } from "@mui/material";
import Alert from '@mui/material/Alert';
import AddIcon from '@mui/icons-material/Add';
import ProductForm from "./ProductForm";
import CloseIcon from '@mui/icons-material/Close';

// material-ui
import { Grid, Stack, Typography } from '@mui/material';

// project import

import MainCard from 'components/MainCard';
import { Card } from '../../../../node_modules/@mui/material/index';

// ================================|| ARTIKLI ||================================ //

const Artikli = () => {
    const [artikli, setArtikel] = useState([]);
    const [showAlert, setShowAlert] = useState(false);

    const [showForm, setShowForm] = useState(false);
   const [formData, setFormData] = useState({
      naziv: '',
      kolicina: '',
      prodajnaCena: '',
      dobavnaCena: '',
      lokacijaArtikla: '',
      tipArtikla: ''
   });


   const tipArtiklaOptions = [
      { label: 'VRT', value: 'VRT' },
      { label: 'POHIŠTVO', value: 'POHISTVO' },
      { label: 'GRADNJA', value: 'GRADNJA' },
      { label: 'TEHNIKA', value: 'TEHNIKA' },

  ];
  
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

    const toggleForm = () => {
      setShowForm(!showForm);
  };
  
  
    const alertStyle = {
       position: 'fixed', // Fixed position
       top: 100,          // 10px from the top
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
     {showForm &&  <MainCard style={{marginBottom: '20px'}}>

                  <ProductForm
                  formData={formData}
                  setFormData={setFormData}
                  tipArtiklaOptions={tipArtiklaOptions}
                  fetchArtikli={fetchArtikli}
                  handleSubmit={(event) => {
                     event.preventDefault();
                     console.log(formData);
                  }}
              />
              
         </MainCard>
         }
          <MainCard>
              {showAlert && <Alert  style={alertStyle} severity="success">Artikel uspešno izbrisan</Alert>}
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
                  <Button variant="contained" onClick={toggleForm}>
                      {showForm ? <><CloseIcon /> Zapri</> : <><AddIcon /> Ustvari</>}
                  </Button>
              </div>
              <ArtikliTable artikli={artikli} fetchArtikli={fetchArtikli} showDeleteAlert={showDeleteAlert} />
          </MainCard>
      </>
  );
 };
  
 export default Artikli;
