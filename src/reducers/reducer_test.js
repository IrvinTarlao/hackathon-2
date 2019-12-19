import { initState } from './index';

export default function reducer_test(state = initState.activities, action) {

    switch (action.type) {
        case 'ADD_NEW_ACT':
            return [...state, action.id]
        default:
            break;
    }
    return state;
}
