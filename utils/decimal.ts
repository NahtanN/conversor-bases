export const decimalToBaseX = (value: string, base: string) => {
  const baseHexadecimal = "16";
  const numValue = parseInt(value);
  const numBase = parseInt(base);

  const results = [];

  let dividendo = numValue;

  while (true) {
    let quociente = Math.trunc(dividendo / numBase);
    let resto = dividendo % numBase;

    if (dividendo >= numBase) {
      results.unshift(resto);
      dividendo = quociente;
    } else {
      results.unshift(dividendo);
      break;
    }
  }

  if (base === baseHexadecimal) {
    const hexaValues = results.map((resultValue) => {
      switch (resultValue) {
        case 10:
          return "A";
        case 11:
          return "B";
        case 12:
          return "C";
        case 13:
          return "D";
        case 14:
          return "E";
        case 15:
          return "F";
        default:
          return resultValue;
      }
    });

    return hexaValues.join("");
  }

  return results.join("");
};

export const baseXToDecimal = (value: string, base: number) => {
  const valueChars = value.split("").reverse();
  let result = 0;

  switch (base) {
    case 2: {
      valueChars.forEach((char, index) => {
        result += parseInt(char) * 2 ** index;
      });
      break;
    }
  }
  console.log(result);
  return result.toString();
};
