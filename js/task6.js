let numbers = [7,4,46,78,666,12,555,62];

let BigNumber = 0;

for (let i=0; i < numbers.length; i++){
    if(BigNumber < numbers[i]){
        BigNumber = numbers[i]
    }
}

console.log(BigNumber)
