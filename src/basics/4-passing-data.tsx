import { render } from '@testing-library/react';
import React from 'react';
import { DataScheme } from './3-display-data';

type PropsScheme = {
  headings: string[];
  title: string;
  data: DataScheme[];
};

type StateScheme = {
  count: number;
};

export class PassingDataComponent extends React.Component<
  PropsScheme,
  StateScheme
> {
  state: StateScheme = {
    count: 0,
  };

  public render() {
    return (
      <div>
        <h2>4 - {this.props.title}</h2>
        <h3>{this.state.count}</h3>
        <table>
          <Headings headings={this.props.headings} />
          <Body changesSet={this.props.data} />
        </table>
      </div>
    );
  }
}

function Heading({ heading }: { heading: string }) {
  return <th>{heading.toUpperCase()}</th>;
}

function Headings({ headings }: { headings: string[] }) {
  const transpiledComponents = headings.map((h) => <Heading heading={h} />);
  return (
    <thead>
      <tr>{transpiledComponents}</tr>
    </thead>
  );
}

class Row extends React.Component<{ changeSet: DataScheme }> {
  render() {
    return (
      <tr>
        <td>{this.props.changeSet.when}</td>
        <td>{this.props.changeSet.who.toUpperCase()}</td>
        <td>{this.props.changeSet.description}</td>
      </tr>
    );
  }
}

class Body extends React.Component<{ changesSet: DataScheme[] }> {
  render() {
    const transpliedChangesSet = this.props.changesSet.map((set) => (
      <Row changeSet={set} />
    ));

    return <tbody>{transpliedChangesSet}</tbody>;
  }
}
