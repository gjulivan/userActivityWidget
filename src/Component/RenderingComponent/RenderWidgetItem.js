
import React from 'react';

export function RenderWidgetItemDirectory(props){
	const {widget} = props;

	return (
		<div className="row">
            <div className="col-xs-12 title">
            {widget.title}
            </div>
            <div className="col-xs-12 author">
             By {widget.author}
            </div>
            <div className="col-xs-12">
            {widget.desc}
            </div>
         </div>
		)
}

export function RenderWidgetItemSelected(props){
    const {widget} = props;

    return (
        <div className="row">
            <div className="col-xs-12 title">
            {widget.title}
            </div>
            <div className="col-xs-12">
            {widget.desc}
            </div>
            <div className="col-xs-12 variables">
            <span> Variables: </span>
            {widget.variables && widget.variables.map((vary,idx)=>{
                return (<span className="label label-default" key={`variables_${idx}`}>{vary}</span>)
            })}
            </div>
         </div>
        )
}