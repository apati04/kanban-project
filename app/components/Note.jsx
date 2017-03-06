import React from 'react';
import { DragSource, DropTarget } from 'react-dnd';
import { compose } from 'redux';
import ItemTypes from '../constants/ItemTypes';

const Note = ({ connectDropTarget, connectDragSource, onMove, id, children, ...props }) => {
  return compose(connectDragSource, connectDropTarget)(
    <div {...props}>
      { children }
    </div>
  );
}
const noteSource = {
  beginDrag(props) {
    return {
      id: props.id
    };
  }
};

const noteTarget = {
  hover(targetProps, monitor) {
    const targetId = targetProps.id;
    const sourceProps = monitor.getItem();
    const sourceId = sourceProps.id;
    if(sourceId !== targetId){
      targetProps.onMove({sourceId, targetId});
    }
  }
}
export default compose(
  DragSource(ItemTypes.NOTE, noteSource, connect => ({
  connectDragSource: connect.dragSource()
})),
  DropTarget(ItemTypes.NOTE, noteTarget, connect => ({
    connectDropTarget: connect.dropTarget()
  }))
)(Note);
