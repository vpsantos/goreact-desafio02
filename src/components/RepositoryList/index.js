import React from 'react';
import PropTypes from 'prop-types';

import { Container, Repository } from './styles';

const RepositoryList = ({ repositories, onClickRepository }) => (
  <Container>
    {repositories.map(repository => (
      <Repository key={repository.id}>
        <a href="#" onClick={e => onClickRepository(e, repository)}>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <div className="detail">
            <strong>{repository.name}</strong>
            <small>{repository.owner.login}</small>
          </div>
          <i className="fa fa-angle-right" />
        </a>
      </Repository>
    ))}
  </Container>
);

RepositoryList.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      owner: PropTypes.shape({
        login: PropTypes.string,
        avatar_url: PropTypes.string,
      }),
    }),
  ).isRequired,
  onClickRepository: PropTypes.func.isRequired,
};

export default RepositoryList;
