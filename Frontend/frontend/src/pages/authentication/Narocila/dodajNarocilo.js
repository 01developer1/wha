import React from 'react';
import api from "../../../services/api";
import { useEffect, useState } from "react";
import { TextField, Button, Grid, Paper, IconButton, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import MainCard from 'components/MainCard';
import Autocomplete from '@mui/material/Autocomplete';


// ==============================|| DODAJ NAROCILO ||============================== //

const DodajNarocilo = () => {
  const [tableData, setTableData] = useState([
    { col1: '', col2: '', col3: '', col4: '', col5: '' },
  ]);
  const [strankaOptions, setStrankaOptions] = useState([]);
  const [selectedStranka, setSelectedStranka] = useState(null);

  const addRow = () => {
    setTableData([...tableData, { col1: '', col2: '', col3: '', col4: '', col5: '' }]);
  };
  

  useEffect(() => {
    // Fetch initial suggestions for Stranka
    api.get('/stranka-suggestions').then((result) => {
      setStrankaOptions(result.data);
    });
  }, []);

  const handleStrankaInputChange = (event, value) => {
    // Fetch suggestions based on input value for Stranka
    if (value.length >= 3) {
      api.get(`/stranka-suggestions?q=${value}`).then((result) => {
        setStrankaOptions(result.data);
      });
    }
  };

  return (
    <MainCard>
      <div style={{ marginBottom: '20px' }}>
        {/* 4 Text Fields on Top */}
        <Grid container spacing={2}>
          <Grid item xs={3}>
          <Autocomplete
              value={selectedStranka}
              onChange={(event, newValue) => {
                setSelectedStranka(newValue);
              }}
              inputValue={selectedStranka?.naziv || ''}
              onInputChange={handleStrankaInputChange}
              options={strankaOptions}
              getOptionLabel={(option) => option.naziv || ''}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Field 1 (Stranka)"
                  fullWidth
                  InputProps={{ ...params.InputProps, autoComplete: 'off' }}
                />
              )}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField label="Field 2" fullWidth />
          </Grid>
          <Grid item xs={3}>
            <TextField label="Field 3" fullWidth />
          </Grid>
          <Grid item xs={3}>
            <TextField label="Field 4" fullWidth />
          </Grid>
        </Grid>

        {/* Main Table-Like Div */}
        <Paper style={{ padding: '20px', marginTop: '20px' }}>
          {/* Table Header */}
          <Grid container spacing={2} style={{ marginBottom: '10px' }}>
            <Grid item xs={2}>
              <Typography>Column 1</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography>Column 2</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography>Column 3</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography>Column 4</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography>Column 5</Typography>
            </Grid>
          </Grid>

          {/* Table Rows */}
          {tableData.map((row, index) => (
            <Grid container spacing={2} key={index} style={{ marginBottom: '10px' }}>
              <Grid item xs={2}>
                <TextField value={row.col1} fullWidth />
              </Grid>
              <Grid item xs={2}>
                <TextField value={row.col2} fullWidth />
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
            <TextField label="Bottom Left 1" fullWidth />
          </Grid>
          <Grid item xs={4}>
            <TextField label="Bottom Left 2" fullWidth />
          </Grid>
          <Grid item xs={4}>
            <TextField label="Bottom Left 3" fullWidth />
          </Grid>
        </Grid>

        {/* Bottom Right Corner Buttons */}
        <Grid container spacing={2} style={{ marginTop: '20px' }}>
          <Grid item xs={6}>
            <Button variant="contained" color="primary">
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
