import React, {Component} from 'react';
import PropTypes from 'prop-types'; 
import WidgetListView from './widgetListView';
import $ from 'jquery';


class AddWidget extends Component {
constructor(props) {
    super(props);
    this.state = {
      selectedNav : "directory",
      listButtonText : "Add Widget",
      displayWidgetList : []
    }

    this.selectNav = this.selectNav.bind(this);
    this.selectWidget = this.selectWidget.bind(this);
    this.findDisplayWidget = this.findDisplayWidget.bind(this);
  }

  findDisplayWidget(selectedNav){
      const {widgets, myWidgets} = this.props;
    if(selectedNav === "directory"){
      return widgets;
    }
    else{

     return myWidgets.map((w)=>{
          return widgets[w.key];
     })
    }
  }

  componentDidMount(){
    this.selectNav(this.props.navigations[0].key)
    //console.log(this);
  }
  componentDidUpdate(prevProps, prevState) {
    //console.log(this);
  }


  selectNav(key,event){
    let displayWidgetList = this.findDisplayWidget(key);
    this.setState({selectedNav: key, 
       listButtonText : key === "directory" ? "Add Widget" : "Remove Widget",
       displayWidgetList : displayWidgetList});
  }

  selectWidget(widget){
    const {widgetActions} = this.props;
    if(this.state.selectedNav === "directory"){
      widgetActions.selectWidget({key: widget.key});
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
                    return (
                      <li key={nav.key} className="btn btn-default" onClick={()=>{this.selectNav(nav.key)}}>
                          {nav.content}
                      </li>
                      )
                  })
                }
                </ul>
              </div>
              <div className="col-xs-9 col-md-8">
                  <WidgetListView widgets={this.state.displayWidgetList} label={{buttonText: this.state.listButtonText}} selectWidget={this.selectWidget}/>
              </div>
            </div>

          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
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
        content : <div>
                    <span>
                        <img src="/images/Widgetdirectory - icon - default.svg" />
                    </span> Widget Directory
                  </div>
      },
      {
        key : "mywidget",
        content :   <div>
                      <span>
                          <img src="/images/Mywidget-default.svg" />
                      </span> My Widget
                    </div>
      }
    
  ]
};

AddWidget.propTypes = {
  label : PropTypes.object,
  navigations: PropTypes.array

}


export default AddWidget;