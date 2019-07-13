

var year = 1995;
var cC;//century
var yY;//year
var mM=9;//month
var dD=11;//date
var result;
//var dateEnterd;

//Create a function to collect data from the user

document.getElementById("birthd").addEventListener("change", function() {
  var dateEnterd = this.value;
  window.alert(dateEnterd); //e.g. 2015-11-13
 return dateEnterd;
});
//a simple function to identify the checked  radio button
//function maleCheck

var male=document.getElementById("male");
var female=document.getElementById("female");
function maleCheck(){
  if(masculine.checked){
  
    return true;
  }else{
    return false;
  }
}
maleCheck();

//function femaleCheck
function femaleCheck(){
  if(feminine.checked){
    return true;
  }else{
    return false;
  }
}
femaleCheck();
//A simple function to calculate the day of the week given a specific date
function getDayWeek(cC,yY,mM,dD){
var dayOfWeek= ( ( (cC/4) -2*cC-1) + ((5*yY/4) ) + ((26*(mM+1)/10)) + dD ) % 7;
var result=Math.floor(dayOfWeek);
return result;
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

