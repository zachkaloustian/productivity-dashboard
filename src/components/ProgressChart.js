import React from 'react';

const ProgressChart = ({ progress }) => {
  return (
    <div className="progress-chart">
      <svg width="120" height="120" viewBox="0 0 120 120">
        <circle cx="60" cy="60" r="50" stroke="#ddd" strokeWidth="10" fill="none" />
        <circle
          cx="60"
          cy="60"
          r="50"
          stroke="#007bff"
          strokeWidth="10"
          fill="none"
          strokeDasharray={`${progress * 3.14 * 2}, 314`}
          strokeDashoffset="25"
          transform="rotate(-90 60 60)"
        />
      </svg>
      <p>{progress.toFixed(0)}% Complete</p>
    </div>
  );
};

export default ProgressChart;
