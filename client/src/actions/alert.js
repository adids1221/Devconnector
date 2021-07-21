import { SET_ALERT, REMOVE_ALERT } from "./types";
import { v4 as uuidv4 } from 'uuid';

export const setAlert = (msg, alertType, timeout = 5000) => disapatch => {
    const id = uuidv4();
    disapatch({
        type: SET_ALERT,
        payload: { msg, alertType, id }
    });

    setTimeout(() => disapatch({ type: REMOVE_ALERT, payload: id }), timeout);
};