import { initState } from './index';

export default  function reducer_test(state = initState.filter) {
    if (state.filter === []) 
        return state.filter = state.activities;
    else
        return state.filter;
}
