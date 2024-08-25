import styled, { css } from 'styled-components';
import { Sizes } from './types';

export const Icon = styled.div<{ size: Sizes }>`
  ${({ theme, size }) => css`
    color: ${theme.colors.icon};
    display: flex;
    align-items: center;
    height: ${size ? theme.icon.sizes[size] : theme.icon.sizes.sm};
    width: ${size ? theme.icon.sizes[size] : theme.icon.sizes.sm};
  `}
`;
