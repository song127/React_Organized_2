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
  all: (value: number) => string;
}

export const EdgeInset: EdgeInsetInterface = {
  trbl: (top, right, bottom, left) => {
    return `${top}px ${right}px ${bottom}px ${left}px`;
  },

  only: ({ top = 0, right = 0, bottom = 0, left = 0 }) => {
    return `${top}px ${right}px ${bottom}px ${left}px`;
  },

  all: (value) => {
    return `${value}px`;
  },
};
