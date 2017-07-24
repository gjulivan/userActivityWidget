import React, {Component} from 'react';
import PropTypes from 'prop-types';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

import WidgetBase from './widgetBase';
import $ from "jquery";
import 'bootstrap/dist/css/bootstrap.css';
import './dashboard.css';

import AddWidget from './addWidget'


class Dashboard extends Component {
constructor(props) {
    super(props);
    this.state = {
    }
    this.addWidget = this.addWidget.bind(this);
  }
  componentDidMount(){
    //console.log(this);
  }
  componentDidUpdate(prevProps, prevState) {
    //console.log(this);
  }

  addWidget(ev){
    alert("add");
  }

  render() {
    const {label, componentCount, widgets, myWidgets ,myWidgetsSetting, widgetActions} = this.props;
    let contents = [];
      Object.keys(myWidgets).forEach(function(key) {
       contents[key-1] =  widgets[myWidgets[key]];
      });
    for(let i=0;i<componentCount;i++){
      if(contents[i] ===undefined){
          contents[i] = undefined;  
      }
      
    }

    return (
    <div className="dashboard container">
    <AddWidget widgets={widgets} myWidgets={myWidgets} widgetActions={widgetActions}/>
      <div className="title row">
          <div className="col-xs-8">
             <h3> {label && label.title }</h3>
          </div>
          <div className="control-buttons text-right col-xs-4">
              <div className="btn btn-danger edit-layout">
                   {label && label.edit }
              </div>
              <div className="btn btn-primary add-widget" data-toggle="modal" data-target="#add-widget-modal">
                 <img src="/images/addwidget - icon.svg" />
                   {label && label.add }
              </div>
          </div>
      </div>
      <div className="content row ">
          <div className="row ">
          {
            contents.map((content,idx)=>{
              let setting = content? myWidgetsSetting[content.key] : {};
              return(
              <div key={`content_${idx}`} className="col-xs-12 col-xm-6 col-md-4 col-lg-4 content-widget">
                  {
                    <WidgetBase id={idx+1} widget={content} widgetActions={widgetActions} setting={setting}/>
                  
                  }
              </div>)
              
            })
          }
              
          </div>
      </div>
    </div>
    )

  }
}


Dashboard.defaultProps = {
  label:  {
        title : "Team Dashboard",
        edit : "Edit Layout",
        add : "Add Widget"
    },
  widgets: [],
  myWidgets:[],
  componentCount: 6
};

Dashboard.propTypes = {
  label: PropTypes.object,
  componentCount:  PropTypes.number
}


export default DragDropContext(HTML5Backend)(Dashboard);