const word = "pussy";

function Counter() {
  const Count = {};
  for (let i = 0; i < word.length; ++i) {
    const letter = word[i];
    if (Count[letter] > 0) {
      Count[letter]++;
    } else {
      Count[letter] = 1;
    }
  }
  return Count;
}

console.log(Counter(word));
