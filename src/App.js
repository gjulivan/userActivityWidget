import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import './App.css';
import Dashboard from './Component/dashboard';

import * as WidgetActions from './Store/actions/widgetsAction';
import * as WidgetsAPI from './API/widgetsAPI';

import $ from "jquery";
// We need to expose jQuery as global variable
window.jQuery = window.$ = $;
require('bootstrap');

class App extends Component {
  
   componentDidMount(){
       const { widgetActions} = this.props;
       let newWidgets =  WidgetsAPI.GetWidgets();
       $(newWidgets).each((idx,widget)=>{
            widgetActions.addWidget(widget);
       })
       
       widgetActions.selectWidget(newWidgets[0]);
       widgetActions.editSetting(newWidgets[0].key, {numberOfUser :5, activity : "DESC"});
       widgetActions.moveWidget(newWidgets[0], 2);
       
  }

  render() {
    //const { widgets, myWidgets} = this.props;
    return (
    <Dashboard {...this.props}/>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        widgets: state.widgets,
        myWidgets : state.myWidgets,
        myWidgetsSetting: state.myWidgetsSetting
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
         widgetActions: bindActionCreators(WidgetActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
