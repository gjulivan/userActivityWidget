import React, {Component} from 'react';
import PropTypes from 'prop-types'; 
import $ from "jquery";

import './userActivity.css';

class UserActivity extends Component {
constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount(){
    //console.log(this);
  }
  componentDidUpdate(prevProps, prevState) {
    //console.log(this);
  }

  render() {
    const {activity,setting, selectedView} = this.props;
    let percentages = activity[selectedView];
    let users = $(activity.users).sort(function(a,b){
      return setting.activity==="DESC" ? percentages[a.id] < percentages[b.id] : percentages[a.id] > percentages[b.id];
    })
    return (
    <div className="user-activity">
       {
          users && users.slice(0, setting.numberOfUser).map((idx,user)=>{
            let randomAvatarPath = Math.ceil(Math.random()*5);
            randomAvatarPath = `/images/userAvatar${randomAvatarPath}.png`;
            let currentPercentage = percentages[user.id];
             return (
              <div className="row" key={user.id}>
                <div className=" col-xs-12 col-sm-5">
                    <img src={randomAvatarPath} alt={user.name} />
                     {`${user.name} ${user.lastname}`}
                </div>
                <div className="col-xs-8 col-sm-5 ">
                    <div className="progress">
                      <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                         style={{width:`${currentPercentage}%`}} >
                        <span className="sr-only">{`${currentPercentage}%`}</span>
                      </div>
                    </div>
                </div>
                  <div className="col-xs-4 col-sm-2">
                    {`${Math.round(currentPercentage)}%`}
                </div>
              </div>
              )
          })
        }
    </div>
    )

  }
}


UserActivity.defaultProps = {
  setting : {
    numberOfUser : 5,
    activity: "desc"
  }
};

UserActivity.propTypes = {
  setting : PropTypes.object
}


export default UserActivity;