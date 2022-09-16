import { Grid } from '@mui/material';
import { useState } from 'react';
import MainDial from './components/app/MainDial';
import Navigation from './components/app/Navigation';

function App() {
  const [viewPage, setViewPage] = useState();

  return (
    <Grid container>
      <Grid item xs={12} sx={view}>
        <Grid container sx={{height:'100%'}} justifyContent="center">
          <Grid item xs={11} sx={{height:'100%'}}>
            {viewPage}
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sx={nav}>
        <MainDial />
        <Navigation setViewPage={setViewPage}/>
      </Grid>
    </Grid>
  );
}
export default App;

const view = {
  height: '90vh',
}

const nav = {
  height: '10vh',
  borderTop: '1px solid lightgrey'
}