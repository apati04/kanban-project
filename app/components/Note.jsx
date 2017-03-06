import React from 'react';
import { DragSource, DropTarget } from 'react-dnd';
import { compose } from 'redux';
import ItemTypes from '../constants/ItemTypes';

const Note = ({ connectDropTarget, connectDragSource, children, ...props }) => {
  return compose(connectDragSource, connectDropTarget)(
    <div {...props}>
      { children }
    </div>
  );
}
const noteSource = {
  beginDrag(props) {
    console.log('begin note drag', props);
    return {};
  }
};

const noteTarget = {
  hover(targetProps, monitor) {
    const sourceProps = monitor.getItem();
    console.log('dragging note', sourceProps, targetProps);
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
