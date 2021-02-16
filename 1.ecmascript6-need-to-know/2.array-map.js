const numbers = [1, 2, 3, 4];

numbers.map(number => {
    //console.log(number);
    /*
        1
        2
        3
        4
    */
   
    //console.log(number * 5 / 10);
   /*
       0.5
       1
       1.5
       2
   */
});

const newNumbers = numbers.map(number => number + 1);
console.log(newNumbers); // [ 2, 3, 4, 5 ]