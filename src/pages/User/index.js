import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
  };

  async componentDidMount() {
    const { route } = this.props;
    const { user } = route.params;

    const response = await api.get(`/users/${user.login}/repos`);

    this.setState({ repos: response.data });
  }

  render() {
    const { repos } = this.state;
    const { route } = this.props;
    const { user } = route.params;

    return (
      <Container>
        <Header>
          <Avatar source={{ uri: user.avatar }} />
          <Name>{user.name}</Name>
          {user.bio && <Bio>{user.bio}</Bio>}
        </Header>

        <Repos
          data={repos}
          keyExtractor={(repo) => String(repo.id)}
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
      </Container>
    );
  }
}
