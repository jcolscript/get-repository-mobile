import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ActivityIndicator } from 'react-native';

import api from '../../services/api';

import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  Repos,
  Repo,
  RepoName,
  Info,
  HeaderRepo,
} from './styles';

export default class User extends Component {
  static propTypes = {
    route: PropTypes.shape({
      params: PropTypes.shape({
        user: PropTypes.shape().isRequired,
      }).isRequired,
    }).isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    repos: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const { route } = this.props;
    const { user } = route.params;

    const response = await api.get(`/users/${user.login}/repos`);

    this.setState({ repos: response.data, loading: false });
  }

  handleNavigate = (repository) => {
    const { navigation } = this.props;

    navigation.navigate('Repo', { repository });
  };

  render() {
    const { repos, loading } = this.state;
    const { route } = this.props;
    const { user } = route.params;

    return (
      <Container>
        <Header>
          <Avatar source={{ uri: user.avatar }} />
          <Name>{user.name}</Name>
          {user.bio && <Bio>{user.bio}</Bio>}
        </Header>

        {loading ? (
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
        ) : (
          <Repos
            data={repos}
            keyExtractor={(repo) => String(repo.id)}
            renderItem={({ item }) => (
              <Repo>
                <HeaderRepo>
                  <Icon name="collections-bookmark" size={20} color="#5063f0" />
                  <RepoName onPress={() => this.handleNavigate(item)}>
                    {item.name}
                  </RepoName>
                </HeaderRepo>
                <Info>{item.description}</Info>
              </Repo>
            )}
          />
        )}
      </Container>
    );
  }
}
