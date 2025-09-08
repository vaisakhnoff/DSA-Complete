
let arr = [1,2,3,4,5,6,7,8];


function second(arr){

    let largest = -Infinity;
    let second = -Infinity;
    let third  = -Infinity;


    for(let i =0 ;i< arr.length;i++){
        if(arr[i]> largest){
           third = second;
           second = largest;
           largest = arr[i];
        }
        if(arr[i] > second && arr[i] !=largest ){
 
                    third = second;
                    second = arr[i];
                 
        };
        if(arr[i] > third && arr[i] != largest && second ){
            third = arr[i];
        }
        
    }
return third

};

console.log(second(arr));
