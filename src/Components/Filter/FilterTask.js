import { MenuItem, Select } from '@material-ui/core'
import React, { useState } from 'react'

const FilterTask = () => {

    const [tasks, setTasks] = useState('all')
    // const [filterTask, setFilterTask] = useState(tabTasks)
    const handleChange = (e) => { setTasks(e.target.value) }
    return (
        <div>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                style={{ width: 150 }}
                value={tasks}
                onChange={handleChange}
            >
                <MenuItem value={"all"}><em>All Task</em></MenuItem>
                <MenuItem value={10}>Complete</MenuItem>
                <MenuItem value={30}>Not Completed</MenuItem>
            </Select>
        </div>
    )
}

export default FilterTask
