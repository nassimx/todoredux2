import { Container, Grid } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Addtask from './Components/Addtask/AddTask';
import ListTask from './Components/Listtask/ListTask';

function App() {
  //
  const todotasks = useSelector((state) => state.taskReducer.tabTasks);
  // console.log(todotasks)
  const [status, setStatus] = useState("All Task");
  const [filteredTask, setFilteredTask] = useState([]);
  //
  useEffect(() => {
    filteredHandler();
  }, [todotasks, status]);
  // console.log(filteredTask)
  // console.log(status);
  const statusHandler = (e) => {
    setStatus(e.target.value);
  }

  //
  const filteredHandler = () => {
    switch (status) {
      case "Completed":
        setFilteredTask(todotasks.filter((todo) => todo.isDone === true));
        break;
      case "Uncompleted":
        setFilteredTask(todotasks.filter((todo) => todo.isDone === false));
        break;
      default:
        setFilteredTask(todotasks);
        break;
    }
  };

  // console.log(setStatus)

  return (
    <div >
      <Container maxWidth="sm" className="addtask">
        <Grid
          container
          direction="column"
          alignItems="center"
        >
          <Addtask />
          <div className="selectdiv">
            <label>
              <select onChange={statusHandler}>
                <option selected>All Task</option>
                <option>Completed</option>
                <option>Uncompleted</option>
              </select>
            </label>
          </div>
          <ListTask filteredTask={filteredTask} />
        </Grid >

      </Container>

    </div>
  );
}

export default App;
