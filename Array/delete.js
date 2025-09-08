let arr = [1,2,3,4,5,6,7,8,9];

function deleteValue(arr,value){
    for(let i =0 ;i< arr.length ; i++){
        if(arr[i]===value){
            arr.splice(i,1);
        }
    };
    return arr;
};

console.log(deleteValue(arr,5));

