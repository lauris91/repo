import React from 'react';
import './charComponent.css'

const charComponent = (props) => {
  return (
    <div
      className='charDiv'
      onClick={props.clicked}
    >
      {props.value}
    </div>
  );
}

export default charComponent;
