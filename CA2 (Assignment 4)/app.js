function reverseNumber(num) {
    let reversed = 0;
  let sign = num < 0 ? '-1' : '1';
  num = Math.abs(num);
  while (num > 0) {
    reversed = reversed * '10' + num % '10';
    num = Math.floor(num / '10');
  }
  return sign * reversed;
}

function forEach(arr, func) {
    for (let i = 0; i < arr.length; i++) {
		func(arr[i]);
    }
}

function map(arr, func) {
    return arr.map(func);
}

function filter(arr, func) {
    return arr.filter(func);
}

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

function getKeys(obj) {
    return Object.keys(obj);
}

function getValues(obj) {
    return Object.values(obj);
}


