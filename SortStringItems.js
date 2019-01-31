function ascending(input){
    return input.sort();
}
function descending(input){
    return ascending(input).reverse();
}
var input=["uday","santhosh","akshay"];
console.log("Ascending Order:"+ascending(input));
console.log("Descending Order:"+descending(input));
