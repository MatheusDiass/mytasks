import styled, { css } from 'styled-components';

export const Input = styled.input`
  ${({ theme }) => css`
    background-color: ${theme.colors.backgroundPrimary};
    border: ${theme.border.size.none};
    border-radius: ${theme.border.radius.sm};
    box-sizing: border-box;
    color: ${theme.colors.textPrimary};
    font-size: ${theme.typography.sizes.md};
    width: 250px;
    height: 35px;
    padding-right: ${theme.spacing.sm};
    padding-left: ${theme.spacing.sm};
    outline: ${theme.border.size.none};

    &:focus {
      border: ${theme.border.size.sm} solid ${theme.colors.border};
    }
  `}
`;
