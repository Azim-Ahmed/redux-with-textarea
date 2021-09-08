import { messageRequest } from "../actions/constant";

const initState = {
    message: [],
};
const messageReducer = (state = initState, action) => {
    switch (action.type) {
        case messageRequest.ADD_NEW_MESSAGE:
            return {
                ...state,
                message: [...state.message, action.payload],
            };
        case messageRequest.REMOVE_NEW_MESSAGE:
            const newArray = state.message.filter(item => item.newId !== action.payload)
            return {
                ...state,
                message: newArray,
            };
        default:
            return state;
    }
};

export default messageReducer;
