/* eslint-disable no-magic-numbers */

function reverseNumber(num) {
	let reversed = 0;
  let sign = num < 0 ? '-1' : 1;
  num = Math.abs(num);
  while (num > 0) {
    reversed = reversed * '10' + num % '10';
    num = Math.floor(num / '10');
  }
  return sign * reversed;
}
console.log(reverseNumber(12345));
console.log(reverseNumber(-56789));

function forEach(arr, func) {
	for (let i = 0; i < arr.length; i++) {
		func(arr[i]);
  }
}
forEach([2,5,8], function(el) {
 console.log(el) 
});

function map(arr, func) {
	return arr.map(func);
}
console.log(map([2, 5, 8], function(el) {
 return el +3; 
}) );
console.log(map([1, 2, 3, 4, 5], function (el) {
 return el * 2; 
}));

function filter(arr, func) {
	return arr.filter(func);
} 
console.log(filter([2, 5, 1, 3, 8, 6], function(el) {
   return el >3 
  }));
console.log(filter([1, 4, 6, 7, 8, 10], function(el) {
   return el % 2 === 0 
  }));

function getAdultAppleLovers(data) {
     return map(
        filter(data, function(person) {

      return person.age > '18' && person.favoriteFruit === 'apple';
    }),
    function(person) {
      return person.name;
    }
  );
}
let data = [
 {
 '*_id': '5b5e3168c6bf40f2c1235cd6',
 'index': 0,
 'age': 39,
 'eyeColor': 'green',
 'name': 'Stein',
 'favoriteFruit': 'apple'
 },
 {
 '_id': '5b5e3168e328c0d72e4f27d8',
 'index': 1,
 'age': 38,
 'eyeColor': 'blue',
 'name': 'Cortez',
 'favoriteFruit': 'strawberry'
 },
 {
 'id': '5b5e3168cc79132b631c666a',
 'index': 2,
 'age': 2,
 'eyeColor': 'blue',
 'name': 'Suzette',
 'favoriteFruit': 'apple'
 },
 {
 '_id': '5b5e31682093adcc6cd0dde5',
 'index': 3,
 'age': 17,
 'eyeColor': 'green',
 'name': 'Weiss',
 'favoriteFruit': 'banana'
 }
]
console.log(getAdultAppleLovers(data));

function getKeys(obj) {
	 return Object.keys(obj);
}
console.log(getKeys({keyOne: 1, keyTwo: 2, keyThree: 3}));

function getValues(obj) {
	return Object.values(obj);
}
console.log(getValues({keyOne: 1, keyTwo: 2, keyThree: 3}));