import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.buttonPrimary};
    border: ${theme.border.size.none};
    border-radius: ${theme.border.radius.sm};
    box-sizing: border-box;
    color: ${theme.colors.textPrimary};
    font-size: ${theme.typography.sizes.md};
    font-weight: 600;
    width: 320px;
    height: 54px;
  `}
`;
