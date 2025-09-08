function unique(str){
    let charCount = {};
    let unique = [];

    for(let char of str){
        charCount[char] = (charCount[char] || 0) + 1
    }
    for(let char of str){
        if(charCount[char] === 1){
            unique.push(char)
        }
    }
    return unique.join(' ')
}
console.log(unique("swiss"))