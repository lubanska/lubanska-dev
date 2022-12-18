import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { SizeEnum } from "../enums";

export const Box = styled(motion.div)<{ size: SizeEnum }>`
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 99rem;
  opacity: 0.8;
  mix-blend-mode: multiply;
  background-color: ${(props) => props.theme.palette.flare};

  ${(props) => {
    switch (props.size) {
      case SizeEnum.Small:
        return css`
          width: 150px;
          height: 150px;
          z-index: 3;
          filter: blur(2rem);
        `;
      case SizeEnum.Medium:
        return css`
          width: 300px;
          height: 300px;
          z-index: 2;
          filter: blur(2.5rem);
        `;
      case SizeEnum.Large:
        return css`
          width: 600px;
          height: 600px;
          z-index: 1;
          filter: blur(3.5rem);
        `;
    }
  }};
`;
