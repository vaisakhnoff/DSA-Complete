function reverse(str){

    str = str.split('');
    
    
    let left = 0,right = str.length-1;

    while(left<right){
        [str[left],str[right]] = [str[right],str[left]];
        left++;
        right--
    }
    return str.join('');
}
console.log(reverse("race car"))

let str = "Hi all"


let result = str.split('').reverse().join('')
console.log(result);
