

//map more functionality
let participants = ['Jhon', 'Sarah', 'Alice', 'David'];
let results = participants.map(name => name.toLowerCase());
console.log(results);


//reduce example

const array = [1, 2, 3, 4, 5];

const sum = array.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
  
});

console.log(sum);

//another reduce example
const maxValue = array.reduce(max, -Infinity);
console.log(maxValue)

function max(previouseValue, currentValue){
  if(previouseValue > currentValue){
    return previouseValue;
  }
  else{
    return currentValue;
  }
}

//slice example

let halfnumber= array.slice(-2);
console.log(halfnumber);

//splice example



//sort array method
let napa3= napa.sort();
console.log(napa3)