let numbers = [7,4,46,78,666,12,555,62];

let SmallNumber = numbers [0]; 

for (i=0; i<numbers.length; i++) {
    if (SmallNumber>numbers[i]){
        SmallNumber = numbers[i]
    }
}

console.log (SmallNumber)
