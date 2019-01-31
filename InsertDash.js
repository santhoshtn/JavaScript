function insert_dash(){
    var readline = require('readline-sync');
    var input=readline.question("Enter a number: ");
    var string="";
    for( i=0;i<input.length;i++){
        if((parseInt(input.charAt(i))%2==0 )&&( parseInt(input.charAt(i+1))%2==0)){
            string+=input.charAt(i);
            string+="-";
        }
        else{
        string+=input.charAt(i);
        }
    }
console.log(string);
}
insert_dash();