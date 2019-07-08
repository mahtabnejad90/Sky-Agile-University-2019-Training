   function displaycalculator(val) 
         { 
             document.getElementById("total").value+=val 
         } 
           
         function calculateValues() 
         { 
             let x = document.getElementById("total").value 
             let y = eval(x) 
             document.getElementById("total").value = y 
         } 
           
         //function that clear the display 
         function cleardisplay() 
         { 
             document.getElementById("total").value = "" 
         } 
