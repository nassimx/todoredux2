import { Checkbox } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { complete, remove } from '../../Redux/Action/taskAction'
import DeleteIcon from '@material-ui/icons/Delete';
import './Task.css'
import EditTask from '../Edittask/EditTask';


const Task = ({ item }) => {
    const dispatch = useDispatch();


    return (
        <div className="task" >
            <h2 className={item.isDone ? "Done" : null}>
                {item.task} </h2>
            <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
                onClick={() => dispatch(complete(item.id))}
            />
            <EditTask item={item} />
            <DeleteIcon className="deleteicon" onClick={() => dispatch(remove(item.id))} />

        </div>
    )
}

export default Task
