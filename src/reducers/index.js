import { combineReducers } from 'redux';
import reducer_test from './reducer_test.js';
import reducer_filter from './reducer_filter.js';
import datas from './datas.json';

// penser à importer les reducers;
export const initState = { 
  activities: datas,
  filter: []
}

const rootReducer = combineReducers({
    activities: reducer_test,
    filter: reducer_filter,
    // cléSouhaitée : reducerSouhaité,
});

export default rootReducer;
