import { Container, Grid } from '@material-ui/core';
import React from 'react';
import './App.css';
import Addtask from './Components/Addtask/AddTask';
import FilterTask from './Components/Filter/FilterTask';
import ListTask from './Components/Listtask/ListTask';

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
          <FilterTask/>
        </Grid >
        <ListTask />
      </Container>

    </div>
  );
}

export default App;
