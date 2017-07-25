import React, {Component} from 'react';
import PropTypes from 'prop-types'; 

class UserActivitySetting extends Component {
constructor(props) {
    super(props);
    this.state = {
    }

    this.onValueChange = this.onValueChange.bind(this);
  }
  componentDidMount(){
    //console.log(this);
    const {setting} = this.props;
    if(setting){
      if(setting.activity==="ASC"){
        this.refs["desc_activity"].checked = true;
      }
      else{
       this.refs["asc_activity"].checked = true; 
      }
    }

  }
  componentDidUpdate(prevProps, prevState) {
    //console.log(this);
  }

   onValueChange(ev){
    
    if(ev.currentTarget.id){
      if(ev.currentTarget.id === "asc_activity" ||  ev.currentTarget.id === "desc_activity"){
          if(this.props.onValueChange){
            this.props.onValueChange("activity", ev.currentTarget.value);
          }
          
      }else if(ev.currentTarget.id === "numberOfUser"){
        if(this.props.onValueChange){
            this.props.onValueChange("numberOfUser", ev.currentTarget.value);
          }
      }
      

    }
    console.log(ev);
   }

  render() {
    const {setting, label} = this.props;
    return (
    <div className="row user-activity-setting">
       <div className="col-xs-12">
         <div className="form-group">
            <label htmlFor="numberOfUser">{label.numberOfUser}</label>
            <input type="number" className="form-control" id="numberOfUser" 
                      min="1" max="5" defaultValue={setting.numberOfUser} onChange={this.onValueChange}/>
         </div>
         <div className="form-group">
            <label htmlFor="activity-radios">{label.activity}</label>
            <div id="activity-radios">
              <label className="radio-inline"> 
                  <input type="radio" name="Activity" ref="asc_activity" value="DESC" id="asc_activity" onClick={this.onValueChange}/>{label.activityAsc}
              </label>
               <label className="radio-inline"> 
                  <input type="radio" name="Activity" ref="desc_activity" value="ASC" id="desc_activity" onClick={this.onValueChange}/>{label.activityDesc}
              </label>
            </div>
         </div>
          <div className="form-group">
            <label htmlFor="activity-time">{label.time}</label>
            <input type="number" className="form-control" id="activity-time" 
                      min="1" max="5"/>
         </div>
         <div className="form-group">
            <label htmlFor="activity-date">{label.date}</label>
            <input type="number" className="form-control" id="activity-date" 
                      min="1" max="5"/>
         </div>
       </div>
    </div>
    )

  }
}


UserActivitySetting.defaultProps = {
  label : {
    numberOfUser : "Number of Users",
    activity : "Activity",
    activityAsc : "Highest",
    activityDesc : "Lowest",
    time : "Time",
    date : "Date"
  }
};

UserActivitySetting.propTypes = {
  label : PropTypes.object
}


export default UserActivitySetting;