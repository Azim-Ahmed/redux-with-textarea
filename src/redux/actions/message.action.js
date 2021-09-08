import { messageRequest } from './constant';

export const addMessage = (user) => {
    return async (dispatch) => {
        dispatch({
            type: messageRequest.ADD_NEW_MESSAGE,
            payload: user
        })
    };
};
export const removeMessage = (id) => {
    return async (dispatch) => {
        dispatch({
            type: messageRequest.REMOVE_NEW_MESSAGE,
            payload: id
        })
    };
};