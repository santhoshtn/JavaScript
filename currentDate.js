function date(){
    var today = new Date();
    console.log("DATE-"+(today.getMonth()+1)+"/"+today.getDate()+"/"+today.getFullYear()+"\n"+
                "TIME-"+today.getHours()+":"+today.getMinutes()+":"+today.getSeconds());
}
date();