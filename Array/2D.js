let row = 3;
let column = 5;
let num =0

let arr = [];

for(let i =0 ; i< row; i++){
    arr[i] = []
    for(let j =0 ; j < column ; j++){
          arr[i][j] = num++
    };
    
}

console.log(arr);
