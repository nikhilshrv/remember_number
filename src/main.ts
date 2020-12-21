export class RememberNumber {
    private numbers: {
        [key: number]: boolean;
    } = {};

    rememberNumber(number: number) {
        this.numbers[number] = true;
    }

}
