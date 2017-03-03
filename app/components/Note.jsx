import React from 'React';


export default ({children, ...props}) => (
  <div {...props}>
    {children}
  </div>
);
