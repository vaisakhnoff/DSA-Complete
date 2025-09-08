let arr = ["Mountain","Sea","Street"];


function reverse(arr){

for(let i =0 ;i < arr.length;i++){

    let char = arr[i].split('');

    let start = 0;

    let end = char.length;

    while(start < end ){

        [char[start],char[end]] = [char[end],[char[start]]];

      arr[i] = char.join('')

      start++
        end--
    }

}
return arr

};

console.log(reverse(arr));
