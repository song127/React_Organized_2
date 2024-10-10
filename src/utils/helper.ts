export const sleep = async (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const getSign = (number: number) => (number > 0 ? "+" : number === 0 ? "" : "-");

export function formatNumberWithCommas(number: number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
