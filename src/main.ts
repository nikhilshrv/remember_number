export class RememberNumber {
    private lowerLimit = 1;
    private upperLimit = 2000000;

    private numbers: {
        [key: number]: boolean;
    } = {};

    rememberNumber(number: number) {
        if (this.isValidNumber(number)) {
            this.numbers[number] = true;
            return true;
        }
        return false;
    }

    forgetNumber(number: number) {
        delete this.numbers[number];
    }

    checkIfNumberExists(number: number) {
        return !!this.numbers[number];
    }

    private isValidNumber(number: number) {
        return number >= this.lowerLimit && number <= this.upperLimit
    }
}
