import styled, { css } from 'styled-components';

export const Form = styled.form`
  ${() => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: inline-block;
    margin-bottom: ${theme.spacing.md};
  `}
`;

export const WrapperLeftIcon = styled.div`
  ${({ theme }) => css`
    position: absolute;
    left: ${theme.spacing.sm};
    top: 50%;
    transform: translateY(-50%);
  `}
`;

export const WrapperRightIcon = styled.div`
  ${({ theme }) => css`
    position: absolute;
    right: ${theme.spacing.sm};
    top: 50%;
    transform: translateY(-50%);
  `}
`;
