import React from 'react';

export default class LoadingScreen extends React.Component {
  render() {
    // TODO: make it full screen, blocking the UX
    return (
      <div id="loading">{this.props.loadingMessage}</div>
    )
  }
}
