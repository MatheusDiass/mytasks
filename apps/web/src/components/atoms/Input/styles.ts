import styled, { css } from 'styled-components';
import { StyleProps } from './types';

export const Input = styled.input<StyleProps>`
  ${({ theme, $hasLeftIcon, $hasRightIcon }) => css`
    background-color: ${theme.colors.backgroundPrimary};
    border: ${theme.border.size.none};
    border-radius: ${theme.border.radius.sm};
    box-sizing: border-box;
    color: ${theme.colors.textPrimary};
    font-size: ${theme.typography.sizes.md};
    width: 320px;
    height: 54px;
    padding-left: ${$hasLeftIcon ? theme.spacing.xl : theme.spacing.sm};
    padding-right: ${$hasRightIcon ? theme.spacing.xl : theme.spacing.sm};
    outline: ${theme.border.size.none};

    &:focus {
      border: ${theme.border.size.sm} solid ${theme.colors.border};
    }
  `}
`;
