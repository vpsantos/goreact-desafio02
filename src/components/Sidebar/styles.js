import styled from 'styled-components';

export const Container = styled.div`
  width: 320px;
  padding: 30px;
  display: flex;
  align-self: stretch;
  flex-direction: column;
  background: #fff;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

export const Form = styled.form`
  width: 100%;
  padding-bottom: 20px;
  display: flex;
  border-bottom: 1px solid #eee;

  input {
    width: 200px;
    height: 48px;
    padding: 0 20px;
    background: #eee;
    border: ${({ withError }) => (withError ? '1px solid #f00' : '0')};
    font-size: 15px;
    color: ${({ withError }) => (withError ? '#f00' : '#999')};
    border-radius: 3px;
    letter-spacing: -0.2px;
    display: flex;
    flex: 1;
  }

  button {
    width: 50px;
    height: 48px;
    margin-left: 10px;
    background: #59ea9a;
    color: #fff;
    border: 0;
    font-size: 20px;
    font-weight: bold;
    border-radius: 3px;

    &:hover {
      background: #52d89f;
    }
  }
`;
