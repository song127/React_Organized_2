import { SerializedStyles, css } from "@emotion/react";

// 반응형 모바일 웹앱 자동 조정을 위한 Screen Size Auto Setting

// 기준 화면 너비
export const initVwViewport = 1080;

// pixel을 vw로 변환해주는 함수
const getVw = (px: number) => `${(px / (initVwViewport * 0.01 * 1)) * 1}vw`;

// 최대 화면 크기에 따라 반응형 스타일을 적용
const SCREEN = (content: SerializedStyles) => css`
  @media (max-width: ${initVwViewport}px) {
    ${content}
  }
`;

/**
 * @param {CSSPropertyRule} property - css 속성
 * @param {number | string} px - 변환할 px 단위 (숫자 또는 css 값)
 * @returns {SerializedStyles} - vw 단위로 변환된 값
 * @example
 * setVw("width", 360) // width: 100vw; width: 360px;
 * setVw("font-size", 18) // font-size: 5vw; font-size: 18px;
 * setVw("margin", "0 auto") // margin: 0 auto;
 * setVw("margin", 18) // margin: 5vw; margin: 18px;
 */
export const setVw = (property: string, px: number | string) =>
  typeof px == "number"
    ? css`
        ${`${property}: ${px}px`};
        ${SCREEN(css`
          ${property}: ${getVw(px)};
        `)};
      `
    : css`
        ${`${property}: ${px}`};
      `;

export const setVwMulti = (property: number, pxs: number[]) => css`
  ${`${property}: ${pxs.map((px) => `${px}px`).join(" ")}`};
  ${SCREEN(css`
    ${property}: ${pxs.map((px) => getVw(px)).join(" ")};
  `)};
`;

export const initVhViewport = 1080;

const getVh = (px: number) => `${(px / (initVhViewport * 0.01 * 1)) * 1}vh`;

const SCREEN_1 = (content: SerializedStyles) => css`
  @media (max-height: ${initVhViewport}px) {
    ${content}
  }
`;

export const setVh = (property: string, px: number) =>
  typeof px == "number"
    ? css`
        ${`${property}: ${px}px`};
        ${SCREEN_1(css`
          ${property}: ${getVh(px)};
        `)};
      `
    : css`
        ${`${property}: ${px}`};
      `;
