let arr = [1,2,3,4,5,3,2,1,8,9,5,7,4,3,5,0];


function frequency(arr){
    let obj ={};

    for( let value of arr){
         obj[value] = ( obj[value]  || 0 )+1 
    };

    return obj
};

console.log(frequency(arr));

