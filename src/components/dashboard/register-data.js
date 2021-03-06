import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Title from './title';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import {DATA_MARKET_API, IAM_MANAGEMENT_API} from '../../api'
import { useSelector } from 'react-redux';

export default function RegisterData() {
    const providerName = 'Test Provider'
    const data_provider_id = '260e3372-afb9-479c-8c1a-bcd4d0e9a0ae'
    const encodedKey = useSelector((state) => state.user.encode_public_key)
    const [dataName, setDataName] = useState('')
    const [dataUrl, setDataURL] = useState('')
    const [dataAccessKey, setDataAccessKey] = useState('')
    const [dataSecretKey, setDataSecretKey] = useState('')
    const handlechange = (event, handler) => {
        handler(event.target.value);
      };
    const payload = {
        providerName,
        data_provider_id,
        data_base_name: dataName,
        URL_to_IAM_key: dataUrl
    }
    
    const handleSubmit = async () => {
        const data = await DATA_MARKET_API.createDataMarket(payload)
        IAM_MANAGEMENT_API.createIAMRole({
            accessKey: dataAccessKey,
            secretKey: dataSecretKey,
            encodedKey,
            dataMarketId: data.data
        })
    }
    return (
        <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <Title>Register Data to marketplace</Title>

      <FormControl disabled variant="standard">
        <InputLabel htmlFor="component-disabled">Provider Name</InputLabel>
        <Input id="component-disabled" value={providerName} />
        <FormHelperText>Disabled</FormHelperText>
      </FormControl>


      <FormControl variant="standard">
        <InputLabel htmlFor="component-simple">Data Name</InputLabel>
        <Input id="component-simple" value={dataName} onChange={(event) => handlechange(event, setDataName)} />
      </FormControl>

      <FormControl variant="standard">
        <InputLabel htmlFor="component-simple">Data URL</InputLabel>
        <Input id="component-simple" value={dataUrl} onChange={(event) => handlechange(event, setDataURL)} />
      </FormControl>

<FormControl variant="standard">
  <InputLabel htmlFor="component-simple">Data IAM Access Key</InputLabel>
  <Input id="component-simple" value={dataAccessKey} onChange={(event) => handlechange(event, setDataAccessKey)} />
</FormControl>

<FormControl variant="standard">
  <InputLabel htmlFor="component-simple">Data IAM Secret Key</InputLabel>
  <Input id="component-simple" value={dataSecretKey} onChange={(event) => handlechange(event, setDataSecretKey)} />
</FormControl>

              </Paper>

      <Button variant="contained" onClick={() => handleSubmit()}>Submit</Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    )
}