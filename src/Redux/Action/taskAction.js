
import { ADD_TASK, EDIT_TASK, DELETE_TASK, COMPLETE_TASK } from "../Types/ActionType"

//payload :task id isDone
export const add = (payload) => {
    return { type: ADD_TASK, payload }

};
//payload:id revisedOne
export const edit = (payload) => {
    return { type: EDIT_TASK, payload }

};
//payload : id 
export const remove = (payload) => {
    return { type: DELETE_TASK, payload }
};

// payload : id
export const complete = (payload) => {
    return { type: COMPLETE_TASK, payload }
};

