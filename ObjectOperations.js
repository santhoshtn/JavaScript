var myObj =
[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];
var Programmer=myObj.filter(obj =>{
  return obj.occupation === "Programmer"
})
console.log(Programmer);
console.log("------------------------------------------------------------------");
console.log("Sorting by age:");
var byAge = myObj.slice(0);
byAge.sort(function(a,b) {
   return a.age - b.age;
});
console.log(byAge)
console.log("-------------------------------------------------------------------");

var Team=myObj.filter(obj =>{
    return obj.occupation === "Team Leader"
  })
Object.keys(Team).forEach(function(item) {
    delete(Team[item].occupation);
});
Object.keys(Programmer).forEach(function(item) {
    delete(Programmer[item].occupation);
});
 var result=new Object;
// result.TeamLeader=Team;
 result['Team Leader']=Team;
 result['Programmer']=Programmer;
console.log(result);
