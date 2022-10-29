import { baseXToDecimal, decimalToBaseX } from "./decimal";

export const binaryToBaseX = (value: string, base: string) => {
  const decimalValue = baseXToDecimal(value, "2");

  switch (base) {
    case "8":
      return decimalToBaseX(decimalValue, "8");
    case "10":
      return decimalValue;
    case "16":
      return decimalToBaseX(decimalValue, "16");
  }
};
