import styled from 'styled-components';

export const Container = styled.header`
  min-height: 100px;
  max-height: 100px;
  padding: 30px;
  display: flex;
  background: #fff;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
  align-items: center;
  justify-content: space-between;

  .react-select-container {
    width: 215px;
    padding: 0;

    .react-select__control {
      height: 42px;
      background-color: #fff;
      border-color: #ddd;
      box-shadow: none;
    }

    .react-select__control:hover {
      border-color: #ddd;
      box-shadow: none;
    }

    .react-select__value-container {
      padding: 2px 17px;
    }

    .react-select__indicator {
      padding: 15px;
    }

    .react-select__single-value {
      font-size: 15px;
      color: #999;
    }

    .react-select__indicator-separator {
      background-color: #fff;
    }

    .react-select__option {
      font-size: 15px;
      color: #999;
    }

    .react-select__option--is-focused {
      background-color: rgba(178, 134, 209, 0.2);
    }

    .react-select__option--is-selected {
      background-color: #b286d1;
      color: #fff;
    }
  }
`;

export const Repository = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 45px;
    height: 45px;
  }

  .detail {
    margin-left: 10px;
    display: flex;
    flex-direction: column;

    strong {
      font-size: 16px;
      color: #333;
    }

    small {
      margin-top: 4px;
      font-size: 12px;
      color: #999;
    }
  }
`;
