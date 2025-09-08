let arr = [1,2,3,5];

// function insert(arr,index,value){
  
//     arr.splice(index,0,value);
//     return arr
// }

// console.log(insert(arr,3,4));



let values = [4,4,4]
function insertAt(arr,index,values){
 
     for(let i =0  ; i<values.length;i++ ){
        arr.splice(index+i,0,values[i])
     };
     return arr
}

console.log(insertAt(arr,3,values));