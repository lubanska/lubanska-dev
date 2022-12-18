import styled from "styled-components";

export const Container = styled.div`
  z-index: 5;
  opacity: 0.8;
  text-align: center;

  @media (min-width: 480px) {
    position: absolute;
    text-align: left;
    right: 3rem;
    top: 3rem;
  }
`;

export const Link = styled.a`
  color: ${(props) => props.theme.palette.text};
  text-decoration: solid underline ${(props) => props.theme.palette.text} 0.1rem;
  text-underline-offset: 0.2rem;

  &:hover {
    text-decoration-thickness: 0.2rem;
  }

  &:active {
    text-decoration-thickness: 0.3rem;
  }
`;
