import * as S from "./Links.styles";

export function Links() {
  return (
    <S.Container>
      <S.Link
        href="https://github.com/lubanska"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </S.Link>
      <S.Link
        href="https://www.linkedin.com/in/agatalubanska/"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
      </S.Link>
    </S.Container>
  );
}
