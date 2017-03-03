import React, {Component} from 'react';


const Editable = ({editing, value, onEdit}) => {
  if(editing) {
    return <Editable.Edit value={value} onEdit={onEdit} />;
  }
  return <Editable.Value value={value} />;
};
Editable.Value = ({value, ...props}) => <span {...props}>{value}</span>;

class Edit extends Component {
  render(){
    const {value, onEdit, ...props} = this.props;
    return (
      <input
        type="text"
        autoFocus={true}
        defaultValue={value}
        onBlur={this.finishEdit}
        onKeyPress={this.checkEnter}
        {...props} />
    )
  }
  checkEnter = (e) => {
    if(e.key === 'Enter')
      this.finishEdit(e);
  }
  finishEdit = (e) => {
    const value = e.target.value;
    if(this.props.onEdit) {
      this.props.onEdit(value);
    }
  }

}
Editable.Edit= Edit;

export default Editable;
