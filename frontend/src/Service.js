import React from 'react';

export default class Service extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.data.service}</td>
        <td>{this.props.data.image}</td>
        <td>{this.props.data.container_name}</td>
        <td>{this.props.data.status}</td>
      </tr>
    )
  }
}
