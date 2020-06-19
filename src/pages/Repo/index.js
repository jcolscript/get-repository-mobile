import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { WebView } from 'react-native-webview';
import { View, ActivityIndicator } from 'react-native';

class Repo extends Component {
  static propTypes = {
    route: PropTypes.shape({
      params: PropTypes.shape({
        repository: PropTypes.shape().isRequired,
      }).isRequired,
    }).isRequired,
  };

  state = {};

  // eslint-disable-next-line class-methods-use-this
  displaySpinner() {
    return (
      <View
        style={{
          height: '100%',
        }}
      >
        <ActivityIndicator
          color="#5063f0"
          size="large"
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
      </View>
    );
  }

  render() {
    const { route } = this.props;
    const { repository } = route.params;

    return (
      <WebView
        startInLoadingState
        renderLoading={() => {
          return this.displaySpinner();
        }}
        source={{ uri: repository.html_url }}
        style={{ flex: 1 }}
      />
    );
  }
}

export default Repo;
