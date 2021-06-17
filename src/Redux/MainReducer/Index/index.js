import { combineReducers } from 'redux';
import { reducerForLogin } from '../../Reducer/Index';
export default combineReducers({ login: reducerForLogin })