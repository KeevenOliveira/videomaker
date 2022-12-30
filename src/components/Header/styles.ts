import styled from "styled-components";

export const Container = styled.div`
  height: 9vh;
  display: flex;
  position: fixed;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  background-color: transparent;
  z-index: 9999;
  @media (max-width: 630px) {
    justify-content: center;
  }
`;
export const Logo = styled.div`
  max-width: 5.5em;
  margin-left: 1em;
`;

export const Button = styled.button`
  background: none;
  border: 2px solid #e4cb58;
  font: inherit;
  line-height: 1;
  margin: 0.5em;
  padding: 0.7em 1.3em;
  color: #fff;
  a {
    color: #fff;
    outline: none;
    text-decoration: none;
  }
  transition: 0.4s;

  &:hover,
  &:focus {
    transition: 0.4s;
    box-shadow: 0 0.5em 0.5em -0.4em #e4cb58;
    transform: translateY(-0.25em);
  }
`;
export const ContentHeader = styled.div`
  a {
    & + a {
      margin-left: 15px;
    }
  }
  .buttonHeader {
    @media (max-width: 630px) {
      display: none;
    }
  }
  .buttonHeader2 {
    @media (max-width: 510px) {
      display: none;
    }
  }
`;
