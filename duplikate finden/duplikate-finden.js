//Duplikate finden/keine Standartfunction

//function removeDuplicates(array) {
//init return array
//foreach item in array
//if not in returnArray
//push to returnArray
//return returnArray
//}
/*
 

const duplicates = [1, 3, 4, 8, 4, 9, 1, 2, 7, 9, 7, 7];
const district = removeDuplicates(duplicates);

function removeDuplicates(array) {
  const result = [];
  for (const item of array) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }
  return result;
}

console.log(district);
console.log("hello console");

//Übung 2

//const neuer Kübel
//for (const item of firstArray){}
//push item to new Kübel
//for(......secondArray){}
//push item to newKübel;
//return to newKübel

function unionAll(firstArray, secondArray) {
  const result = [];
  for (const item of firstArray) {
    result.push(item);
  }
  for (const item of secondArray) {
    result.push(item);
  }
  return result;
}

const arrayOne = [1, 2, 3, 1];
const arrayTwo = [4, 5, 6];
const combinedArray = unionAll(arrayOne, arrayTwo);
console.log(combinedArray); //1,2,3,4,5,6

//const unionedArray = union(firstArray,secondArray);
//console.log(unionArray);
*/
//Übung 3
//function intersection(arrayOne,arrayTwo){
//leeres Array result
//jedes Element aus arrayOne
//jedes Element aus arrayTwo
//vergleich beider Elemente
//wenn gleich => push auf result und abbruch Schleife
//return result

function intersect(arrayOne, arrayTwo) {
  const result = [];
  for (const itemOne of arrayOne) {
    for (const itemTwo of arrayTwo) {
      if (itemOne == itemTwo) {
        result.push(itemOne);
        break;
      }
    }
  }
  return result;
}

const intersectPartOne = [1, 2, 3, 4];
const intersectPartTwo = [3, 4, 5, 6];
const intersection = intersect(intersectPartOne, intersectPartTwo);
console.log(intersection); //3,4
