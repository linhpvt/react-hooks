import { combineReducers } from 'redux';
import todoReducer from './TodoReducer';
export default combineReducers({
    todoData: todoReducer,
    // itemsHasErrored,
    // itemsIsLoading
});