const data = [1, 2, 3, 4, 5];

// console.log(data); // [ 1, 2, 3, 4, 5 ]
// console.log(...data); // 1 2 3 4 5

const newData = [0, ...data];
// console.log(newData); // [ 0, 1, 2, 3, 4, 5 ]
// console.log(...newData); // 0 1 2 3 4 5

const userData = {
    user: 'ceyhun',
    pass: 'celik'
};

// console.log(userData); // { user: 'ceyhun', pass: 'celik' }

const ageData = {
    age: 25,
    ...userData
};

// console.log(ageData); // { age: 25, user: 'ceyhun', pass: 'celik' }