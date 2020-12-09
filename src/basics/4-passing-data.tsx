import React from 'react';
import { DataScheme } from './3-display-data';

type PropsScheme = {
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
          <tbody>{this.transferData()}</tbody>
        </table>
      </div>
    );
  }

  private transferData() {
    return this.props.data.map((row) => (
      <tr>
        <td>{row.when}</td>
        <td>{row.who}</td>
        <td>{row.description}</td>
      </tr>
    ));
  }
}
