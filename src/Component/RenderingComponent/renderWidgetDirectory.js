import React from 'react';

export default function RenderWidgetDirectory(props){
    const {navigations, widgets, myWidgets, selectedNav, selectWidget, children} = props;

    let displayedWidgets = navigations[0] && selectedNav.key === navigations[0].key ? widgets : 
    					  navigations[1] && selectedNav.key === navigations[1].key ? myWidgets :
    					    {};


    return (
		     <div className="row">
		         {
		         	navigations && navigations.length>0 ?
		         	 displayedWidgets && Object.keys(displayedWidgets).map((key)=>{
		         	 	let widget = displayedWidgets[key];
		         	 	if(!widget.key){
		         	 		widget = widgets[widget];
		         	 	}
		              return (
		              	<div className="col-xs-12" key={key}>
				            <div className="col-xs-2">
				                <img src={`/images/${widget.icon}`} />
				            </div>
				        
				            <div className="col-xs-8">
				               {React.cloneElement(children ? children : <div />,{widget:widget})}
				            	{/*
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
				                  */}
				            </div>

				            <div className="col-xs-2">
				             	<div className="btn btn-primary" onClick={()=>{selectWidget(widget)}}>{selectedNav.contentItemText}</div>
				            </div>
				        </div>)
		             })
		         	

				     : <div className="col-xs-12" >EMPTY</div>
		         }
		        
		      
		    </div>
      )
}