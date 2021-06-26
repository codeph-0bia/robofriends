import React from 'react';

const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: 'scroll',
        overflowX: 'hidden',
        border: '5px solid black',
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
