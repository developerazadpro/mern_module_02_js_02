// ########################### Module 01 ################################## 

// Javascript array
const city = ['Dhaka', 'Rangpur', 'Dinajpur'];
for(var i = 0; i < city.length; i++){
    console.log(city[i]);
}

// foreach method

city.forEach(function (item){
    console.log(item)
})

city.forEach( x => {
    console.log(x)
})

city.map(x => {
    console.log(x)
})

// Array concat
const city1 = ['Dhaka', 'Rangpur', 'Dinajpur'];
const city2 = ['Barisal', 'Rajshahi', 'Sylhet'];
const cities = city1.concat(city2);
console.log(cities);


// Array From
const name = Array.from('Azharul Islam');
console.log(name);
const letter = ['a', 'b', 'abc'];
console.log(Array.from(letter));

// Array Filter
var marks = [50,40,45,37,55];
marks.filter(function(mark){
    console.log(mark > 40)
})

// object
var MyLaptop = {
    brand: 'HP',
    model: '0007',
    ram  : '4GB',
    isSSD: true,
    name : {
        firstName : 'Dell',
        lastName : 'Pavilion'
    }
}
console.log(MyLaptop['ram']);
console.log(MyLaptop['name']['firstName']);

// type of 

var x = 10;
console.log(typeof(x));
var x = '10';
console.log(typeof(x))
var x = 10.50;
console.log(typeof(x))
var x = '';
console.log(typeof(x))
var x = 'string';
console.log(typeof(x))
var y;
console.log(typeof(y))
var x = null;
console.log(typeof(x))
var x = '10';
console.log(typeof(x))

var x = {
    name: 'Hasan'
};
console.log(typeof(x))

var x = [1, 2, 3];
console.log(typeof(x))

var x = true;
console.log(typeof(x))



// coercion in javascript

// Automatically convert one data type to another data type, two type 

// 01. Implicit Coercion
// When Javascript convert one data type into another data type
console.log(10 + '10')// 1010
console.log(20 - '10')// 10

// 02. Explicit
// when developer convert one data type into another
console.log(10 + Number('10'))// 20



var num1 = "10";
var num2 = "5";
var bool1 = Boolean(num1);console.log(bool1);
var bool2 = Boolean(num2);console.log(bool2);
var str1 = String(bool1);console.log(str1);
var str2 = String(bool2);console.log(str2);
var num3 = Number(str1);console.log(num3);
var num4 = Number(str2);console.log(num4);
console.log(num3 + num4);

// truthy value
if("hello"){
    console.log("This is a truthy value");
}
if(42){
    console.log("This is a truthy value");
}
if(true){
    console.log('This is a truthy value');
}
if({}){
    console.log('This is a truthy value');
}
if([]){
    console.log('This is a truthy value');
}

// falsy values
if(false){
    console.log('This is a falsy value');
}

if(0){
    console.log('This is a falsy value');
}
if(null){
    console.log('This is a falsy value');
}
if(undefined){
    console.log('This is a falsy value');
}
if(NaN){
    console.log('This is a falsy value');
}


// Nullish Coalescing Operator
var fname = undefined;
var defaultName = 'Azad';
var greet = fname??defaultName;
//console.log(greet);



// ########################### Module 02 ##################################




