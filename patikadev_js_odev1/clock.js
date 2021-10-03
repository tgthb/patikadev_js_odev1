function getName(){
    var yourName= prompt("Write your name:")

    document.getElementById("myName").innerHTML=yourName;
}


//get the current time
function showTime(){
    var date= new Date();
    var hours=date.getHours(); //0-23
    var minutes= date.getMinutes();//0-59
    var seconds= date.getSeconds();//0-59
   

    //if the number is smaller than 10, write it with this form like
    //01 or 08..

    hours = hours < 10 ? "0"+hours : hours;

    minutes = minutes < 10 ? "0"+minutes : minutes;
    
    seconds= seconds < 10 ? "0"+ seconds: seconds;


//day names in Turkish
  var day=date.getDay();
    switch(day){
        case 1:
            day= "Pazartesi";
            break;
        case 2:
            day= "Salı";
            break;
        case 3:
            day= "Carsamba";
            break;
        case 4:
            day= "Persembe";
            break;
        case 5:
            day= "Cuma"; 
            break;
        case 6:
            day= "Cumartesi";
            break;
        case 0:
            day="Pazar";
            break;
    } 

      //The getDay() method returns the weekday of a date as a number (0-6)

    var currentDate=`${hours}:${minutes}:${seconds} ${day}`;

    document.getElementById("myClock").innerHTML= currentDate;

    //run this function every 1 second
    setInterval(showTime,1000);
}

getName();
showTime();



