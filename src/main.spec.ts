import { RememberNumber } from "./main";

const rememberNumber = new RememberNumber();

test("should be able to remember a number", () => {
    expect(rememberNumber.rememberNumber(3)).toBe(true);
});

test("should be able to check if a number exists", () => {
    expect(rememberNumber.checkIfNumberExists(34756)).toBe(false);
    rememberNumber.rememberNumber(34756);
    expect(rememberNumber.checkIfNumberExists(34756)).toBe(true);
});

test("should be able to forget a number", () => {
    expect(rememberNumber.checkIfNumberExists(400001)).toBe(false);
    rememberNumber.rememberNumber(400001);
    expect(rememberNumber.checkIfNumberExists(400001)).toBe(true);

    rememberNumber.forgetNumber(400001);
    expect(rememberNumber.checkIfNumberExists(400001)).toBe(false);
});
