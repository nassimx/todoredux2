import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../Redux/Action/taskAction'
import Alert from '@material-ui/lab/Alert';




const useStyles = makeStyles((theme) => ({
    root: {
        width: '450px',
        '& > * + *': {
            marginTop: theme.spacing(5),
            marginBottom: theme.spacing(5),
            marginRight: theme.spacing(1),
            display: 'flex',
            flexWrap: 'wrap',
        },
    },
}));
const AddTask = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [task, setTask] = useState("");
    const newItem = () => {
        if (task) {
            dispatch(add({ task: task, isDone: false, id: Math.random() }));
            setTask("");
        } else {
            <div className={classes.root}>
                <Alert variant="filled" severity="error">
                    This is an error alert — check it out!
                </Alert>
            </div>
        }
    };
    return (
        <div>
            <h1>THINGS TO DO</h1>
            <TextField value={task} onChange={(e) =>
                setTask(e.target.value)} className={classes.root} label="Add Todo List" color="primary" />
            <Fab size="small" color="primary" aria-label="add">
                <AddIcon onClick={newItem} />
            </Fab>
        </div>
    )
}

export default AddTask
