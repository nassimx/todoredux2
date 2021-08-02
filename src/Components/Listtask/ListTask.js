import React from 'react'
import { useSelector } from 'react-redux'
import Task from '../Task/Task'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(0),
        },
    },
}));
const ListTask = () => {
    const classes = useStyles();

    const tabTasks = useSelector(state => state.taskReducer.tabTasks)
    return (
        <div className={classes.root}>
            {tabTasks.map((item) => <Task item={item} key={item.id} />)}
        </div>
    )
}

export default ListTask
