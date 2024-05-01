import styled from "@emotion/styled";
import { setVw } from "@styles/global/globalScreen";

export default function ElasticGap({ w = 0, h = 0 }) {
  return styled.div`
    display: flex;
    ${setVw("margin-left", w)}
    ${setVw("margin-top", h)}
  `;
}
