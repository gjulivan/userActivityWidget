import * as widgetTypes from '../types/widgetTypes'
import $ from "jquery";
//import { Map,List } from 'immutable';

const initialState = [];

export function myWidgetsSetting(state = initialState, action) {
    switch (action.type) {
        case widgetTypes.EDIT_SETTING:
         {
              console.log(state);
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