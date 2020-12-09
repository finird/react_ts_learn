import React from 'react';
import ReactDOM from 'react-dom';
import { BasicComponent } from './basics/2-first-component';
import { DataScheme, StaticDataComponent } from './basics/3-display-data';
import { PassingDataComponent } from './basics/4-passing-data';

const data: DataScheme[] = [
  {
    when: '2 minutes ago',
    who: 'Jill Dupre',
    description: 'Created new account',
  },
  {
    when: '1 hour ago',
    who: 'Lose White',
    description: 'Added fist chapter',
  },
  {
    when: '2 hours ago',
    who: 'Jordan Whash',
    description: 'Created new account',
  },
];

ReactDOM.render(
  <div>
    {React.createElement(BasicComponent)}
    <br />
    <StaticDataComponent />
    <br />
    <PassingDataComponent title='Passing data' data={data} />
  </div>,
  document.body
);
