 let arr = [1,2,3,0,5,0,2,0,6,0,4];

 function moveZero(arr){
    for(let i=0 ; i< arr.length; i++ ){
        if(arr[i]=== 0){
            arr.splice(i,1);
            arr.push(0)
        }
    };
    return arr
 };

 console.log(moveZero(arr));
 