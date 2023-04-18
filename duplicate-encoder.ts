export function duplicateEncode(word: string): string {
  const charCounter: { [key: string]: number } = {};
  let resultString = "";

  for (let i = 0; i < word.length; i++) {
    const char = word[i].toLowerCase();

    if (char in charCounter) {
      charCounter[char]++;
    } else {
      charCounter[char] = 1;
    }
  }

  for (let i = 0; i < word.length; i++) {
    const char = word[i].toLowerCase();
    resultString += charCounter[char] > 1 ? ")" : "(";
  }

  return resultString;
}
