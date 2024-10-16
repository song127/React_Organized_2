import { pxToRem } from "@/utils/helper";

interface EdgeInsetInterface {
  trbl: (top: number, right: number, bottom: number, left: number) => string;
  only: ({
    top,
    right,
    bottom,
    left,
  }: {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
  }) => string;
  direction: (vertical: number, horizontal: number) => string;
  all: (value: number) => string;
}

export const EdgeInset: EdgeInsetInterface = {
  trbl: (top, right, bottom, left) => {
    return `${pxToRem(`${top}px`)} ${pxToRem(`${right}px`)} ${pxToRem(`${bottom}px`)} ${pxToRem(`${left}px`)}`;
  },

  only: ({ top = 0, right = 0, bottom = 0, left = 0 }) => {
    return `${pxToRem(`${top}px`)} ${pxToRem(`${right}px`)} ${pxToRem(`${bottom}px`)} ${pxToRem(`${left}px`)}`;
  },

  direction: (vertical = 0, horizontal = 0) => {
    return `${pxToRem(`${vertical}px`)} ${pxToRem(`${horizontal}px`)}`;
  },

  all: (value) => {
    return `${pxToRem(`${value}px`)}`;
  },
};
