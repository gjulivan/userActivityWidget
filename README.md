## Instructions

simplified dashboard with an analytics widget management interface that allows the end-user to do adding/removing widgets.
live version is available at http://teamdashboard.azurewebsites.net/

## Features

Below are the basic features for the application:

- Add / remove 1 widget type
- The ability to drag and drop the widget over the dashboard and drop it into a grid
- The ability to open the settings screen of that widget
- The ability to change one of the settings of that widget

- The only widget implemented is the "User Activity Widget"

## Codes Walkthrough

- this project is created using create-react-app

#### redux store :
```
widgets
```
keep the list of registered widgets, key-based.
```
{
	"UserActivity" : {
		key : "UserActivity",
		title: "User activity",
		author : "Time Doctor",
		desc : "Users who worked more or less than their minimum hours.",
		variables : ["USERS", "WEBSITES", "APPS", "TIME", "DATE"],
		icon : "ICON",
		content: <UserActivity activity={GetUserActivity()}/>,
		setting: <UserActivitySetting />,
		settingTitle : "Top Highest percentage of Mobile Users",
		footer : "test footer",
		icon: "users activity widget picture.png"
	}	
}
```

```
myWidgets
```

keep the key of selected widgets to display on the dashboard
```
{
   [2] : "UserActivity"  //set the "UserActivity widget, on the 2nd area of dashboard"
}
```


```
myWidgetsSetting
```
customize setting for all widgets
```
{
  "UserActivity" : {
  		"numberOfUser" : 5,
  		"activity" : "DESC"
  }
}
```

## How To Install

To set up the environment dependencies ( node version 5++ )

```
$ npm install
```

To build the bundle

```
$ npm run build
```

To run the node server

```
$ npm run start
```

Server is listening to port `3000`
