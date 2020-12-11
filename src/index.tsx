import React from 'react';
import ReactDOM from 'react-dom';
import { BasicComponent } from './basics/2-first-component';
import { DataScheme, StaticDataComponent } from './basics/3-display-data';
import { PassingDataComponent } from './basics/4-passing-data';
import NamespacedComponent from './basics/5-namespaced-components';

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

let headings = Object.keys(data[0]);

const title = 'Spread attrs';
let props = { headings, data, title };

ReactDOM.render(
  <div>
    {React.createElement(BasicComponent)}
    <br />
    <StaticDataComponent />
    <br />
    <PassingDataComponent
      headings={headings}
      title='Passing data'
      data={data}
    />
    <NamespacedComponent />
    <table>
      <NamespacedComponent.Headings headings={headings} />
    </table>

    {/* Spread */}
    <table>
      <PassingDataComponent {...props} />
    </table>
  </div>,
  document.body
);
