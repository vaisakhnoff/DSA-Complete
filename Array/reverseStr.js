
let arr = ["Hi","Hello","Fine"];


// function strrev(arr){
//     let reversed =  "";

//     for(let i = arr.length-1 ;i >= 0 ; i--){
//         reversed+=`${arr[i]} `;
//     }
//     return reversed;
// }

// console.log(strrev(arr));



function strreverse(arr){
    let left = 0, right = arr.length - 1;
    while(left < right){
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr;
}

console.log(strreverse(arr)); 
