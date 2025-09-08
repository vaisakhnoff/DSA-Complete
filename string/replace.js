function replaceChar(str,newChar,position){
    if(position<0 || position>str.length) return "Invalid position";
    let result = "";
    for(let i=0;i<str.length;i++){
        if(i==position){
            result += newChar;
        }else{
            result += str[i] 
        }
    }
    return result
}
console.log(replaceChar("Hello",'y',2))