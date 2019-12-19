import { initState } from './index';

export default  function reducer_test(state = initState.filter, action) {
    switch (action.type) {
        case "FILTER_VALUE":
            return { ...state, filter: action.filter}
        default:
            return state;
    }
}
