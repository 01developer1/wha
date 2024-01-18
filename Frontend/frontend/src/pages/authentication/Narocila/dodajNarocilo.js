import React, { useEffect, useState } from 'react';
import { TextField, Button, Grid, Paper, IconButton, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import MainCard from 'components/MainCard';
import Autocomplete from '@mui/material/Autocomplete';
import api from '../../../services/api';
import { format, addDays } from 'date-fns';

const DodajNarocilo = () => {
  // ===================================================================================== STRANKA =========================================================================
    const [selectedStranka, setSelectedStranka] = useState(null); // Store the selected stranka object
    const [field2Value, setField2Value] = useState('');
    const [field3Value, setField3Value] = useState('');
    const [field4Value, setField4Value] = useState('');
    const [suggestions, setSuggestions] = useState([]);
  
    useEffect(() => {
      const fetchSuggestions = async () => {
        try {
          const response = await api.get('/stranka');
          const data = response.data;
  
          setSuggestions(data);
        } catch (error) {
          console.error('Error fetching suggestions:', error);
        }
      };
  
      fetchSuggestions();
    }, []);
  
    useEffect(() => {
      // Update Field 2, Field 3, and Field 4 when selectedStranka changes
      if (selectedStranka) {
        setField2Value(selectedStranka.email);
        setField3Value(selectedStranka.telefon);
        setField4Value(selectedStranka.kraj);
      } else {
        // Clear other fields when selectedStranka is null (field1 is cleared)
        setField2Value('');
        setField3Value('');
        setField4Value('');
      }
    }, [selectedStranka]);
  
    // ===================================================================================== ARTIKLI =========================================================================
    const [tableData, setTableData] = useState([
      { col1: '', col2: '', col3: '', col4: '', col5: '', selectedArtikel: null },
    ]);
    const [suggestionsArtikli, setArtikliSuggestions] = useState([]);
  
    const addRow = () => {
      setTableData([...tableData, { col1: '', col2: '', col3: '', col4: '', col5: '', selectedArtikel: null }]);
    };
  
    const handleArtikelChange = async (event, newValue, index) => {
      const updatedTableData = [...tableData];
    
      // Update selectedArtikel in the row
      updatedTableData[index].selectedArtikel = newValue;
      updatedTableData[index].col2 = newValue ? 1 : '';
    
      // Fetch additional data (dobavna cena and prodajna cena) for the selected artikel
      if (newValue) {
        try {
          const response = await api.get(`/artikli/${newValue.id_artikel}`);
          const { dobavnaCena, prodajnaCena } = response.data;
    
          // Update dobavna cena and prodajna cena in the row
          updatedTableData[index].col3 = dobavnaCena.toString();
          updatedTableData[index].col4 = prodajnaCena.toString();
    
          // Calculate and update skupaj based on prodajna cena and kolicina
          if (!isNaN(updatedTableData[index].col2)) {
            updatedTableData[index].col5 = (parseFloat(updatedTableData[index].col4) * parseFloat(updatedTableData[index].col2)).toFixed(2);
          }
        } catch (error) {
          console.error('Error fetching artikel details:', error);
        }
      } else {
        // Clear dobavna cena, prodajna cena, and skupaj if no artikel is selected
        updatedTableData[index].col3 = '';
        updatedTableData[index].col4 = '';
        updatedTableData[index].col5 = '';
      }
    
      setTableData(updatedTableData);
    };
  
    const handleKolicinaChange = (event, index) => {
      const updatedTableData = [...tableData];
  
      // Update kolicina in the row
      updatedTableData[index].col2 = event.target.value;
  
      // If prodajna cena is available, calculate and update skupaj
      if (!isNaN(updatedTableData[index].col2) && !isNaN(updatedTableData[index].col4)) {
        updatedTableData[index].col5 = (parseFloat(updatedTableData[index].col4) * parseFloat(updatedTableData[index].col2)).toFixed(2);
      }
  
      setTableData(updatedTableData);
    };
  
    useEffect(() => {
      const fetchArtikli = async () => {
        try {
          const response = await api.get('/artikli');
          const data = response.data;
  
          setArtikliSuggestions(data);
        } catch (error) {
          console.error('Error fetching suggestions:', error);
        }
      };
  
      fetchArtikli();
    }, []);

    // ===================================================================================== SPODNJI DEL =========================================================================
    const [bottomLeft1, setBottomLeft1] = useState('');
    const [bottomLeft2, setBottomLeft2] = useState('');
    const [bottomLeft3, setBottomLeft3] = useState('');
    const [skupajSum, setSkupajSum] = useState(0);

    useEffect(() => {
      const currentDate = new Date();
      const formattedDate = currentDate.toISOString().split('T')[0]; // ISO format without time
      setBottomLeft1(formattedDate);
    }, []);
  
    // Effect to set "rok priprave" one day after Bottom Left 1
    useEffect(() => {
      if (bottomLeft1) {
        const dateBottomLeft1 = new Date(bottomLeft1);
        const dateBottomLeft2 = addDays(dateBottomLeft1, 1);
        const formattedDate = format(dateBottomLeft2, 'yyyy-MM-dd');
        setBottomLeft2(formattedDate);
      }
    }, [bottomLeft1]);

    useEffect(() => {
      const sum = tableData.reduce((acc, row) => acc + parseFloat(row.col5 || 0), 0);
      setSkupajSum(sum);
    }, [tableData]);

    useEffect(() => {
      setBottomLeft3(skupajSum.toFixed(2));
    }, [skupajSum]);

    // ===================================================================================== SHRANJEVANJE =========================================================================
    const handleSave = async () => {
      // Gather and structure the data
      const dataToSave = {
        casPriprave: "0000-01-01T00:00:00",
        cenaSkupaj: bottomLeft3,
        datumVnosa: new Date().toISOString(),
        rokPriprave: bottomLeft2,
        seznamKolicin: tableData.map(row => row.col2),
        stanjeNarocila: "TODO",
        stranka: selectedStranka,
        artikli: tableData.map(row => row.selectedArtikel.id_artikel),
        zaposlen: {
          "ime": "Luka",
          "priimek": "Car",
          "telefon": "4123'041292",
          "placa": 1.0,
          "email": null,
          "username": "0",
          "password": null,
          "enabled": false,
          "tokenExpired": false,
          "roles": [],
          "tip_zaposlenega": "VODJA_PODJETJA",
          "id_zaposleni": 1
      }
      };
  
      console.log(dataToSave)
      api.post(`/narocila`, dataToSave)
      .then((result) => {
        console.log(result.data);
      })
      .catch((error) => {
        console.error('There was an error creating new order!', error);
      });
    };
  
  
    return (
      <MainCard>
        <div style={{ marginBottom: '20px' }}>
          {/* 4 Text Fields on Top */}
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Autocomplete
                value={selectedStranka}
                onChange={(event, newValue) => setSelectedStranka(newValue)}
                options={suggestions}
                getOptionLabel={(option) => option.naziv}
                renderInput={(params) => <TextField {...params} label="Naziv Stranke" fullWidth />}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField label="Email" value={field2Value} fullWidth />
            </Grid>
            <Grid item xs={3}>
              <TextField label="Telefon" value={field3Value} fullWidth />
            </Grid>
            <Grid item xs={3}>
              <TextField label="Kraj" value={field4Value} fullWidth />
            </Grid>
        </Grid>

        {/* Main Table-Like Div */}
        <Paper style={{ padding: '20px', marginTop: '20px' }}>
          {/* Table Header */}
          <Grid container spacing={2} style={{ marginBottom: '10px' }}>
            <Grid item xs={2}>
              <Typography>Artikel</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography>Količina</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography>Dobavna Cena</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography>Prodajna Cena</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography>Skupaj</Typography>
            </Grid>
          </Grid>

          {/* Table Rows */}
          {tableData.map((row, index) => (
            <Grid container spacing={2} key={index} style={{ marginBottom: '10px' }}>
              <Grid item xs={2}>
                <Autocomplete
                value={row.selectedArtikel}
                onChange={(event, newValue) => handleArtikelChange(event, newValue, index)}
                options={suggestionsArtikli}
                getOptionLabel={(option) => option.naziv}
                renderInput={(params) => <TextField {...params} fullWidth />}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                value={row.col2}
                onChange={(event) => handleKolicinaChange(event, index)}
                fullWidth
               />
              </Grid>
              <Grid item xs={2}>
                <TextField value={row.col3} fullWidth />
              </Grid>
              <Grid item xs={2}>
                <TextField value={row.col4} fullWidth />
              </Grid>
              <Grid item xs={2}>
                <TextField value={row.col5} fullWidth />
              </Grid>
            </Grid>
          ))}

          {/* Plus Sign to Add Another Row */}
          <IconButton onClick={addRow} color="primary">
            <AddIcon />
          </IconButton>
        </Paper>

        {/* Bottom Left Corner Fields */}
        <Grid container spacing={2} style={{ marginTop: '20px' }}>
          <Grid item xs={4}>
            <TextField label="Bottom Left 1" value={bottomLeft1} fullWidth disabled />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Bottom Left 2"
              type="datetime-local"
              value={bottomLeft2}
              onChange={(e) => setBottomLeft2(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <TextField label="Bottom Left 3" value={bottomLeft3} fullWidth disabled />
          </Grid>
        </Grid>

        {/* Bottom Right Corner Buttons */}
        <Grid container spacing={2} style={{ marginTop: '20px' }}>
          <Grid item xs={6}>
            <Button variant="contained" color="primary" onClick={handleSave}>
              Save
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" color="secondary">
              Cancel
            </Button>
          </Grid>
        </Grid>
      </div>
    </MainCard>
  );
};

export default DodajNarocilo;