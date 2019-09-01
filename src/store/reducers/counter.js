import * as math from 'mathjs'; 
import * as actionTypes from '../actions';

const initialState = {
    count : ''
}

const reducer = ( state = initialState , action ) => {

    switch( action.type ) {
        case actionTypes.ADDON:
            return {
                ...state,
                count : state.count + action.val       
            } 
        case actionTypes.EVAL:
                return {
                    ...state,
                    count : math.evaluate( state.count )       
                }
        case actionTypes.CLEAR:
                return {
                    ...state,
                    count : ''       
                }                          
    }

    return state;
}

export default reducer;