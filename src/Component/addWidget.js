import React, {Component} from 'react';
import PropTypes from 'prop-types'; 
import RenderWidgetDirectory from './RenderingComponent/renderWidgetDirectory';

import {RenderWidgetItemDirectory, RenderWidgetItemSelected} from './RenderingComponent/RenderWidgetItem'
import './addWidget.css';

class AddWidget extends Component {
constructor(props) {
    super(props);
    this.state = {
      selectedNav : {},
      listButtonText : "Add Widget"
    }

    this.selectNav = this.selectNav.bind(this);
    this.selectWidget = this.selectWidget.bind(this);
  }

  componentDidMount(){
    this.selectNav(this.props.navigations[0])
  }
  componentDidUpdate(prevProps, prevState) {
    //console.log(this);
  }


  selectNav(nav){
    this.setState({selectedNav: nav})

  }

  selectWidget(widget){
    const {widgetActions, navigations} = this.props;
    if(this.state.selectedNav === navigations[0]){
      widgetActions.selectWidget(widget);
    }
    else if(this.state.selectedNav === navigations[1]){
      widgetActions.removeWidget(widget);
    }
  }

  render() {
    const {label, navigations, widgets, myWidgets, widgetActions} = this.props;

    return (
    <div className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="add-widget-modal" id="add-widget-modal">
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 className="modal-title">{label.title}</h4>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-xs-2 col-md-3">
                <ul className="nav nav-pills nav-stacked">
                {
                  navigations.map((nav,idx)=>{
                    let isActive = this.state.selectedNav===nav ? "active" : "";
                    return (
                      <li key={nav.key} className={`btn nav-${nav.key} ${isActive}`} 
                      onClick={()=>{this.selectNav(nav)}}>
                      <span className={`icon pull-left`}></span>
                          <span className={`add-widget-nav ${nav.key}`} >{nav.label}</span>
                      </li>
                      )
                  })
                }
                </ul>
              </div>
              <div className="col-xs-9 col-md-9 widget-display">
                  <RenderWidgetDirectory 
                  navigations={navigations}
                      widgets={widgets} 
                      myWidgets={myWidgets}
                      selectedNav={this.state.selectedNav}
                      selectWidget={this.selectWidget}>
                      {this.state.selectedNav.contentItemRenderer}
                   </RenderWidgetDirectory>
                       <div className="pull-right text-right">
                          <div className="svg-button cancel" data-dismiss="modal"></div>
                          <div className="svg-button save"></div>
                        </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
    )

  }
}


AddWidget.defaultProps = {
  label : {
    title : "Add a widget"
  },
  navigations:  [
      {
        key : "directory",
        label : "Widget Directory",
        contentItemText : "Add Widget",
        contentItemRenderer : <RenderWidgetItemDirectory />
      },
      {
        key : "mywidget",
        label : "My Widget",
        contentItemText : "Remove Widget",
        contentItemRenderer : <RenderWidgetItemSelected />
      }
    
  ]
};

AddWidget.propTypes = {
  label : PropTypes.object,
  navigations: PropTypes.array

}


export default AddWidget;