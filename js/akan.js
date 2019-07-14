//Create a function to collect data from the user
var cC=19;
var yY=90;
var mM=6;
var dD=30; 
//collect data from the form and output it
function check(){
  document.getElementById("fd").innerHTML= "Here are your details: "
  document.getElementById("f1").innerHTML= "You were born on date " + document.getElementById("date").value;
  document.getElementById("f2").innerHTML= "You were born on this month " + document.getElementById("month").value;
  document.getElementById("f3").innerHTML= "You were born on this year " + document.getElementById("yearOfBirth").value;
  document.getElementById("f4").innerHTML= "Your gender is " + document.getElementById("gender").options[document.getElementById("gender").selectedIndex].text;
  
}
/*document.getElementById('theForm').onsubmit = function findAkanName(){
  var dD = document.getElementById('date').value;
  console.log(document.getElementById('theform').value);
  var month = document.getElementById('month').value;
  var yearOfBirth = document.getElementById('yearOfBirth').value;
   var cC = yearOfBirth.slice(0,2);
    var yY = yearOfBirth.slice(2,4);
    var genders = document.getElementById("gender");
  var gender = genders.options[genders.selectedIndex].text;
  console.log("I love githeri");
  
  //giveName(gender);  
  }*/
//cC=parseInt((year.toString()).slice(0,2));
//yY=parseInt((year.toString()).slice(2,4));
//console.log(yY);
function getDayWeek(cC,yY,mM,dD){
  var dayOfWeek= ( ( (cC/4) -2*cC-1) + ((5*yY/4) ) + ((26*(mM+1)/10)) + dD ) % 7;
  var result=Math.floor(dayOfWeek);
  return result;
  }
  
//console.log(getDayWeek(cC,yY,mM,dD));
function convertD(){
var dayName=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var i;
for(i=0;i<dayName.length;i++){
if(getDayWeek(cC,yY,mM,dD)===i){
document.write(dayName[i]);
}
}
}

//A function to match day with Akan name
male=true
var maleNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var femNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
function giveName(gender){
var j;
for(j=0;j<maleNames.length; j++){
if((getDayWeek(cC,yY,mM,dD)===j)&&(male===true)){
window.alert(maleNames[j]);
}else if((getDayWeek(cC,yY,mM,dD)===j)&&(gender===female)){
window.alert(femNames[j]);

}
}
}


