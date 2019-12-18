import { combineReducers } from 'redux';
import reducer_test from './reducer_test.js';
import datas from './datas.json';

// penser à importer les reducers;
export const initState = { activities: datas }

const rootReducer = combineReducers({
    activities: reducer_test,
    // cléSouhaitée : reducerSouhaité,
    // cléSouhaitée : reducerSouhaité,
});

export default rootReducer;
