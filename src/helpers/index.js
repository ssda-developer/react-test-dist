export function generateRandomNineDigitNumber() {
    return `${Math.floor(Math.random() * 900000000 + 100000000)}`;
}
