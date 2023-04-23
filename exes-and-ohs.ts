export function xo(str: string): boolean {
  let xCount = 0;
  let oCount = 0;
  str.split('').forEach(char => {
    if (char.toLowerCase() === 'x') xCount++;
    if (char.toLowerCase() === 'o') oCount++;
  });
  return xCount === oCount;
}
