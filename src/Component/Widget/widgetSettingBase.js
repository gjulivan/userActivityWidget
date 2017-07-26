import React, {Component} from 'react';
import PropTypes from 'prop-types'; 
//import $ from 'jquery';

class WidgetSettingBase extends Component {
constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount(){
 
  }
  componentDidUpdate(prevProps, prevState) {
    //console.log(this);
  }

  render() {
    const {id, widgetActions, children, saveSetting, cancelSetting, label} = this.props;
    return (
     <div className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="widget-setting-modal" id={`widget-setting-modal-${id}`}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 className="modal-title">{label.title}</h4>
          </div>
          <div className="modal-body">
            <div className="row">
                 {children}
            </div>

          </div>
          <div className="modal-footer">
            <div className="svg-button cancel" onClick={cancelSetting} data-dismiss="modal"></div>
            <div className="svg-button save" onClick={saveSetting}></div>
          </div>
        </div>
      </div>
    </div>
    )

  }
}


WidgetSettingBase.defaultProps = {
  label: {
    title: "Setting"}
};

WidgetSettingBase.propTypes = {
  label:  PropTypes.object
}


export default WidgetSettingBase;