import React from 'react';
import FontAwesome from 'react-fontawesome'

export default class Service extends React.Component {
  render() {
    return (
      <tr data-service={this.props.data.service}>
        <td>{this.props.data.service}</td>
        <td>{this.props.data.image}</td>
        <td>{this.props.data.container_name}</td>
        <td>{this.props.data.status}</td>
        <td>
          <FontAwesome name="play" title="Start" onClick={this.props.containerAction.bind(this, 'start', this.props.data.service)}/>
          <FontAwesome name="stop" title="Stop" onClick={this.props.containerAction.bind(this, 'stop', this.props.data.service)}/>
        </td>
      </tr>
    )
  }
}
