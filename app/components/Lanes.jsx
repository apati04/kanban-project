import React from 'react';
import Lane from './Lane';

const Lanes = ({ lanes }) => (
  <div className="lanes">
    {lanes.map((lane) => (
      <Lane className="card bg-light mb-3 lane" key={lane.id} lane={lane} />
    ))}
  </div>
);
Lanes.propTypes = {
  lanes : React.PropTypes.array
};
Lanes.defaultProps = {
  lanes : []
};

export default Lanes;
