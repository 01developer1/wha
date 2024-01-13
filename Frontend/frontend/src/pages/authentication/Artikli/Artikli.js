import React, { useEffect, useState } from "react";
import api from "../../../services/api";
import ArtikliTable from "./ArtikliTable";
import { Button } from "@mui/material";
import Alert from '@mui/material/Alert';
import AddIcon from '@mui/icons-material/Add';
import ProductForm from "./ProductForm";
import CloseIcon from '@mui/icons-material/Close';
import MainCard from 'components/MainCard';

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
  const [editingArticleId, setEditingArticleId] = useState(null);

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

  const handleEditArticle = (articleId) => {
    const articleToEdit = artikli.find((artikel) => artikel.id_artikel === articleId);
    if (articleToEdit) {
      setFormData(articleToEdit);
      setEditingArticleId(articleId);
      setShowForm(true);
    }
  };

  const handleCloseForm = () => {
    setFormData({
      naziv: '',
      kolicina: '',
      prodajnaCena: '',
      dobavnaCena: '',
      lokacijaArtikla: '',
      tipArtikla: '',
    });
    setEditingArticleId(null);
    setShowForm(false);
  };

  const alertStyle = {
    position: 'fixed',
    top: 100,
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 1000,
    margin: '0 auto',
    width: '80%',
    opacity: 0.95,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  };

  return (
    <>
      {showForm && (
        <MainCard style={{ marginBottom: '20px' }}>
          <ProductForm
            formData={formData}
            setFormData={setFormData}
            tipArtiklaOptions={tipArtiklaOptions}
            fetchArtikli={fetchArtikli}
            handleSubmit={(event) => {
              event.preventDefault();
              console.log(formData);
              handleCloseForm();
            }}
            onCancel={handleCloseForm}
            editingArticleId={editingArticleId}
          />
        </MainCard>
      )}
      <MainCard>
        {showAlert && <Alert style={alertStyle} severity="success">Artikel uspešno izbrisan</Alert>}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
          <Button variant="contained" onClick={toggleForm}>
            {showForm ? <><CloseIcon /> Zapri</> : <><AddIcon /> Ustvari</>}
          </Button>
        </div>
        <ArtikliTable
          artikli={artikli}
          fetchArtikli={fetchArtikli}
          showDeleteAlert={showDeleteAlert}
          onEditArticle={handleEditArticle}
        />
      </MainCard>
    </>
  );
};

export default Artikli;
