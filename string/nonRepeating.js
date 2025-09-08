function nonrepeat(str){
    let freq ={};
let obj = {}
    for(let char of str){
        freq[char] = (freq[char] || 0) + 1;

          }


let uniques = [];
    for (let char of str){
        if (freq[char] === 1){
            uniques.push(char);
        }
    }

    // Return object with str as key
    return { [str]: uniques };
    }



console.log(nonrepeat("swiss"));
console.log(nonrepeat("banana"));
console.log(nonrepeat("swiiwss"));