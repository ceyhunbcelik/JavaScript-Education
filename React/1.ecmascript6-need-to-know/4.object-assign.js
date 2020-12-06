/*
const data = {
    name: 'Ceyhun'
};

const data2 = {
    surname: 'Çelik',
    age: 25
};

const data3 = {
    city: 'California'
}

const result = Object.assign(data, data2, data3);
console.log(result); // { name: 'Ceyhun', surname: 'Çelik', age: 25, city: 'California' }
*/
//-------------------------------------
/*
const data = {
    name: 'Ceyhun'
};

const data2 = {
    surname: 'Çelik',
    age: 25
};

const data3 = {
    city: 'California',
    age: 30
}

const result = Object.assign({}, data, data2, data3);
// console.log(result); // { name: 'Ceyhun', surname: 'Çelik', age: 30, city: 'California' }
*/

//-------------------------------------

/*
const data = { name: 'Ceyhun' };
const data2 = data;

data2.name = 'Şeyma';

console.log('DATA: ', data); // DATA:  { name: 'Şeyma' }
console.log('DATA2: ', data2); // DATA2:  { name: 'Şeyma' }
*/

// Eğer object assign kullansaydık !!!!!!!!!!!

/*
const data = { name: 'Ceyhun' };
const data2 = Object.assign({}, data);

data2.name = 'Şeyma';

console.log('DATA: ', data); // DATA:  { name: 'Ceyhun' }
console.log('DATA2: ', data2); // DATA2:  { name: 'Şeyma' }
*/

/*
const data = {
    info: {
        name: 'Ceyhun',
        surname: 'Çelik'
    }
};
const data2 = Object.assign({}, data);

data2.info.name = 'Şeyma';

console.log('DATA: ', data); // DATA:  { info: { name: 'Şeyma', surname: 'Çelik' } }
console.log('DATA2: ', data2); // DATA:  { info: { name: 'Şeyma', surname: 'Çelik' } }
*/

// Eğer JSON parse kullansaydık !!!!!!!!!!!

const data = {
    info: {
        name: 'Ceyhun',
        surname: 'Çelik'
    }
};
const data2 = JSON.parse(JSON.stringify(data));

data2.info.name = 'Şeyma';

console.log('DATA: ', data); // DATA:  { info: { name: 'Ceyhun', surname: 'Çelik' } }
console.log('DATA2: ', data2); // DATA2:  { info: { name: 'Şeyma', surname: 'Çelik' } }