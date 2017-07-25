import React from 'react';
import UserActivity from '../Component/Widget/userActivity';
import UserActivitySetting from '../Component/Widget/userActivitySetting';
export function GetWidgets(){
	return [
			  {
			    key : "UserActivity",
			    title: "User activity",
			    author : "Time Doctor",
			    desc : "Users who worked more or less than their minimum hours required in daily, weekly, and monthly.",
			    variables : ["USERS", "WEBSITES", "APPS", "TIME", "DATE"],
			    icon : "ICON",
			    content: <UserActivity activity={GetUserActivity()}/>,
			    setting: <UserActivitySetting />,
			    settingTitle : "Top Highest percentage of Mobile Users",
			    footer : "test footer",
			    icon: "users activity widget picture.png"
			  },
			  {
			    key : "HoursTracked",
			    title: "Hours tracked",
			    author : "Time Doctor",
			    desc : "Total hours worked in monthly, weekly, daily, by users",
			    variables : ["USERS", "DATE"],
			    icon : "ICON",
			    content: <span>"Hours tracked"</span>,
			    setting: <span>"Hours tracked"</span>,
			    settingTitle: "Hours tracked",
			    footer : "test footer",
			    icon: "users activity widget picture.png"
			  }
			  
			  ]
}

export function GetUserActivity(){
	return {
			  "company": 123,
			  "start_time": "2017-05-01 15:20:17",
			  "end_time": "2017-06-01 15:40:17",
			  "users": [
			    {
			      "id": "194887",
			      "lastname": "Doe",
			      "name": "Jane"
			    },
			    {
			      "id": "194888",
			      "lastname": "Barret",
			      "name": "Samuel"
			    },
			    {
			      "id": "194889",
			      "lastname": "Love",
			      "name": "Scott"
			    },
			    {
			      "id": "194890",
			      "lastname": "McDaniel",
			      "name": "Michael"
			    },
			    {
			      "id": "194891",
			      "lastname": "Wilkerson",
			      "name": "Alejandro"
			    },
			    {
			      "id": "194892",
			      "lastname": "Fowler",
			      "name": "Ivan"
			    },
			    {
			      "id": "194893",
			      "lastname": "Doe",
			      "name": "John"
			    }
			  ],
			  "daily": {
			    "194887": 10.123,
			    "194888": 68.23,
			    "194889": 78.4,
			    
			    "194890": 20.8,
			    "194891": 7.92,
			    "194892": 88.02,
			    "194893": 78.23
			  },
			  "weekly": {
			    "194887": 60.123,
			    "194888": 98.23,
			    "194889": 88.4,
			    
			    "194890": 80.8,
			    "194891": 77.92,
			    "194892": 71.02,
			    "194893": 14.23
			  },
			  "monthly": {
			    "194887": 50.123,
			    "194888": 88.23,
			    "194889": 78.4,
			    
			    "194890": 70.8,
			    "194891": 67.92,
			    "194892": 61.02,
			    "194893": 4.23
			  }
			}
}