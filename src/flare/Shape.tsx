import { useRef } from "react";
import { SizeEnum } from "../enums";
import { useFollowPointer } from "./useFollowPointer";
import * as S from "./Shape.styles";

export interface ShapeProps {
  size: SizeEnum;
}

export function Shape({ size }: ShapeProps) {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <S.Box
      ref={ref}
      animate={{ x, y }}
      transition={{
        type: "spring",
        damping: 50,
      }}
      size={size}
    />
  );
}
