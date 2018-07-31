import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-height: 100%;
  height: auto !important;
  height: 100%; /*for IE*/
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const InternalContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
