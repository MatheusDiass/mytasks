import styled, { css } from 'styled-components';

export const PageTitle = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.textPrimary};
    font-size: ${theme.typography.sizes.xl};
    margin-bottom: ${theme.spacing.xl};
    font-weight: 500;
  `}
`;
