import { createStore } from 'redux';

// importacion del reducer
import rootReducer from './reducers';
const store = createStore(rootReducer);

export default store;