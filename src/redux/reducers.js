import { combineReducers } from 'redux';

// aca importamos todos los reducers
import defaultReducer from "./default/defaultReducer";
import productReducer from "./product/productReducer";
import formReducer from "./form/formReducer";

const rootReducer = combineReducers({
    defaultReducerRef: defaultReducer,
    productReducerRef: productReducer,
    formReducerRef: formReducer,
});

export default rootReducer;