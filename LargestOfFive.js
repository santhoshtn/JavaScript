function Largest(){
    var readline = require('readline-sync');
    var name =[]; 
    for (let index = 0; index < 5; index++) {
        name[index] = readline.question("Enter "+(index+1)+" number"+"\n"); 
    }
    var largest=0;
    name.forEach( function(item){
        if(item>largest)
        {
            largest=item;
        }
    });
    return largest;
}
console.log("Largest of all is: "+Largest());