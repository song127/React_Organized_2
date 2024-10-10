import styled from "@emotion/styled";

import COLORS from "@/styles/global/globalColor";
import { setVw } from "@/styles/global/globalScreen";

function ElasticText({ color = COLORS.dark_1, size = 16, weight = 400, height = "1.1" }) {
  return styled.p`
    display: inline-block;
    text-align: center;
    width: max-content;
    height: max-content;

    color: ${color ? color : COLORS.black};
    ${size ? setVw("font-size", size) : ""};
    font-weight: ${weight ? weight : "normal"};
    ${height ? setVw("line-height", height) : ""};
  `;
}

export default ElasticText;
