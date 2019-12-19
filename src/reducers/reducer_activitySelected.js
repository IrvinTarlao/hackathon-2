import {initState} from './index';

export default  function reducer_activitySelected(state = initState.activitySelected , action) {
    switch(action.type){
            case 'IS_SELECTED' :
                return [...state, action.payload];
            default : 
                return state;
        }

}