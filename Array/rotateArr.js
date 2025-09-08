

let arr = [1,2,3,4,5];

   function rotate(arr,index){
    for(let i =0 ;i< index ; i++){
        let res = arr.pop();
        arr.unshift(res)
    };
    return arr
   }

   console.log(rotate(arr,2));
   