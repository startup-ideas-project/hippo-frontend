import * as React from 'react';
import Title from './title';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function QueryBox() {

  return (
    <React.Fragment>
      <Title>Query</Title>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="SQL query" variant="standard" multiline/>
    </Box>
    </React.Fragment>
  );
}