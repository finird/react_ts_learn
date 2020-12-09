import React from 'react';
import ReactDOM from 'react-dom';
import { BasicComponent } from './basics/2-first-component';
import { StaticDataComponent } from './basics/3-display-data';

ReactDOM.render(
  <div>
    {React.createElement(BasicComponent)}
    <StaticDataComponent />
  </div>,
  document.body
);
