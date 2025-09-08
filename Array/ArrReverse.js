let arr = [1,3,4,5,6,7,8,9,10];

// let reversed = arr.reverse((a,b)=>b-a);

// console.log(reversed);



let a = 0 ;
 let b = arr.length-1;

 while(a<b){
    let temp = 0;
    temp = arr[b];
    arr[b] = arr[a];
    arr[a] = temp;

    a++
    b--

 }

 console.log(arr);
 

 