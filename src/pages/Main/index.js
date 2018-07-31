import React, { Component } from 'react';
import api from '../../services/api';

import { Container, Content, InternalContent } from './styles';

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import IssueList from '../../components/IssueList';

export default class Main extends Component {
  state = {
    currentRepository: null,
    loadingIssues: false,
    issuesError: false,
    issues: [],
    issueFilter: 'all',
  };

  loadIssues = async (issueFilter, currentRepository) => {
    try {
      const { data: issues } = await api.get(
        `/repos/${currentRepository.owner.login}/${
          currentRepository.name
        }/issues?state=${issueFilter}`,
      );

      this.setState({
        issues,
        issuesError: false,
      });
    } catch (err) {
      this.setState({ issuesError: true });
    } finally {
      this.setState({ loadingIssues: false });
    }
  };

  handleClickRepository = async (e, currentRepository) => {
    e.preventDefault();

    this.setState({ loadingIssues: true, currentRepository });
    const { issueFilter } = this.state;

    this.loadIssues(issueFilter, currentRepository);
  };

  handleClickFilter = (issueFilter) => {
    const { currentRepository } = this.state;

    this.setState({ loadingIssues: true, issueFilter });
    this.loadIssues(issueFilter, currentRepository);
  };

  render() {
    const {
      currentRepository, loadingIssues, issues, issuesError,
    } = this.state;

    return (
      <Container>
        <Sidebar onClickRepository={this.handleClickRepository} />

        <Content>
          <Header
            currentRepository={currentRepository}
            loadingIssues={loadingIssues}
            onClickFilter={this.handleClickFilter}
          />

          <InternalContent>
            {issuesError ? <span>Erro ao carregar issues</span> : <IssueList issues={issues} />}
          </InternalContent>
        </Content>
      </Container>
    );
  }
}
