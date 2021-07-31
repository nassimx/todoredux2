import { Checkbox } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { complete, remove } from '../../Redux/Action/taskAction'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import './Task.css'
import EditTask from '../Edittask/EditTask';


const Task = ({ item }) => {
    const dispatch = useDispatch();


    return (
        <div className="task" >
            <h2 className={item.isDone ? "Done" : "none"}>
                {item.task} </h2>
            <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
                onClick={() => dispatch(complete(item.id))}
            />
            <EditIcon className="editicon" />
            <DeleteIcon className="deleteicon" onClick={() => dispatch(remove(item.id))} />
            <EditTask item={item} />
        </div>
    )
}

export default Task
