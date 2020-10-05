import React from 'react';
import Service from './Service'

export default class ServiceList extends React.Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Service</th>
            <th>Image</th>
            <th>Container</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.props.status.map(s => <Service key={s.service} data={s} containerAction={this.props.containerAction}/>)}
        </tbody>
      </table>
    )
  }
}
