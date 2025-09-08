function nonRepeat(str){
    let freq ={};
    for(let char of str){
        freq[char] = (freq[char] || 0) + 1;


        
    }
    for(let i = str.length-1;i>=0;i--){
        if(freq[str[i]] == 1){
            return str[i]
        }
    }
    return null
}
console.log(nonRepeat("javascript"))
console.log(nonRepeat("Hello"))
console.log(nonRepeat("wworlldd"))