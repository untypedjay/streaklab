export function round(num: number, decimalPlaces = 2): number {
  return Number(num.toFixed(decimalPlaces));
}

export function getLocalStorageSizeInKB(): number {
  let _lsTotal = 0;
  let _xLen;
  let _x;

  for (_x in localStorage) {
    if (!localStorage.hasOwnProperty(_x)) {
        continue;
    }
    _xLen = ((localStorage[_x].length + _x.length) * 2);
    _lsTotal += _xLen;
  }

  return Number((_lsTotal / 1024).toFixed(2));
}