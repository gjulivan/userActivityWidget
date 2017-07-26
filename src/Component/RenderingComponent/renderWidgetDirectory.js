import React from 'react';

export default function RenderWidgetDirectory(props){
    const {navigations, widgets, myWidgets, selectedNav, selectWidget, children} = props;

    let displayedWidgets = navigations[0] && selectedNav.key === navigations[0].key ? widgets : 
    					  navigations[1] && selectedNav.key === navigations[1].key ? myWidgets :
    					    {};


    return (
		     <div className="row wrapper">
		         {
		         	navigations && navigations.length>0 ?
		         	 displayedWidgets && Object.keys(displayedWidgets).map((key)=>{
		         	 	let widget = displayedWidgets[key];
		         	 	let disabled = false;
		         	 	if(!widget.key){ //if my widget
		         	 		widget = widgets[widget];
		         	 	}
		         	 	else{ //if already added, disabled the add widget button
		         	 		disabled = Object.keys(myWidgets).filter((k)=>myWidgets[k]===widget.key).length >0;
		         	 	}
		              return (
		              	<div className="col-xs-12" key={key}>
				            <div className="col-xs-2">
				                <img src={`/images/${widget.icon}`} />
				            </div>
				        
				            <div className="col-xs-7 item-detail">
				               {React.cloneElement(children ? children : <div />,{widget:widget})}
				            </div>

				            <div className="col-xs-3">
				             	<div className={`btn btn-${selectedNav.key} ${disabled ? "disabled" : ""}`} onClick={()=>{selectWidget(widget)}}>
				             	 <span className={`content-icon ${selectedNav.key} pull-left`}></span>
				             				{selectedNav.contentItemText}
				                </div>
				            </div>
				        </div>)
		             })
		         	

				     : <div className="col-xs-12" >EMPTY</div>
		         }
		        
		      
		    </div>
      )
}