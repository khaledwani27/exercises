const isExists = function (arr, num) {
    for (let number of arr) {
        if (number === num) {
            return true
        }
    }
    return false
}

const numbers = [1, 2, 3, 5, 6, 7, 8]

console.log(isExists(numbers, 9))