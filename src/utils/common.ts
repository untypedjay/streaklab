export function round(num: number, decimalPlaces = 2): number {
  console.log(num);
  return Number(num.toFixed(decimalPlaces));
}
