import { combineReducers } from 'redux';
import reducer_test from './reducer_test.js';
import reducer_filter from './reducer_filter.js';
import reducer_activitySelected from './reducer_activitySelected';
import datas from './datas.json';

export const initState = { 
  activities: datas,
  filter: [],
  activitySelected : [],
}

const rootReducer = combineReducers({
    activities: reducer_test,
    filter: reducer_filter,
    activitySelected : reducer_activitySelected,
});

export default rootReducer;
