import { SET_FORM_DATA } from './formTypes';

export const saveFormData = (payload_formdata) => {
    return {
        type: SET_FORM_DATA,
        payload: payload_formdata,
    }
}
