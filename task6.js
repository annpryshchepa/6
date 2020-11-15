function reversedStr(str) {
    let strToArr = str.split('');
    const reversedArr = strToArr.reverse();
    let completedArr = reversedArr.join('');    
    return completedArr;
   
}
 
console.log(reversedStr("Reverse the provided string"));


