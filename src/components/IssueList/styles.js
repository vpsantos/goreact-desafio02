import styled from 'styled-components';

export const Container = styled.div`
  min-width: 0;
  min-height: 0;
  padding: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;

export const Issue = styled.div`
  min-width: 0;
  height: 114px;
  padding: 20px;
  background: #fff;
  border-radius: 3px;
  display: flex;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden; /* NEW */

  img {
    width: 64px;
    height: 64px;
    border-radius: 32px;
  }

  .detail {
    min-width: 100px;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    flex: 1;

    strong {
      /* width: 200px; */
      /* display: flex; */
      /* flex: 1; */
      font-size: 16px;
      color: #333;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    small {
      margin-top: 4px;
      font-size: 12px;
      color: #999;
    }

    .button {
      width: 128px;
      height: 29px;
      margin-top: 8px;
      background: #b286d1;
      color: #fff;
      border-radius: 3px;
      font-size: 12px;
      font-weight: bold;
      text-decoration: none;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      &:hover {
        background: #9e83d1;
      }

      i {
        padding-right: 6px;
        font-size: 14px;
      }
    }
  }
`;
