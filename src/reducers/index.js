import { combineReducers } from 'redux';
import reducer_test from './reducer_test.js';
// penser à importer les reducers;
export const initState = {
    names: [{ id: 1, name: "Eloïse" },
            { id: 2, name: "Alice" },
            { id: 3, name: "Toto" },
    ],
}

const rootReducer = combineReducers({
    names: reducer_test,
    // cléSouhaitée : reducerSouhaité,
    // cléSouhaitée : reducerSouhaité,
});

export default rootReducer;
