var obj = JSON.parse( '{"mike":"Book","jason":"sweater","chels":"iPad"}'); 
console.log(obj);   
Object.keys(obj).forEach(function(key) {
    console.log("key:"+key+",value:"+obj[key]);   
});
// console.log(obj);