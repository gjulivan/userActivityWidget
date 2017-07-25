import React from 'react';

export default function RenderEmptyArea(props){
	const {canDrop, isOver} = props;
    return (
      <div className="empty-widget">
      	<span>
     	{
     		canDrop ? isOver ? "Release to Drop" : "Drop Here" : "Empty Area"
     	}
     	</span>
      </div>
      )
}