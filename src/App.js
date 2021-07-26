import { Container, Grid } from '@material-ui/core';
import React from 'react';
import './App.css';
import Addtask from './Components/AddTask';
import ListTask from './Components/ListTask';

function App() {
  return (
    <div >
      <Container maxWidth="sm" className="addtask">
        <Grid
          container
          direction="column"
          alignItems="center"
        >
          <Addtask />
        </Grid >
        <ListTask />
      </Container>

    </div>
  );
}

export default App;
