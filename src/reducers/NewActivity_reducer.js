import {initState} from './index';

export default  function NewActivity_reducer(state = initState.newActivForm, action) {

    switch (action.type) {
        case 'SUBMIT':
            return [...state, action.id];
        default:
            break;
    }

    return state;
}