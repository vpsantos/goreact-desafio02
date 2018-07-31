import React from 'react';
import PropTypes from 'prop-types';

import { Container, Issue } from './styles';

const IssueList = ({ issues }) => (
  <Container>
    {issues.map(issue => (
      <Issue key={issue.id}>
        <img src={issue.user.avatar_url} alt={issue.user.login} />
        <div className="detail">
          <strong>{issue.title}</strong>
          <small>{issue.user.login}</small>
          <a className="button" href={issue.html_url} target="_blank" rel="noopener noreferrer">
            <i className="fa fa-external-link" />
            <span>ABRIR ISSUE</span>
          </a>
        </div>
      </Issue>
    ))}
  </Container>
);

IssueList.propTypes = {
  issues: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      user: PropTypes.shape({
        login: PropTypes.string,
        avatar_url: PropTypes.string,
      }),
      html_url: PropTypes.string,
    }),
  ).isRequired,
};

export default IssueList;
