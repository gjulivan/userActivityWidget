import * as widgetTypes from '../types/widgetTypes'

const initialState = [];

export function myWidgetsSetting(state = initialState, action) {
    switch (action.type) {
        case widgetTypes.EDIT_SETTING:
         {
              if(action.key){
                    return Object.assign({}, state, {[action.key] : action.setting});
                }
                else{
                    return state;
                }
        }
        default:
            return state;
    }
}