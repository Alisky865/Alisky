 
 
 //onOff()
 let maths = '';

 setInterval(dateTime,1000)
 function dateTime()
 {let todaysDate = new Date().toLocaleDateString();
   let updatedDate = '';
   for(i = 0; i < todaysDate.length; i++)
    {if(todaysDate[i] === '/')
    {updatedDate += '-'}
    else{updatedDate += todaysDate[i]};}


   const currentTime =  new Date().toLocaleTimeString([],
    {hour:'2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,});

    document.querySelector('.date').innerText = updatedDate;
    document.querySelector('.time').innerText = currentTime;
 }  


 function resizing()
 {const inputText = document.querySelector('.display1');
   inputText.style.fontSize = '20px';
   const length = inputText.value.length;
  
   if(length >= 18)
   {const textSize = 20 - (length * 0.3);
   inputText.style.fontSize = `${textSize}px`;}
   else{inputText.style.fontSize = '20px';}
 }

 function resizing2()
 { const inputText2 = document.querySelector('.display2')
   inputText2.style.fontSize = '20px';
   const length2 = inputText2.value.length;

   if(length2 >= 18)
   {const textSize2 = 20 - (length2 * 0.3);
   inputText2.style.fontSize = `${textSize2}px`;}
   else{inputText2.style.fontSize = '20px';}; 
 }

  /*function onOff()
   {document.querySelector('.display1').style.display = 'none'
   document.querySelector('.display2').style.display = 'none'}*/


 function switchBtn(actions)
  {let moves1 = document.querySelector('.offBtn')
   let moves2 = document.querySelector('.onBtn')


   if(actions === 'offBtn')
     {if(moves1.classList.contains('offActive'))
      {moves1.classList.remove('offActive');
      moves2.classList.remove('onActive');
      resetCalc()

      document.querySelector('.display1').style.display = 'none'
      document.querySelector('.display2').style.display = 'none'};
    }


   else if(actions === 'onBtn')
     {if(!moves2.classList.contains('onActive'))
      {moves2.classList.add('onActive');
      moves1.classList.add('offActive');
      resetCalc();

      document.querySelector('.display1').style.display = 'inline-block'
      document.querySelector('.display2').style.display = 'inline-block';};
    } 
  
  }



 function switchBtn2(actions2)
  {let lightMode = document.querySelector('.light-mode')
   let darkMode = document.querySelector('.dark-mode');

   let containerMode = document.querySelector('.container');
   let displayBoxMode = document.querySelector('.display-box');
   let dateTimeboxMode = document.querySelector('.date-time-box');
   let date = document.querySelector('.date');
   let time = document.querySelector('.time');
   let display1 = document.querySelector('.display1');
   let display2 = document.querySelector('.display2');


   if(actions2 === 'light-mode')
    {lightMode.style.display = 'none';
     darkMode.style.display = 'inline-block';
     containerMode.classList.remove('container-darkMode');
     displayBoxMode.classList.remove('display-box-darkMode');
     dateTimeboxMode.classList.remove('date-time-box-darkMode');
     date.classList.remove('datetime-darkMode');
     time.classList.remove('datetime-darkMode');
     display1.classList.remove('displayMode');
     display2.classList.remove('displayMode2');


     document.querySelector('.numsBtn1').style.color = 'black';
     document.querySelector('.numsBtn2').style.color = 'black';
     document.querySelector('.numsBtn3').style.color = 'black';
     document.querySelector('.numsBtn4').style.color = 'black';
     document.querySelector('.numsBtn5').style.color = 'black';
     document.querySelector('.numsBtn6').style.color = 'black';
     document.querySelector('.numsBtn7').style.color = 'black';
     document.querySelector('.numsBtn8').style.color = 'black';
     document.querySelector('.numsBtn9').style.color = 'black';
     document.querySelector('.numsBtn10').style.color = 'black';
     document.querySelector('.numsBtn11').style.color = 'black';
     document.querySelector('.numsBtn12').style.color = 'black';
    }




   else if(actions2 === 'dark-mode')
    {darkMode.style.display = 'none';
     lightMode.style.display = 'inline-block';
       if(!containerMode.classList.contains('container-darkMode'))
       {containerMode.classList.add('container-darkMode');}

       if(!displayBoxMode.classList.contains('display-box-darkMode'))
       {displayBoxMode.classList.add('display-box-darkMode');}

       if(!dateTimeboxMode.classList.contains('date-time-box-darkMode'))
       {dateTimeboxMode.classList.add('date-time-box-darkMode');}

       if(!date.classList.contains('datetime-darkMode'))
       {date.classList.add('datetime-darkMode');}

       if(!time.classList.contains('datetime-darkMode'))
       {time.classList.add('datetime-darkMode');}

       if(!display1.classList.contains('displayMode'))
       {display1.classList.add('displayMode');}

       if(!display2.classList.contains('displayMode2'))
       {display2.classList.add('displayMode2');}

       //if(!numsBtns.classList.contains('numsDarkMode'))
       //{numsBtns.classList.add('numsDarkMode');}

       document.querySelector('.numsBtn1').style.color = 'white';
       document.querySelector('.numsBtn2').style.color = 'white';
       document.querySelector('.numsBtn3').style.color = 'white';
       document.querySelector('.numsBtn4').style.color = 'white';
       document.querySelector('.numsBtn5').style.color = 'white';
       document.querySelector('.numsBtn6').style.color = 'white';
       document.querySelector('.numsBtn7').style.color = 'white';
       document.querySelector('.numsBtn8').style.color = 'white';
       document.querySelector('.numsBtn9').style.color = 'white';
       document.querySelector('.numsBtn10').style.color = 'white';
       document.querySelector('.numsBtn11').style.color = 'white';
       document.querySelector('.numsBtn12').style.color = 'white';
    
    }
  
  }


  function sciFunc(actions4)
  {let degreeMode = document.querySelector('.mathsOpsDeg')
   let radMode = document.querySelector('.mathsOpsRad')

   if(actions4 === 'deg')
    {degreeMode.style.display = 'none';
     radMode.style.display = 'inline-block'; 
    
    }


   else if(actions4 === 'rad')
    {radMode.style.display = 'none';
     degreeMode.style.display = 'inline-block' };

  

  
   if(actions4 === 'sin')
   { if(degreeMode.style.display === 'inline-block')
     {maths = Math.sin(maths)}

     else{maths = Math.sin(maths * Math.PI/180)};
   }

   else if(actions4 === 'cos')
   { if(degreeMode.style.display === 'inline-block')
     {maths = Math.cos(maths)}
    
     else{maths = Math.cos(maths * Math.PI/180)}
   }

   else if(actions4 === 'tan')
   { if(degreeMode.style.display === 'inline-block')
     {maths = Math.tan(maths)}
  
     else{maths = Math.tan(maths * Math.PI/180)}
   }

   /////////////////////////////////////
   ////////////////////////////////////

   else if(actions4 === 'sin-1')
   { if(degreeMode.style.display === 'inline-block')
     {maths = Math.asin(maths)}
    
     else{maths = Math.round(Math.asin(maths) * 180/Math.PI)}
   }

   else if(actions4 === 'cos-1')
   { if(degreeMode.style.display === 'inline-block')
     {maths = Math.acos(maths)}
    
     else{maths = Math.round(Math.acos(maths) * 180/Math.PI)}
   }

   else if(actions4 === 'tan-1')
   { if(degreeMode.style.display === 'inline-block')
     {maths = Math.atan(maths)}
    
     else{maths = Math.round(Math.atan(maths) * 180/Math.PI)};
   }

   else if(actions4 === 'log10x')
   {maths = Math.log10(maths)}

   else if(actions4 === 'log')
   {maths = Math.log(maths)}  

    resizing();
    resizing2();

    document.querySelector('.display2').value = maths;
  }
  



 function mathFunc(value1)
   {maths += value1;
     resizing(); 
     resizing2();

     document.querySelector('.display1').value = maths;

     localStorage.setItem('maths', JSON.stringify(maths));
   }


 function equalTo()
   {maths = eval(maths); 
    
     resizing();
     resizing2();

     document.querySelector('.display2').value = maths;

     localStorage.setItem('maths', JSON.stringify(maths));
    }


 function piPI(pi)
   {maths = maths * Math.PI;
     resizing();
     resizing2();
     document.querySelector('.display2').value = maths;
   }



 function power(value2)
   {if(value2 === 'power2')
     {maths = Math.pow(maths,2)}

     else if(value2 === 'power3')
     {maths = Math.pow(maths,3)}

     else if(value2 === 'sqrt')
     {maths = maths = Math.sqrt(maths)}

     else{maths = 3*(Math.sqrt(maths))};

     resizing();
     resizing2();
     
     document.querySelector('.display2').value = maths;

     localStorage.setItem('maths', JSON.stringify(maths));
   }


 function percenTage()
   {maths = maths/100;
     document.querySelector('.display2').value = maths;
     resizing();
     resizing2();
   }

 function bracket(actionss)
    {maths += actionss;
      document.querySelector('.display1').value = maths; 
      resizing();
      resizing2();
    }

   
 function resetCalc()
   {maths = '';
   document.querySelector('.display1').value = 0;
   document.querySelector('.display2').value = '';

   resizing();
   resizing2();
   localStorage.setItem('maths', JSON.stringify(maths));
  }


 function delBtn()
   {let display = document.querySelector('.display1');
    display.value = display.value.substring(0,display.value.length - 1);

    maths = display.value;

    resizing();
    resizing2();
 
    localStorage.setItem('maths', JSON.stringify(maths));};










  let current = new Date()
  console.log(current)

  let date = new Date().toLocaleDateString();
  console.log(date)


  let time = new Date().toLocaleTimeString();
  console.log(time)


  console.log(Math.asin(0.8660 )* 180/Math.PI)




    

  const currentDate = new Date();
  const dateOptions = new Intl.DateTimeFormat('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit'});

   const formattedDate = dateOptions.format(currentDate).replace(/\//g,'-');

   console.log(formattedDate)





  
