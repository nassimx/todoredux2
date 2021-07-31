import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useDispatch } from 'react-redux'
import { editTask } from "../../Redux/Action/taskAction";
import { Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const EditTask = ({ item }) => {
    const classes = useStyles();


    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [editedTask, setEditedTask] = useState("")
    const dispatch = useDispatch();

    const edit = () => {
        dispatch(editTask(item.id, editedTask))
        handleClose();
    }

    return (
        <div>
            <button type="button" onClick={handleOpen}>
                Edit
            </button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">Edit Task</h2>
                        <input type="text" onChange={(e) => setEditedTask(e.target.value)} value={editedTask} />
                        <Button type="submit" onClick={handleClose}>
                            Edit
                        </Button>
                        <Button onClick={edit}>
                            Save Changes
                        </Button>

                    </div>
                </Fade>
            </Modal>
        </div>
    )
}

export default EditTask
