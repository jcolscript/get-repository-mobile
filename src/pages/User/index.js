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
  };

  state = {
    repos: [],
    loading: false,
    page: 1,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const { route } = this.props;
    const { user } = route.params;

    const response = await api.get(`/users/${user.login}/repos`);

    this.setState({ repos: response.data, loading: false });
  }

  async loadMore() {
    let { page } = this.state;
    const { repos } = this.state;
    const { route } = this.props;
    const { user } = route.params;
    page += 1;

    const response = await api.get(`/users/${user.login}/repos?page=${page}`);

    this.setState({ repos: [...repos, response.data], page });
  }

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
          <ActivityIndicator color="#5063f0" />
        ) : (
          <Repos
            data={repos}
            keyExtractor={(repo) => String(repo.id)}
            onEndReachedThreshold={0.2}
            onEndReached={this.loadMore}
            renderItem={({ item }) => (
              <Repo>
                <HeaderRepo>
                  <Icon name="collections-bookmark" size={20} color="#5063f0" />
                  <RepoName>{item.name}</RepoName>
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
