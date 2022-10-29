import { BaseType } from "../types";

export const decimalToBaseX = (value: string, base: BaseType) => {
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

  if (base === "16") {
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

export const baseXToDecimal = (value: string, base: BaseType) => {
  const valueChars = value.split("").reverse();
  let result = 0;

  switch (base) {
    case "2": {
      valueChars.forEach((char, index) => {
        result += parseInt(char) * 2 ** index;
      });
      break;
    }
    case "8": {
      valueChars.forEach((char, index) => {
        result += parseInt(char) * 8 ** index;
      });
      break;
    }
    case "16": {
      valueChars.forEach((char, index) => {
        let charValue: number;

        switch (char) {
          case "A":
            charValue = 10;
            break;
          case "B":
            charValue = 11;
            break;
          case "C":
            charValue = 12;
            break;
          case "D":
            charValue = 13;
            break;
          case "E":
            charValue = 14;
            break;
          case "F":
            charValue = 15;
            break;
          default:
            charValue = parseInt(char);
            break;
        }

        result += charValue * 16 ** index;
      });
      break;
    }
  }

  return result.toString();
};
