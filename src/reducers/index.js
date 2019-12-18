import { combineReducers } from 'redux';
import reducer_test from './reducer_test.js';
import NewActivity_reducer from './NewActivity_reducer.js';
// penser à importer les reducers;
export const initState = {
    names: [{ id: 1, name: "Eloïse" },
            { id: 2, name: "Alice" },
            { id: 3, name: "Toto" },
    ],
    newActivForm : [],
}

const rootReducer = combineReducers({
    names: reducer_test,
    newActivForm: NewActivity_reducer,
    // cléSouhaitée : reducerSouhaité,
});

export default rootReducer;
