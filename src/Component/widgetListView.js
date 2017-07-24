import React, {Component} from 'react';
import PropTypes from 'prop-types'; 

class WidgetListView extends Component {
constructor(props) {
    super(props);
    this.state = {
    }
    this.selectWidget = this.selectWidget.bind(this);
  }
  componentDidMount(){
    //console.log(this);
  }
  componentDidUpdate(prevProps, prevState) {
    //console.log(this);
  }
  selectWidget(widget){
    if(this.props.selectWidget){
      this.props.selectWidget(widget);
    }
  }

  render() {
    const {widgets, label, selectWidget} = this.props;
    return (
    <div className="row">
         {
             widgets && Object.keys(widgets).map((key)=>{
              let widget = widgets[key];
              return (
                <div key={widget.key} className="col-xs-12">
                    <div className="col-xs-2">
                        {widget.icon}
                    </div>
                    <div className="col-xs-8">
                         <div className="row">
                            <div className="col-xs-12">
                            {widget.title}
                            </div>
                            <div className="col-xs-12">
                            {widget.desc}
                            </div>
                            <div className="col-xs-12">
                            {widget.variables}
                            </div>
                         </div>
                    </div>
                    <div className="col-xs-2">
                        <div className="btn btn-primary" onClick={()=>{this.selectWidget(widget)}}>{label.buttonText}</div>
                    </div>
                </div>
                )
             })
         }
        
      
    </div>
    )

  }
}


WidgetListView.defaultProps = {
  label: {
    buttonText : "Add Widget"
  }
};

WidgetListView.propTypes = {
  label:  PropTypes.object
}


export default WidgetListView;