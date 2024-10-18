import COLORS from "@/styles/global/globalColor";

class CustomFont {
  [key: string]: any;
  constructor(
    public size: number,
    public color: any,
    public weight: number,
    public height: string,
    public align: string,
  ) {}

  withParams({
    size = this.size,
    color = this.color,
    height = this.height,
    weight = this.weight,
    align = this.align,
  }) {
    this.size = size;
    this.color = color;
    this.height = height;
    this.weight = weight;
    this.align = align;

    return `
      font-size: ${this.size}px;
      color: ${this.color};
      line-height: ${this.height};
      font-weight: ${this.weight};
      text-align: ${this.align};
    `;
  }

  valueOf() {
    return `
      font-size: ${this.size}px;
      color: ${this.color};
      line-height: ${this.height};
      font-weight: ${this.weight};
      text-align: ${this.align};
    `;
  }

  toString() {
    return this.valueOf();
  }

  __emotion_styles() {
    return this.valueOf();
  }
}

export function Font({
  size = 16,
  color = COLORS.dark_1,
  height = "1.1",
  weight = 400,
  align = "start",
}): CustomFont {
  const font = new CustomFont(size, color, weight, height, align);
  Object.defineProperty(font, "__emotion_styles", {
    value: function () {
      return font.valueOf();
    },
  });

  return font;
}
