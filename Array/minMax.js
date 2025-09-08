let arr = [1,2,3,4,5,6,7,8];

function minMax(arr){
    let min = Infinity
    let max = -Infinity;

    for(let value of arr){
        if(value < min){
            min = value;
        };
        if( value > max){
            max = value;
        }
    }

  return {min : min , max : max}
};

console.log(minMax(arr))
