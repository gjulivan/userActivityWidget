import React, {Component} from 'react';
import PropTypes from 'prop-types'; 

export default function RenderWidget(props){
	const {isDragging , widget, setting, selectedView, selectView, selectMenu,
		availableViews, availableMenus} = props;
    return (
		    <div className="filled-widget">
		      <div className="row title">
		           <span> {widget.title}</span>
		           <div className="pull-right">
		              <div className="btn-group">
		                <button className="btn btn-default dropdown-toggle" 
		                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		                  {selectedView} <span className="caret"></span>
		                </button>
		                <ul className="dropdown-menu">
		                {
		                  availableViews.map((view,idx)=>{
		                    return ( <li key={`view_${idx}`}><a onClick={()=>selectView(view)}>{view}</a></li> )
		                  })
		                }
		                </ul>
		              </div>
		              <div className="btn-group">
		                    <div className="three-dots btn" data-toggle="dropdown"></div>
		                    <ul className="dropdown-menu">
		                    {
		                       availableMenus.map((menu,idx)=>{
		                          return ( <li key={menu.key}><a onClick={()=>selectMenu(menu)}>{menu.label}</a></li> )
		                        })
		                    }
		                    </ul>
		              </div>
		           </div> {/* end of button group */}
		        </div>
		        <div className="row body">
		            {React.cloneElement(widget.content,{selectedView: selectedView, setting:setting})}
		        </div>
		        { false &&
			        <div className="row footer">
			            {widget.footer}
			        </div>
		        }
		        
		     </div>
      )
}