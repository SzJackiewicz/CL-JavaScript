import { parseBody } from "../index";

export const switchStatement = ({ discriminant, cases }) => {
  return {
    discriminant: discriminant.name,
    cases: cases.map(({ test, consequent }) => {
      // If someone is using {} inside switch cases Block is made
      const consequentTemp = consequent[0].type === "BlockStatement" ? consequent[0].body : consequent;

      return {
        test: test.value,
        consequent: parseBody(consequentTemp),
      }
    }),
  };
};
