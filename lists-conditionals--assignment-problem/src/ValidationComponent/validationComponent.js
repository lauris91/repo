import React from 'react';

const validationComponent = (props) => {

    if(props.lenght === 0){
      return null;
    }

    if(props.lenght <= 5){
      return <p>Text too short</p>
    } else {
      return <p>Text long enough</p>
    }

}

export default validationComponent;
