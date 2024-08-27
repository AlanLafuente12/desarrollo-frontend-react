import { SET_FORM_DATA, CLEAR_FORM_DATA } from './formTypes';

const initialState = {
    formData: {
        username: '',
        email:'',
        pass:'',
    },
    pass : "123"
}

const formReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_FORM_DATA : {
            return {
                // obtener los valores anteriores, 
                // para no perder el valor del password
                // o perder el formato en caso de no recibir algun valor
                ...state,
                formData: {
                    // sobreescribir el nuevo valor
                    ...action.payload
                }
            }  
        }
        case CLEAR_FORM_DATA : {
            return {
                // obtener los valores anteriores, 
                // para no perder el valor del password
                // o perder el formato en caso de no recibir algun valor
                ...state,
                formData: {
                    // sobreescribir por campos vacios
                    username: '',
                    email:'',
                    pass:'',
                }
            }    

        }
        default:
            return state;
    }
}
export default formReducer;
