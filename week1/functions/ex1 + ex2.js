const isEven = function (num) {
    return num % 2 == 0
}
// console.log(isEven(6));
// console.log(isEven(3));

function printOddsOnly(numbersArr) {
    for (let num of numbersArr) {
        if (!isEven(num)) {
            console.log(num)
        }
    }
}

const numbers = [1, 2, 3, 4, 5, 8, 7]
printOddsOnly(numbers)