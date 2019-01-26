import { combineReducers } from 'redux';
import MainReducer from './mainReducer';

const Reducers = combineReducers({
    main: MainReducer
});

export default Reducers;