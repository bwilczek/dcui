import React from 'react';
import './App.css';
import LoadingScreen from './LoadingScreen';
import ServiceList from './ServiceList';
const axios = require('axios')

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      status: []
    };
  }

  componentDidMount() {
    this.fetchStatus()
  }

  async fetchStatus() {
    try {
      this.setState(state => ({...state, loading: true}))
      const response = await axios.get('/api/status');
      this.setState(state => ({...state, loading: false, status: response.data}))
    } catch (error) {
      this.setState(state => ({...state, loading: false}))
      console.error(error);
    }
  }

  async containerAction(action, service) {
    try {
      this.setState(state => ({...state, loading: true}))
      await axios.post(`/api/container/${service}/${action}`);
      this.fetchStatus();
    } catch (error) {
      this.setState(state => ({...state, loading: false}))
      console.error(error);
    }
  }

  render() {
    return (
      <div className="App">
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
        { this.state.loading ? <LoadingScreen /> : <ServiceList status={this.state.status.services} containerAction={this.containerAction.bind(this)}/> }
      </div>
    );
  }
}
