import { baseXToDecimal } from "./decimal";
import { baseXToOctal } from "./octal";

export const binaryToBaseX = (value: string, base: string) => {
  switch (base) {
    case "8":
      return baseXToOctal(value, 2);
    case "10":
      return baseXToDecimal(value, 2);
    case "16":
      return baseXToDecimal(value, 2);
  }
};
