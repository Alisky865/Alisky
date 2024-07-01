

 let milliSeconds = 0;
 let seconds = 0;
 let minutes = 0;
 let hours = 0;

 let milliTimer = null;
 let minuteTimer = null;
 let hourTimer = null;

 let counting = false;

 function startCount()
   {milliSeconds +=1000;
   document.getElementById("milliSecondsDisplay").value = milliSeconds;
   document.getElementById("milliSecondsShow").innerHTML = `${milliSeconds}ms`;

   seconds +=1;
   document.getElementById("secondsDisplay").value = seconds;
   document.getElementById("secondsShow").innerHTML = `${seconds}s`;
   //console.log(milliSeconds);
  }

 function minutesCount()
   {minutes +=1;
   document.getElementById("minutesDisplay").value = minutes;
   document.getElementById("minutesShow").innerHTML = `${minutes}min`;
   }

 function hoursCount()
   {hours +=1;
   document.getElementById("hoursDisplay").value = hours;
   document.getElementById("hoursShow").innerHTML = `${hours}hr`;
   }



 function btnClick(actions2)
   {let moves1 = document.querySelector('.startBtn')
   let moves2 = document.querySelector('.stopBtn')
   let moves3 = document.querySelector('.resetBtn')

   if(actions2 === 'startBtn')
     {if(!moves1.classList.contains('startActive'))
       {moves1.classList.add('startActive');
       moves2.classList.remove('stopActive');
       moves3.classList.remove('resetActive');};


     if(!counting)
     {counting = true;
     milliTimer = setInterval(startCount,1000);
     minuteTimer = setInterval(minutesCount,60000);
     hourTimer = setInterval(hoursCount,3600000);};
     document.querySelector('#displayBox2').style.display = 'block';
     }

     
    /////////////////////////////////


   else if(actions2 === 'stopBtn' && counting)
     {if(!moves2.classList.contains('stopActive'))
       {moves2.classList.add('stopActive');
       moves1.classList.remove('startActive');
       moves3.classList.remove('resetActive');};
      

     clearInterval(milliTimer);
     clearInterval(minuteTimer);
     clearInterval(hourTimer);
     counting = false;}


   /////////////////////////////////////////


   else if(actions2 === 'resetBtn')
     {if(!moves3.classList.contains('resetActive'))
       {moves3.classList.add('resetActive');
       moves1.classList.remove('startActive');
       moves2.classList.remove('stopActive');}
      
      
        clearInterval(milliTimer);
        clearInterval(minuteTimer);
        clearInterval(hourTimer);
        counting = false;
        milliSeconds = 0;
        seconds = 0;
        minutes = 0;
        hours = 0;
      
        document.getElementById("milliSecondsDisplay").value = milliSeconds;
        document.getElementById("milliSecondsShow").innerHTML = milliSeconds;
      
        document.getElementById("secondsDisplay").value = seconds;
        document.getElementById("secondsShow").innerHTML = seconds;
      
        
        document.getElementById("minutesDisplay").value = minutes;
        document.getElementById("minutesShow").innerHTML = minutes;
      
        
        document.getElementById("hoursDisplay").value = hours;
        document.getElementById("hoursShow").innerHTML = hours;

        document.querySelector('#displayBox2').style.display = 'none';
      }


   }
