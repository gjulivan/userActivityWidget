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
    const {numberOfUser, activity, time, date, label} = this.props;
    return (
    <div className="row">
       <div className="col-xs-12 col-md-5">
          <span>{label.numberOfUser}</span>
       </div>
       <div className="col-xs-12 col-md-5">
          <input type="number" min="1" max="5" defaultValue={numberOfUser} id="numberOfUser" onChange={this.onValueChange}/>
       </div>
       <div className="col-xs-12 col-md-5">
          <span>{label.activity}</span>
       </div>
       <div className="col-xs-12 col-md-5">
          <input type="radio" name="Activity" value="DESC" id="asc_activity" onClick={this.onValueChange}/>
          <label htmlFor="asc_activity">{label.activityAsc}</label>
          <input type="radio" name="Activity" value="ASC" id="desc_activity" onClick={this.onValueChange}/>
          <label htmlFor="desc_activity">{label.activityDesc}</label>
       </div>
       <div className="col-xs-12 col-md-5">
          <span>{label.time}</span>
       </div>
       <div className="col-xs-12 col-md-5">
          <input type="number" min="1" max="5" />
       </div>
       <div className="col-xs-12 col-md-5">
          <span>{label.date}</span>
       </div>
       <div className="col-xs-12 col-md-5">
          <input type="number" min="1" max="5" />
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
}


export default UserActivitySetting;