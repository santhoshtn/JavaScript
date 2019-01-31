var obj = {"One":"1",
"Two":"2",
"Three":"3",
"Four":"4"
}
var result = Object.keys(obj).map(function(key) {
  return  obj[key];
});

console.log(result); 