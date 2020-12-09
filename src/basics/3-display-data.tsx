import React from 'react';
import ReactDOM from 'react-dom';

export interface DataScheme {
  when: string;
  who: string;
  description: string;
}

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

export const StaticDataComponent = function () {
  const newElement = data.map((row) => (
    <tr>
      <td>{row.when}</td>
      <td>{row.who}</td>
      <td>{row.description}</td>
    </tr>
  ));
  return (
    <table>
      <thead>
        <th>When</th>
        <th>Who</th>
        <th>Description</th>
      </thead>
      <tbody>{newElement}</tbody>
    </table>
  );
};
