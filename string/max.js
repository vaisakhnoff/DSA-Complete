
function max(str){
    let charcount = 0;
    let charl = "";
    let obj ={};

str = str.toLowerCase();

for(let char of str){
    obj[char] = (obj[char] || 0 ) +1;
    
    
    if(obj[char] > charcount){
        charcount = obj[char];
        charl = char;
    }
};

return {charcount,charl};
};


console.log(max("Swiss"));

