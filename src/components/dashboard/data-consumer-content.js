import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './title';
import { useSelector } from 'react-redux';
import {DATA_REQUEST_API} from '../../api';
import Button from '@mui/material/Button';

export default function DataConsumerContent() {
    const user = useSelector((state) => state.user)
    const [dataMarket, setDataMarket] = useState([])
    useEffect(() => {
        DATA_REQUEST_API.getDataRequest(user.user_id).then(_ => setDataMarket(_.data))
  },[user.user_id]) 
  console.log(dataMarket)

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
              <Title>Data Marketplace</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Data</TableCell>
            <TableCell>Consumer</TableCell>
            <TableCell>Requested Date</TableCell>
            <TableCell align="right">Approval</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataMarket.map(data => (
            <TableRow key={data.id}>
              <TableCell>{data.data_base_name}</TableCell>
              <TableCell>{data.data_provider_id}</TableCell>
              <TableCell>{data.modify_at}</TableCell>
              <TableCell align="right"><Button>Request</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    )
}