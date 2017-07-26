import * as widgetTypes from '../types/widgetTypes'

/*
  widget =  {
                key : "UserActivity",
                title: "User Activity",
                author : "Time Doctor",
                desc : "description here",
                variables : ["USERS", "WEBSITES", "APPS", "TIME", "DATE"],
                icon : "ICON",
                content: <span>"User Activity"</span>,
                footer : "test footer"
              }
*/
export function addWidget(widget) {
    return {
        type: widgetTypes.ADD_WIDGET,
        widget: widget
    };
}

export function selectWidget(widget) {
    return {
        type: widgetTypes.SELECT_WIDGET,
        widget: widget
    };
}

export function moveWidget(widget, seq) {
    return {
        type: widgetTypes.MOVE_WIDGET,
        widget: widget,
        seq: seq
    };
}

export function removeWidget(widget, seq) {
    return {
        type: widgetTypes.REMOVE_WIDGET,
        widget: widget
    };
}

export function revertMyWidgetState(lastSavedState) {
    return {
        type: widgetTypes.REVERT_MYWIDGET,
        lastSavedState: lastSavedState
    };
}

export function editSetting(key, setting){
 return {
        type: widgetTypes.EDIT_SETTING,
        key: key,
        setting : setting
    };   
}