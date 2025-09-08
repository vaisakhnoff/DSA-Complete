
let arr = [ 1,2,3,4,5,7,9];





function findMissing(arr) {
    let missing = [];
    for (let i = arr[0]; i <= arr[arr.length-1]; i++) {
        if (!arr.includes(i)) {
            missing.push(i);
        }
    }
    return missing;
}

console.log(findMissing(arr)); // [6]
