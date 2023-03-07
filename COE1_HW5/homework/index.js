/* eslint-disable no-magic-numbers */

// Task 1
function isEquals(a, b){
    return a === b;
}
console.log(isEquals(3,3));

// Task 2
function isBigger(a, b){
    return a > b;
}
console.log(isBigger(5,-1));

// Task 3
function storeNames(...names){
    return names;
}
console.log(storeNames('Tommy Shelby', 'Ragnar Lodbrok', 'Tom Hardy'));

// Task 4
function getDifference(a, b){
    if (b > a) {
        const temp = a;
        a = b;
        b = temp;
    }
    const diff = a - b;
    return diff;
}
console.log(getDifference(5,3));
console.log(getDifference(5,8));

// Task 5
function negativeCount(arr){
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < 0){
        count++;
        }
    }
    return count;
}
console.log(negativeCount([4, 3, 2, 9]));
console.log(negativeCount([0, -3, 5, 7]));

// Task 6
function letterCount(str, letter){
    let count = 0;
    for (let i = 0; i < str.length; i++){
        if (str.charAt(i) === letter){
        count++;
        }
    }
    return count;
}
console.log(letterCount('Marry', 'r'));
console.log(letterCount('Barny', 'y'));
console.log(letterCount('', 'z'));

// Task 7
function countPoints(games){
    let points = 0;
    games.forEach(game => {
      const [x, y] = game.split(':').map(Number);
      if (x > y){
        points += 3;
      } else if (x === y){
        points += 1;
      }
    });
    return points;
}
console.log(countPoints(['100:90', '110:98', '100:100', '95:46', '54:90', '99:44', '90:90', '111:100']));