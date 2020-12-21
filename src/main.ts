export class RememberNumber {
    private numbers: {
        [key: number]: boolean;
    } = {};

    rememberNumber(number: number) {
        this.numbers[number] = true;
    }

    forgetNumber(number: number) {
        delete this.numbers[number];
    }

    checkIfNumberExists(number: number) {
        return !!this.numbers[number];
    }
}
