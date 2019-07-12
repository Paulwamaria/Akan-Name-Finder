//A simple function to calculate the ay of the week
var year = 1995;
var cC;//century
var yY;//year
var mM=9;//month
var dD=11;//date
var result;
function getDayWeek(cC,yY,mM,dD){
var dayOfWeek= ( ( (cC/4) -2*cC-1) + ((5*yY/4) ) + ((26*(mM+1)/10)) + dD ) % 7;
var result=Math.floor(dayOfWeek);
return result;
}

cC=parseInt((year.toString()).slice(0,2));
yY=parseInt((year.toString()).slice(2,4));
//console.log(yY);
console.log(getDayWeek(cC,yY,mM,dD));
//converting the dayOfWeek to exact day name
// a function to convert the the dayOfWeek to exact day name
/*function convertDay(){
if(result===0){
console.log(dayName[0]);
}
else if(result===1){
console.log(dayName[1]);
}
else if(result===2){
console.log(dayName[2]);
}
else if(result===3){
console.log(dayName[3]);
}
else if(result===4){
console.log(dayName[4]);
}
else if(result===5){
console.log(dayName[5]);
}
else{
console.log("Its not a leap year");
console.log(dayName[6]);
}
}*/
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

