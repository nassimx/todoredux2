import { ADD_TASK, EDIT_TASK, DELETE_TASK, COMPLETE_TASK } from "../Types/ActionType"

const initialState = {
    tabTasks: [{
        id: Math.random(),
        task: "Learn Redux",
        isDone: false
    }, {
        id: Math.random(),
        task: "Learn Mongodb",
        isDone: false
    },
    {
        id: Math.random(),
        task: "build project",
        isDone: false

    }]
};
const taskReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_TASK:
            return { ...state, tabTasks: [...state.tabTasks, payload] };
        case EDIT_TASK:
            return {
                ...state, tabTasks: state.tabTasks.map((el) => (el.id === payload.id) ? { ...el, task: payload.value } : el)
            };
        case DELETE_TASK:
            return {
                ...state,
                tabTasks: state.tabTasks.filter((el) => el.id !== payload)
            };
        case COMPLETE_TASK:
            return { ...state, tabTasks: state.tabTasks.map((el) => (el.id === payload) ? { ...el, isDone: !el.isDone } : el) }

        default:
            return state;
    }
};

export default taskReducer;