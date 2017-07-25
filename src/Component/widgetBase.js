import React, {Component} from 'react';
//import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types'; 
import { DragSource, DropTarget  } from 'react-dnd';
import flow from 'lodash.flow';
import $ from 'jquery';

import {DragTypes} from '../Store/types/widgetTypes';

import RenderWidget from './RenderingComponent/renderWidget';
import RenderEmptyArea from './RenderingComponent/renderEmptyArea';
import WidgetSettingBase from './Widget/widgetSettingBase';


/**
 * Specifies the drag source contract.
 * Only `beginDrag` function is required.
 */
const widgetSource = {
  beginDrag(props) {
    // Return the data describing the dragged item
    return props.widget;
  },

  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      return;
    }
    // When dropped on a compatible target, do something
   // const widget = monitor.getItem();
   // const dropResult = monitor.getDropResult();
  }
};

/**
 * Specifies which props to inject into your component.
 */
function collectDrag(connect, monitor) {
  return {
    // Call this function inside render()
    // to let React DnD handle the drag events:
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    // You can ask the monitor about the current drag state:
    isDragging: monitor.isDragging()
  };
}


/**
 * Specifies the drop target contract.
 * All methods are optional.
 */
const widgetTarget = {
  canDrop(props, monitor) {
    // You can disallow drop based on props or item
    const widget = monitor.getItem();
    return widget.key ? true : false;
 //   return canMakeChessMove(item.fromPosition, props.position);
  },

  hover(props, monitor, component) {
    // This is fired very often and lets you perform side effects
    // in response to the hover. You can't handle enter and leave
    // here—if you need them, put monitor.isOver() into collect() so you
    // can just use componentWillReceiveProps() to handle enter/leave.

    // You can access the coordinates if you need them
    //const clientOffset = monitor.getClientOffset();
    //const componentRect = findDOMNode(component).getBoundingClientRect();

    // You can check whether we're over a nested drop target
    //const isJustOverThisOne = monitor.isOver({ shallow: true });

    // You will receive hover() even for items for which canDrop() is false
    //const canDrop = monitor.canDrop();
  },

  drop(props, monitor, component) {
    if (monitor.didDrop()) {
      // If you want, you can check whether some nested
      // target already handled drop
      return;
    }

    // Obtain the dragged item
    const widget = monitor.getItem();

    // You can do something with it
  //  ChessActions.movePiece(item.fromPosition, props.position);
  props.widgetActions.moveWidget(widget, props.id);
    // You can also do nothing and return a drop result,
    // which will be available as monitor.getDropResult()
    // in the drag source's endDrag() method
    return { moved: true };
  }
};

/**
 * Specifies which props to inject into your component.
 */
function collectDrop(connect, monitor) {
  return {
    // Call this function inside render()
    // to let React DnD handle the drag events:
    connectDropTarget: connect.dropTarget(),
    draggedId:monitor.getItem(),
    // You can ask the monitor about the current drag state:
    isOver: monitor.isOver(),
    isOverCurrent: monitor.isOver({ shallow: true }),
    canDrop: monitor.canDrop(),
    itemType: monitor.getItemType()
  };
}


class WidgetBase extends Component {
constructor(props) {
    super(props);
    this.state = {
      availableViews : ["daily", "weekly", "monthly"],
      availableMenus : [{key:"edit", label: "Edit widget"}, {key:"delete", label: "Delete Widget"}],
      widgetSetting: {},
      selectedView : "weekly"
    }

    this.selectView = this.selectView.bind(this);
    this.selectMenu = this.selectMenu.bind(this);
    this.onSettingValueChange = this.onSettingValueChange.bind(this);
    this.saveSetting = this.saveSetting.bind(this);
  }
  componentDidMount(){
    //console.log(this);
  }
  componentDidUpdate(prevProps, prevState) {
    //console.log(this);
  }

  selectView(view){
    this.setState({selectedView:view});
  }

  selectMenu(menu){
     //alert(`select ${menu.key}`);
     if(menu.key === "delete"){
        this.props.widgetActions.removeWidget(this.props.widget);
     }
     else{
        $(`#widget-setting-modal-${this.props.id}`).modal('show');
     }
  }

  onSettingValueChange(key, value){
    this.setState({widgetSetting: Object.assign({},this.state.widgetSetting, {[key] : value} )});
  }

  saveSetting(){
     const { widget, setting, widgetActions} = this.props;
     let newSetting = Object.assign({}, setting, this.state.widgetSetting);
     widgetActions.editSetting(widget.key, newSetting);
     this.setState({widgetSetting : {}});
  }

  render() {
    const {connectDragSource, connectDropTarget,isDragging , canDrop, isOver, 
          id, widget, setting, widgetActions} = this.props;
    const isDraggingClass = isDragging ? "dragging" : "";
    const settingLabel = widget ? {
      title : widget.settingTitle
    } : {}

    //const settingComponent = widget ? widget.setting : <div />;
     return connectDragSource(connectDropTarget(
      <div className={`widget-base ${isDraggingClass}`}>
      <WidgetSettingBase label={settingLabel} widgetActions={widgetActions} saveSetting = {this.saveSetting} id={id}>
            {React.cloneElement(widget ? widget.setting : <div />,{setting:setting})}
      </WidgetSettingBase>
           {
                 widget ? <RenderWidget widget={widget}
                          setting={setting}
                          selectedView={this.state.selectedView} 
                          selectView={this.selectView} 
                          selectMenu={this.selectMenu} 
                          isDragging={isDragging}
                          availableViews={this.state.availableViews} 
                          availableMenus={this.state.availableMenus}/>: 
                  <RenderEmptyArea canDrop={canDrop} isOver={isOver} id={id}/>
           }
           {
             isDragging && <div className="dragging-cover">
                        <span>PUT BACK HERE</span>
                    </div>
           }
      </div>
    ))

  }
}


WidgetBase.defaultProps = {
  setting : {}
};

WidgetBase.propTypes = {
  widget:  PropTypes.object,
  setting : PropTypes.object
}


export default flow(
  DragSource(DragTypes.CARD, widgetSource, collectDrag),
  DropTarget(DragTypes.CARD, widgetTarget, collectDrop)
)(WidgetBase);