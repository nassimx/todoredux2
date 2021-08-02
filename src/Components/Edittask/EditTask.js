import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useDispatch } from 'react-redux'
import { editTask } from "../../Redux/Action/taskAction";
import { Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import './Edittask.css'


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
    const handleChange = (e) => { setEditedTask(e.target.value) }
    return (
        <div>
            <EditIcon className="editicon" type="button" onClick={handleOpen} />
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
                        <input type="text" onChange={handleChange}
                            value={editedTask}
                            maxlength="30" />
                        <Button type="submit" onClick={handleClose}>
                            Close
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
