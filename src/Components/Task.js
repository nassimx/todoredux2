import { Checkbox } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { complete, remove } from '../Redux/Action/taskAction'




const Task = ({ item }) => {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [id, setId] = useState();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <div >

            <h2 className={item.isDone && "lineTH"}><Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
                onClick={() => dispatch(complete(item.id))}
            />{item.task}</h2>
        </div>
    )
}

export default Task
