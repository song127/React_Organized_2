import styled from "@emotion/styled";
import { setVw } from "@styles/global/globalScreen";

export default function ElasticSizedBox({
  w = "max-content",
  h = "max-content",
}) {
  return styled.div`
    display: flex;
    ${setVw("width", w)};
    ${setVw("height", h)};
  `;
}
