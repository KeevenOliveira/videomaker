import styled, { keyframes, css } from "styled-components";

const animation = keyframes`
    0%{
        stroke-width: 0;
        stroke-dasharray: 1 100;
        fill: transparent;
    }
    25%{
        stroke-width: 3;
        stroke-dasharray: 100 0;
        fill: transparent;
    }
    100%{
        stroke-width: 5;
        fill: #2000AC;
        stroke: #FAE22F;
    }
`;

interface ContainerProps {
  isVisible: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: absolute;
  width: 100%;
  top: 0;
  display: flex;
  justify-content: center;
  height: 100%;
  overflow: hidden;
  background-color: #2000ac;
  z-index: 999;
  transition: opacity 0.2s;
  ${(props) =>
    !props.isVisible &&
    css`
      opacity: 0;
    `}
`;

export const Logo = styled.svg`
  max-width: 200px;
`;

export const Path = styled.path`
  fill: transparent;
  animation: ${animation} 3s ease infinite alternate;
`;
