import { RememberNumber } from "./main";

const rememberNumber = new RememberNumber();

test("should be able to remember a number", () => {
    expect(rememberNumber.rememberNumber(3)).toBe(true);
});
