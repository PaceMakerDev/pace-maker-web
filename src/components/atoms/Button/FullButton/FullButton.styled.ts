import styled, { css } from 'styled-components';
import { PRIME_COLOR_CODE, PRIME_HOVER_COLOR_CODE } from 'common/constants';

export const StyledFullButton = styled.button<{ fontSize?: string; theme?: 'prime' | 'white' }>`
  width: 100%;
  padding: 0.8em 0;
  border: none;
  border-radius: 10px;
  background-color: #ccc;
  font-weight: 700;
  font-size: ${props => props.fontSize || '0.875rem'};
  cursor: pointer;

  ${props =>
    props.theme === 'prime' &&
    css`
      background-color: ${PRIME_COLOR_CODE};
      color: #fff;

      &:hover {
        background-color: ${PRIME_HOVER_COLOR_CODE};
      }
    `}

  ${props =>
    props.theme === 'white' &&
    css`
      background-color: #fff;
      color: ${PRIME_COLOR_CODE};

      &:hover {
        background-color: #efefef;
      }
    `}
`;
