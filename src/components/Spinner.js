import React from 'react';
import spinner from './images/spinner.gif';

const Spinner = () => {
  return (
    <div>
      <div className="text-center">
        <img src={spinner} alt={"loading"} style={{width : "100px"}} />
      </div>
    </div>
  );
};

export default Spinner;