import React, { Component } from 'react';

import PropTypes from 'prop-types';

import api from '../../services/api';

import { Container, Form } from './styles';

import RepositoryList from '../RepositoryList';

export default class Sidebar extends Component {
  static propTypes = {
    onClickRepository: PropTypes.func.isRequired,
  };

  state = {
    repositoryInput: '',
    repositoryError: false,
    loadingRepository: false,
    repositories: [],
  };

  checkRepoExists = (inputValue) => {
    const { repositories } = this.state;
    const values = inputValue.split('/');
    const login = values[0];
    const name = values[1];
    const repos = repositories.filter(item => item.owner.login === login && item.name === name);

    return !!repos.length;
  };

  handleAddRepository = async (e) => {
    e.preventDefault();

    const { repositoryInput } = this.state;

    if (repositoryInput.length === 0 || this.checkRepoExists(repositoryInput)) {
      this.setState({ repositoryError: true });
      return;
    }

    this.setState({ loadingRepository: true });

    try {
      const { data: repository } = await api.get(`/repos/${repositoryInput}`);
      const { repositories } = this.state;

      this.state.repositories = [
        ...repositories,
        {
          id: repository.id,
          name: repository.name,
          owner: {
            avatar_url: repository.owner.avatar_url,
            login: repository.owner.login,
          },
        },
      ];

      this.setState({
        repositoryInput: '',
        repositoryError: false,
      });
    } catch (err) {
      this.setState({ repositoryError: true });
    } finally {
      this.setState({ loadingRepository: false });
    }
  };

  render() {
    const { onClickRepository } = this.props;
    const {
      repositories, repositoryError, repositoryInput, loadingRepository,
    } = this.state;

    return (
      <Container>
        <Form withError={repositoryError} onSubmit={this.handleAddRepository}>
          <input
            type="text"
            placeholder="Novo repositório"
            value={repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">
            {loadingRepository ? (
              <i className="fa fa-spinner fa-pulse" />
            ) : (
              <i className="fa fa-plus-circle" />
            )}
          </button>
        </Form>

        <RepositoryList repositories={repositories} onClickRepository={onClickRepository} />
      </Container>
    );
  }
}
