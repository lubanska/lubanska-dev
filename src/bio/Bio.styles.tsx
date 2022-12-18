import styled from "styled-components";

export const Container = styled.div`
  color: ${(props) => props.theme.palette.text};
  z-index: 5;
  opacity: 0.8;
  text-align: center;

  @media (min-width: 480px) {
    position: absolute;
    text-align: left;
    left: 3rem;
    bottom: 3rem;
  }
`;

export const Name = styled.h1``;
export const Job = styled.h2``;
export const Mail = styled.a``;
export const Phone = styled.p``;
