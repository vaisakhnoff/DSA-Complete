

let arr = [1,2,3,4,5,5];
let obj =[]

function remove(arr){
    for(let i =0 ;i< arr.length;i++){
        if(obj.includes(arr[i])){
            arr.splice(i,1);
            i--
        }else{
            obj.push(arr[i])
        };

        
    }
    return arr;
};

console.log(remove(arr));


// --------------------------------

function removes(arr){

    for(let i=0;i<arr.length;i++){
        for(let j=i+1; j < arr.length;j++){
            if(arr[i]==arr[j]){
                arr.splice(j,1)
           j--
            }
           
        }
    }
    return arr
}

console.log(removes(arr));
