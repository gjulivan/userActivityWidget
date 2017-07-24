import * as widgetTypes from '../types/widgetTypes'


export function widgets(state = [], action) {
    switch (action.type) {
        case widgetTypes.ADD_WIDGET:
        if(action.widget){
            return Object.assign({}, state, {[action.widget.key] : action.widget});
        }
        else {
        	return state;
        }

        default:
            return state;
    }
}