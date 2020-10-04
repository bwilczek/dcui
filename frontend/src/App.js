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
    this.fetchConfig()
  }

  async fetchConfig() {
    try {
      this.setState(state => ({...state, loading: true}))
      const response = await axios.get('/api/status');
      this.setState(state => ({...state, loading: false, status: response.data}))
    } catch (error) {
      this.setState(state => ({...state, loading: false}))
      console.error(error);
    }
  }

  render() {
    return (
      <div className="App">
        { this.state.loading ? <LoadingScreen /> : <ServiceList status={this.state.status} /> }
      </div>
    );
  }
}
