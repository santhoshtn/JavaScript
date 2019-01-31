 var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
  };
  //Sample Output : name,sclass,rollno

  let result = "";

  for (let key in student)
    result += `${key},`;

//   console.log(result.substring(0, result.length - 1)); // name,sclass,rollno
console.log(result);