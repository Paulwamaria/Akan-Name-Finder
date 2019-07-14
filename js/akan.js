var dB, cC, yY, mM;
//redeclare variables
var dD=document.getElementById("date").value;
var mM=document.getElementById("month").value;
var yearOfBirth=document.getElementById("yearOfBirth").value;
var cC = yearOfBirth.slice(0,2);
var yY = yearOfBirth.slice(2,4);
var dayName=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var maleNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];  
var genders = document.getElementById("gender");
var gender = genders.options[genders.selectedIndex].text;




//collect data from the form and output it
function check(){
  document.getElementById("fd").innerHTML= "Here are your details: "
  document.getElementById("f1").innerHTML= "You were born on date " + document.getElementById("date").value;
  document.getElementById("f2").innerHTML= "You were born on this month " + document.getElementById("month").value;
  document.getElementById("f3").innerHTML= "You were born on this year " + document.getElementById("yearOfBirth").value;
  document.getElementById("f4").innerHTML= "Your gender is " + document.getElementById("gender").options[document.getElementById("gender").selectedIndex].text;
  
}
//A function to find akan name

//function getDayWeek
function getDayWeek(cC,yY,mM,dD){var dD=document.getElementById("date").value;
var mM=document.getElementById("month").value;
var yearOfBirth=document.getElementById("yearOfBirth").value;
var cC = yearOfBirth.slice(0,2);
var yY = yearOfBirth.slice(2,4);

  var dayNumber= parseInt(( ( (cC/4) -2*cC-1) + ((5*yY/4) ) + ((26*(mM+1)/10)) + dD ) % 7);
  return dayNumber;
 // document.getElementById("f6").innerHTML= "You were born on " + dayNumber;
  }
  getDayWeek(cC,yY,mM,dD);

  //function convert daynumber to actual day
  function convertD(){
    
    var i;
    for(i=0;i<dayName.length;i++){
    if(getDayWeek(cC,yY,mM,dD)===i){
     // document.getElementById("f6").innerHTML= "You were born on " + dayName[ getDayWeek(cC,yY,mM,dD)];
    }
    }
    }
    convertD();

function yourAkanName(){
  var genders = document.getElementById("gender");
  var gender = genders.options[genders.selectedIndex].text;

  if(gender==="Male"){
    document.getElementById("fr").innerHTML= "Here are your results: "
    document.getElementById("f6").innerHTML= "You were born on " + dayName[ getDayWeek(cC,yY,mM,dD)];
    document.getElementById("f7").innerHTML= "Your Akan Name is " + maleNames[getDayWeek(cC,yY,mM,dD)];
  }else if (gender==="Female"){
    document.getElementById("fr").innerHTML= "Here are your results: "
    document.getElementById("f6").innerHTML= "You were born on " + dayName[ getDayWeek(cC,yY,mM,dD)];
    document.getElementById("f7").innerHTML= "Your Akan Name is " + femaleNames[getDayWeek(cC,yY,mM,dD)];
  }
}
