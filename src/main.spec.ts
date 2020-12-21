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

test("should not be able to remember a number larger than 2000000", () => {
    expect(rememberNumber.rememberNumber(2000010)).toBe(false);
    expect(rememberNumber.rememberNumber(3000000)).toBe(false);
});

test("should not be able to remember a number lesser than 1", () => {
    expect(rememberNumber.rememberNumber(0)).toBe(false);
    expect(rememberNumber.rememberNumber(-10)).toBe(false);
});