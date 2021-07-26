import { ADD_TASK, EDIT_TASK, DELETE_TASK, COMPLETE_TASK } from "../Types/ActionType"

const initialState = {
    tabTasks: [],
};
export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_TASK:
            return { ...state, tabTasks: [...state.tabTasks, payload] };
        case EDIT_TASK:
            return {
                ...state,
                tabTasks: state.tabTasks.map((el) =>
                    el.id === payload.id ? { ...el, task: payload.revisedOne } : el
                ),
            };
        case DELETE_TASK:
            return {
                ...state,
                tabTasks: state.tabTasks.filter((el) => el.id !== payload),
            };
        case COMPLETE_TASK:
            return {
                ...state,
                tabTasks: [
                    ...state.tabTasks.map(
                        (el) => (el.id = payload ? { ...el, isDone: !el.isDone } : el)
                    ),
                ],
            };

        default:
            return state;
    }
};
