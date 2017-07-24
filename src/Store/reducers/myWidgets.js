import * as widgetTypes from '../types/widgetTypes'
import $ from "jquery";
//import { Map,List } from 'immutable';

const initialState = [];

export function myWidgets(state = initialState, action) {
    switch (action.type) {
        case widgetTypes.SELECT_WIDGET:
         {
             if(action.widget){
             
             		if(GetCurrentIndex(state, action.widget.key)<0){
             			let nextPos = findNextPlace(state, action.widget);
    	         		return Object.assign({}, state, {[nextPos] : action.widget.key});
             		}
             		else{
             			return state;
             		}
             }
             else{

             	return state;
             }
        }
        case widgetTypes.MOVE_WIDGET:
        {
            let currentPlace = GetCurrentIndex(state, action.widget.key);
            if(currentPlace!==action.seq){
                delete state[currentPlace];
                return Object.assign({}, state, {[action.seq] : action.widget.key});
            }
            return state;
        }
        case widgetTypes.REMOVE_WIDGET:
        {
          let currentPlace = GetCurrentIndex(state, action.widget.key);
          delete state[currentPlace];
            return Object.assign({}, state);
        }
        default:
            return state;
    }
}

function findNextPlace(state,widget){
	let idx = 1, found = false;

	while(!found){
		if(state[idx]===undefined){
			found = true; 
		}
		else {
			idx++;
		}
	}

	return idx;

}

function GetCurrentIndex(state, value){
    let foundKey = -1; 
    Object.keys(state).forEach(function(key) {
          if (state[key] === value) {
            foundKey = key; 
            return;
          }
        });
    return foundKey;
}