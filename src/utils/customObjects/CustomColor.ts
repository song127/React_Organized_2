export class CustomColor {
  hex = "#000000";

  constructor(hex = "#000000") {
    this.hex = hex;
  }

  withOpacity(opacity = 1) {
    const [r, g, b] = this.hex.match(/\w\w/g)!.map((x) => parseInt(x, 16));
    return `rgba(${r},${g},${b},${opacity})`;
  }

  valueOf() {
    return this.hex;
  }

  toString() {
    return this.hex;
  }

  __emotion_styles() {
    return this.hex;
  }
}

export function Color(hex = "#000000"): CustomColor & string {
  return new CustomColor(hex) as CustomColor & string;
}
