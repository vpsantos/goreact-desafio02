import styled from 'styled-components';

export const Container = styled.ul`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  list-style: none;
`;

export const Repository = styled.li`
  margin-bottom: 20px;

  a {
    display: flex;
    text-decoration: none;
    align-items: center;

    &:hover i {
      color: #999;
    }

    img {
      width: 45px;
      height: 45px;
    }

    .detail {
      margin-left: 10px;
      display: flex;
      flex-direction: column;
      flex: 1;

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

    i {
      font-size: 20px;
      color: #ccc;
    }
  }
`;
