// const octalTable = {
//   "0": "0000",
//   "1": "0001",
//   "2": "0010",
//   "3": "0011",
//   "4": "0100",
//   "5": "0101",
//   "6": "0110",
//   "7": "0111",
//   A: "1010",
//   B: "1011",
//   C: "1100",
//   D: "1101",
//   E: "1110",
//   F: "1111",
// };

export const octalToBaseX = (value: string, base: string) => {};

export const baseXToOctal = (value: string, base: number) => {
  switch (base) {
    case 2: {
      const valueSplited = value.split("");
      const valueSplitedReversed = valueSplited.reverse();
      const valueReversed = valueSplitedReversed.join("");

      let valueSlices = [];

      let separator = 0;
      let limit = 3;

      while (true) {
        valueSlices.push(valueReversed.slice(separator, limit));

        if (limit >= valueReversed.length) break;

        separator = limit;
        limit += 3;
      }

      let result: number[] = [];

      valueSlices.forEach((slice) => {
        const sum = slice
          .split("")
          .reduce((previousValue, currentValue, currentIndex) => {
            const charInt = parseInt(currentValue);

            if (currentIndex === 0) return previousValue + charInt * 1;

            return previousValue + charInt * (currentIndex * 2);
          }, 0);

        result.unshift(sum);
      });

      return result.join("");
    }
  }
};
