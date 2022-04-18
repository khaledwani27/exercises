const myObject = {
    numbers: [11, 13, 14, 66, 67, 69, 234, 456, 2, 1],
    [Symbol.iterator]: function () {
        return {
            current: 0,
            arr: this.numbers,
            next() {

                if (this.current < this.arr.length) {
                   if(this.arr[this.current] %2 === 0){ 
                    return { done: false, value: this.arr[this.current++] };
                   }
                   this.current++;
                   return this.next();

                } else {
                    return { done: true };
                }
            }
        }
    }
}

for (let x of myObject) {
    console.log(x)
}