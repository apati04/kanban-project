import LaneActions from '../actions/LaneActions';

export default class LaneStore {
  constructor(){
    this.bindActions(LaneActions);
    this.lanes = [];
  }
  create(lane) {
    // if notes are not provided, default to empty array
    lane.notes = lane.notes || [];
    this.setState({
      lanes: this.lanes.concat(lane)
    })
  }
}
