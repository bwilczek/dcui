import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoadingScreen from './LoadingScreen';
import ServiceList from './ServiceList';
const axios = require('axios')

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingMessage: 'Initializing...',
      status: {},
      selectedEnvironment: '__all'
    };
  }

  componentDidMount() {
    this.fetchStatus()
  }

  async fetchStatus() {
    try {
      this.setState(state => ({...state, loadingMessage: 'Fetching status...'}))
      const response = await axios.get('/api/status');
      this.setState(state => ({...state, loadingMessage: null, status: response.data}))
    } catch (error) {
      this.setState(state => ({...state, loadingMessage: null}))
      console.error(error);
    }
  }

  async containerAction(action, services) {
    try {
      this.setState(state => ({...state, loadingMessage: `Executing action "${action}" on services: ${services.join(',')}`}))
      await axios.post(`/api/container/${services.join(',')}/${action}`);
      this.fetchStatus();
    } catch (error) {
      this.setState(state => ({...state, loadingMessage: null}))
      console.error(error);
    }
  }

  setSelectedEnvironment(newEnv) {
    this.setState(state => ({...state, selectedEnvironment: newEnv}))
  }

  render() {
    return (
      <div className="App">
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
        { (this.state.loadingMessage !== null) ?
          <LoadingScreen loadingMessage={this.state.loadingMessage}/> :
          <ServiceList services={this.state.status.services}
                       environments={this.state.status.environments}
                       selectedEnvironment={this.state.selectedEnvironment}
                       setSelectedEnvironment={this.setSelectedEnvironment.bind(this)}
                       containerAction={this.containerAction.bind(this)} />
        }
      </div>
    );
  }
}
