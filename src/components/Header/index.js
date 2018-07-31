import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Select from 'react-select';
import { Container, Repository } from './styles';

const filterOptions = [
  {
    value: 'all',
    label: 'Todas',
  },
  {
    value: 'open',
    label: 'Abertas',
  },
  {
    value: 'closed',
    label: 'Fechadas',
  },
];

export default class Header extends Component {
  static propTypes = {
    currentRepository: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      owner: PropTypes.shape({
        login: PropTypes.string,
        avatar_url: PropTypes.string,
      }),
    }),
    loadingIssues: PropTypes.bool.isRequired,
    onClickFilter: PropTypes.func.isRequired,
  };

  static defaultProps = {
    currentRepository: {},
  };

  state = {
    selectedOption: filterOptions[0],
  };

  render() {
    const { currentRepository, loadingIssues, onClickFilter } = this.props;
    const { selectedOption } = this.state;

    return (
      <Container>
        {currentRepository && (
          <Fragment>
            <Repository>
              <img src={currentRepository.owner.avatar_url} alt={currentRepository.owner.login} />
              <div className="detail">
                <strong>{currentRepository.name}</strong>
                <small>{currentRepository.owner.login}</small>
              </div>
            </Repository>

            {loadingIssues && <i className="fa fa-spinner fa-pulse" />}

            <Select
              className="react-select-container"
              classNamePrefix="react-select"
              isSearchable={false}
              value={selectedOption}
              onChange={(selected) => {
                this.setState({ selectedOption: selected });
                onClickFilter(selected.value);
              }}
              options={filterOptions}
            />
          </Fragment>
        )}
      </Container>
    );
  }
}
