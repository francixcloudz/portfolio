import styled from "styled-components";
import ImageTemplate from "components/atoms/Image/Image";
import { COLORS } from "styles/theme";

export const StyledBackground = ``;
// box-shadow: 0 0.15rem 0.3rem 0 rgba(${COLORS.PRIMARY_SOFT.RGB}, 0.75);
// background-color: ${COLORS.WHITE.HEX};
// background: radial-gradient(
//     circle,
//     transparent 20%,
//     ${COLORS.WHITE.HEX} 20%,
//     ${COLORS.WHITE.HEX} 80%,
//     transparent 80%,
//     transparent
//   ),
//   radial-gradient(
//       circle,
//       transparent 20%,
//       ${COLORS.WHITE.HEX} 20%,
//       ${COLORS.WHITE.HEX} 80%,
//       transparent 80%,
//       transparent
//     )
//     32.5px 32.5px,
//   linear-gradient(${COLORS.PRIMARY_SOFTEST.HEX} 2.6px, transparent 2.6px) 0 -1.3px,
//   linear-gradient(
//       90deg,
//       ${COLORS.PRIMARY_SOFTEST.HEX} 2.6px,
//       ${COLORS.WHITE.HEX} 2.6px
//     ) -1.3px 0;
// background-size: 65px 65px, 65px 65px, 32.5px 32.5px, 32.5px 32.5px;
// `;

export const Emoji = styled(ImageTemplate)`
  width: 30px;
`;

export const SocialIcon = styled(ImageTemplate)`
  cursor: pointer;
  color: ${COLORS.YELLOW};
  width: 25px;
  margin: 0 10px;

  * {
    cursor: pointer;
  }

  &:hover {
    transform: scale(1.1);
  }
`;
