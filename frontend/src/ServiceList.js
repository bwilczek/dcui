import React from 'react';
import Service from './Service'
import { Button, ButtonGroup } from 'react-bootstrap';

export default class ServiceList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedEnvironment: '__all'
    };
  }

  render() {
    const filterForCurrentEnv = (s) => {
      if(this.state.selectedEnvironment === '__all') {
        return true;
      }
      return this.props.environments[this.state.selectedEnvironment].includes(s.service)
    }

    const selectEnv = (e) => {
      e.persist();
      this.setState(state => (
        {...state, selectedEnvironment: e.target.getAttribute('data-environment')}
      ))
    }

    const startAll = (e) => {
      console.log("Starting:",this.props.services.filter(filterForCurrentEnv).map(s => s.service));
    }

    const stopAll = (e) => {
      console.log("Stopping:",this.props.services.filter(filterForCurrentEnv).map(s => s.service));
    }

    const environments = [
      <Button key='__all' data-environment='__all' variant="light" onClick={(e) => this.setState(state => ({...state, selectedEnvironment: '__all'}))}>ALL</Button>
    ];
    // FIXME: .keys() is not defined for this.props.environments
    for(let env in this.props.environments) {
      environments.push(<Button key={env} data-environment={env} variant="light" onClick={selectEnv}>{env}</Button>)
    }

    return (
      <div>
        <ButtonGroup>{environments}</ButtonGroup>
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
            {this.props.services.filter(filterForCurrentEnv).map(s => <Service key={s.service} data={s} containerAction={this.props.containerAction}/>)}
          </tbody>
        </table>
        <ButtonGroup>
          <Button onClick={startAll}>Start services</Button>
          <Button onClick={stopAll}>Stop services</Button>
        </ButtonGroup>
      </div>
    )
  }
}
