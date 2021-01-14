function converter(){
    let myAge=document.getElementById("age");
    let myMonth=document.getElementById("month");
    if(myAge.value<2){
   let dogMonth=months.value/4;
   let humanYear=myAge.value*10.5;
   let humanMonth=dogMonth*10.5;
   let humanMonth1=humanMonth-Math.floor(humanMonth);
   let humanMonth2=humanMonth1*12;
   console.log(Math.floor(humanMonth), humanMonth2);
    }
    else{
    let dogMonth=month.value/4;
    let firstTwo=2*10.5;
    let dogAge=(myAge.value-2)*4;
    let myNewAge=firstTwo+dogAge;
    let myAgeInMonth=myNewAge+dogMonth;
    if(myAgeInMonth %1!=0){
        myAgeInMonth=myAgeInMonth+0.5;
    }
    console.log("dog's age" +myAgeInMonth);
   }
}