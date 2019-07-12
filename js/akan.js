//A simple function to calculate the day of the week
var cC=19;//century
var yY=90;//year
var mM=3;//month
var dD=1;//date
function getDayWeek(cC,yY,mM,dD){
var dayOfWeek= ( ( (cC/4) -2*cC-1) + ((5*yY/4) ) + ((26*(mM+1)/10)) + dD ) % 7
return Math.floor(dayOfWeek);
}
window.alert(getDayWeek(cC,yY,mM,dD));