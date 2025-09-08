function substring(str,start,end){
    let result = [];
    for(let i=start;i<end;i++){
        result += str[i]
    }
    return result;
}
console.log(substring("Hello world",0,5))