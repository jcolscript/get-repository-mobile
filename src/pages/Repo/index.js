import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { WebView } from 'react-native-webview';

class Repo extends Component {
  static propTypes = {
    route: PropTypes.shape({
      params: PropTypes.shape({
        repository: PropTypes.shape().isRequired,
      }).isRequired,
    }).isRequired,
  };

  state = {};

  render() {
    const { route } = this.props;
    const { repository } = route.params;

    return (
      <WebView source={{ uri: repository.html_url }} style={{ flex: 1 }} />
    );
  }
}

export default Repo;
