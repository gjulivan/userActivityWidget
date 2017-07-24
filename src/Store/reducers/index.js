import { combineReducers } from 'redux';
import { widgets } from './widgets';
import {myWidgets} from './myWidgets';
import {myWidgetsSetting} from './myWidgetsSetting';

export default combineReducers({
    myWidgets,
    myWidgetsSetting,
    widgets
});