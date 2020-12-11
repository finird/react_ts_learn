import React, { CSSProperties, ReactPropTypes } from 'react';
import './5-namespaced-components.css';
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

const NamespacedComponent = function () {
  const heads = Object.keys(data[0]);
  return (
    <div>
      <h2>Namespaced Components</h2>
      <RecentChangesTable>
        <Headings headings={heads} />
        <Body changesSetList={data} />
      </RecentChangesTable>
    </div>
  );
};

const RecentChangesTable: React.FunctionComponent = ({ children }) => (
  <table cellPadding={'4px'} className='table'>
    {children}
  </table>
);

const Headings: React.FunctionComponent<{ headings: string[] }> = ({
  headings,
}) => {
  const transpliesComponent = headings.map((h, i) => (
    <Heading heading={h} key={i} />
  ));
  console.log(transpliesComponent);

  return (
    <thead className='tableHeading'>
      <tr>{transpliesComponent}</tr>
    </thead>
  );
};

const Heading = ({
  heading,
  key,
}: {
  heading: string;
  key?: number | string;
}) => <th key={key}>{heading.toUpperCase()}</th>;

class Body extends React.Component<{ changesSetList: DataScheme[] }> {
  transpliesComponent = this.props.changesSetList.map((set, idx) => (
    <Row changesSet={set} key={idx} />
  ));

  render() {
    return <tbody className='tableBody'>{this.transpliesComponent}</tbody>;
  }
}

class Row extends React.Component<{
  changesSet: DataScheme;
  key?: number | string;
}> {
  render() {
    return (
      <tr key={this.props.key}>
        <td>{this.props.changesSet.when}</td>
        <td>{this.props.changesSet.who}</td>
        <td>{this.props.changesSet.description}</td>
      </tr>
    );
  }
}

export default Object.assign(NamespacedComponent, {
  Headings,
  Body,
});
