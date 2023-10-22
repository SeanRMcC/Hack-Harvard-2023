import React from 'react';

// Import your graph functions here
import { lineGraphDays30, lineGraphDays14, barGraphDays7, barGraphDays3 } from './GraphCalls.jsx';

const user_id = "e144abdc-3e66-4623-9afd-66f9ff8d0b7e";

function Graph() {
  return (
    <div className="graph-container">
      <div className="graph-item">
        {lineGraphDays30(user_id, 550, 550)}
      </div>
      <div className="graph-item">
        {lineGraphDays14(user_id, 550, 550)}
      </div>
      <div className="graph-item">
        {barGraphDays7(user_id, 550, 550)}
      </div>
      <div className="graph-item">
        {barGraphDays3(user_id, 550, 550)}
      </div>
    </div>
  );
}

export default Graph;
