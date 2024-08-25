import styled, { css } from 'styled-components';

export const Icon = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.icon};
    display: flex;
    align-items: center;
    height: 15px;
    width: 15px;
  `}
`;
