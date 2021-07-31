import React from 'react'
import { useSelector } from 'react-redux'
import Task from '../Task/Task'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));
const ListTask = () => {
    const classes = useStyles();

    const tabTasks = useSelector(state => state.taskReducer.tabTasks)
    return (
        <div className={classes.root}>
            <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                <Button>Done</Button>
                <Button>Undone</Button>
            </ButtonGroup>
            <div>

                {tabTasks.map((item) => <Task item={item} key={item.id} />)}
            </div>
        </div>
    )
}

export default ListTask
