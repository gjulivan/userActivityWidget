
import React from 'react';

export default function RenderWidgetItem(props){
	const {widget} = props;

	return (
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
		)
}