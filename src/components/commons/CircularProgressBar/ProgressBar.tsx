import * as React from 'react';

const ProgressBar = () => {
  return (
    <div className="circle-wrap">
      <div className="circle">
        <div className="mask full">
          <div className="fill"></div>
        </div>
        <div className="mask half">
          <div className="fill"></div>
        </div>
        <div className="inside-circle">4.3/5<br/>km</div>
      </div>
    </div>
  );
};

export default ProgressBar;