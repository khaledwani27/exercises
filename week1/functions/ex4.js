const calculator = {
    add: function (a, b) {
        return a + b;
    },
    subtract: function (a, b) {
        return a - b;
    }
};

const result1 = calculator.add(2, 1);

const result2 = calculator.subtract(3, 9);

console.log(calculator.add(result1, result2));



