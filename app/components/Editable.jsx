import React, { Component } from 'react';
import classnames from 'classnames';

export default ({ editing, value, onEdit, className, ...props }) => {
  if (editing) {
    return (
      <Edit className={className} value={value} onEdit={onEdit} {...props} />
    );
  }
  return (
    <span className={classnames('value', className)} {...props}>
      {value}
    </span>
  );
};

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value : ''
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    this.setState({
      value : e.target.value
    });
  }
  render() {
    const { className, value, onEdit, ...props } = this.props;
    return (
      <div style={{ opacity: 0.6 }} className="bg-light rounded m-0 p-1">
        <input
          type="text"
          className={classnames('edit form-control', className)}
          autoFocus={true}
          defaultValue={value}
          onBlur={this.finishEdit}
          onChange={this.onInputChange}
          onKeyPress={this.checkEnter}
          {...props}
          value={this.state.value}
          placeholder="Edit title..."
        />
      </div>
    );
  }
  checkEnter = (e) => {
    if (e.key === 'Enter') this.finishEdit(e);
  };
  finishEdit = (e) => {
    const value = e.target.value;
    if (this.props.onEdit) {
      this.props.onEdit(value);
    }
  };
}
// Editable.Edit= Edit;
//
// export Editable;
