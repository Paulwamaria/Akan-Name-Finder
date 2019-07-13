//Create a function to collect data from the user
document.getElementById('theform').onsubmit = function findAkanName(){
  var dD = document.getElementById('date').value;
  var month = document.getElementById('month').value;
  var yearOfBirth = document.getElementById('yearOfBirth').value;
   var cC = yearOfBirth.slice(0,2);
    var yY = yearOfBirth.slice(2,4);
    var genders = document.getElementById("gender");
  var gender = genders.options[genders.selectedIndex].text;
  
  convertD();
  
  giveName();
    
  }
cC=parseInt((year.toString()).slice(0,2));
yY=parseInt((year.toString()).slice(2,4));
//console.log(yY);
console.log(getDayWeek(cC,yY,mM,dD));
function convertD(){
var dayName=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var i;
for(i=0;i<dayName.length;i++){
if(getDayWeek(cC,yY,mM,dD)===i){
document.write(dayName[i]);
}
}
}
convertD();
//A function to match day with Akan name
 
var maleNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var femNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
function giveName(){
var j;
for(j=0;j<maleNames.length; j++){
if((getDayWeek(cC,yY,mM,dD)===j)&&(male===true)){
document.write(maleNames[j]);
}else if((getDayWeek(cC,yY,mM,dD)===j)&&(female===true)){
document.write(femNames[j]);

}
}
}
giveName();

