import * as S from "./Flare.styles";
import { SizeEnum } from "../enums";
import { Shape } from "./Shape";

export function Flare() {
  return (
    <S.Container>
      <Shape size={SizeEnum.Small} />
      <Shape size={SizeEnum.Medium} />
      <Shape size={SizeEnum.Large} />
    </S.Container>
  );
}
