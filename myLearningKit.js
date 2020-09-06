

function p01Func() {

   document.getElementById("problem").innerHTML="<p>Add two numbers together and output the sum</p>";
   document.getElementById("flowchart").setAttribute("src","images/sumflowchart.jpg");
   document.getElementById("flowchart").style.display="none";
   document.getElementById("js").setAttribute("src","images/sumjs.jpg");
   document.getElementById("js").style.display="none";
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
}

  function checkUncheck1(){
    if (document.getElementById("check1").checked==true) {
       // add a getElementById here to get "flowchart" img and 
       // set the display property of its style to "inline"	 
  
       document.getElementById("flowchart").style.display="inline";
    }
    else {
       // add a getElementById here to get "flowchart" img and 
       // set the display property of its style to "none"	 
       document.getElementById("flowchart").style.display="none";
        
       
    }
  }
 
  
 
  function checkUncheck2(){
    if (document.getElementById("check2").checked==true) {
       // add a getElementById here to get "js" img and 
       // set the display property of its style to "inline"	 
       document.getElementById("js").style.display="inline";
       
    }
    else {
       // add a getElementById here to get "js" img and 
       // set the display property of its style to "none"	 
       document.getElementById("js").style.display="none";
        
    }
  }
 
  
  /* in Ex4, or step 4 of Ex2, you need to create function
     checkUncheck3, which is similar to checkUncheck 1 and 2
     
  */
 function checkUncheck3(){
    if (document.getElementById("check3").checked==true) {
       // add a getElementById here to get "js" img and 
       // set the display property of its style to "inline"	 
       document.getElementById("another").style.display="inline";
       
    }
    else {
       // add a getElementById here to get "js" img and 
       // set the display property of its style to "none"	 
       document.getElementById("another").style.display="none";
        
    }
  }
  
  
  /* in Ex4, create function p02Func similar to p01Func */
function p02Func(){
    document.getElementById("problem").innerHTML="<p>Takes 3 vertices of a triangle and calculates the area</p>";
    
    document.getElementById("flowchart").setAttribute("src","images/triangleflowchart.jpg");
    document.getElementById("flowchart").style.display="none";

    document.getElementById("js").setAttribute("src","images/trianglejs.jpg");
    document.getElementById("js").style.display="none";

    document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
    document.getElementById("another").style.display="none";
    
}  
function p03Func(){
   document.getElementById("problem").innerHTML="<p>Takes 3 coffefficents and outputs the roots</p>";
   
   document.getElementById("flowchart").setAttribute("src","images/rootsflowchart.jpg");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","images/rootsjs.jpg");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
   document.getElementById("another").style.display="none";
   
}  
function p04Func(){
   document.getElementById("problem").innerHTML="<p>Takes a number and outputs the grade</p>";
   
   document.getElementById("flowchart").setAttribute("src","images/gradeflowchart.jpg");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","images/gradejs.jpg");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
   document.getElementById("another").style.display="none";
   
}  
function p05Func(){
   document.getElementById("problem").innerHTML="<p>Takes a number and outputs if the number is positive or negative</p>";
   
   document.getElementById("flowchart").setAttribute("src","images/posnegflowchart.jpg");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","images/posnegjs.jpg");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
   document.getElementById("another").style.display="none";
   
}  

function p06Func(){
   document.getElementById("problem").innerHTML="<p>Takes numbers and outputs if the number is divisble and counts each time</p>";
   
   document.getElementById("flowchart").setAttribute("src","images/div6flowchart.jpg");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","images/div6js.jpg");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
   document.getElementById("another").style.display="none";
   
} 
function p07Func(){
   document.getElementById("problem").innerHTML="<p>Take a positive integer and outputs the digits seperately</p>";
   
   document.getElementById("flowchart").setAttribute("src","images/digitflowchart.jpg");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","images/digitjs.jpg");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
   document.getElementById("another").style.display="none";
   
}   
function p08Func(){
   document.getElementById("problem").innerHTML="<p>Takes a number and outputs number of 7s</p>";
   
   document.getElementById("flowchart").setAttribute("src","images/7digitflowchart.jpg");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","images/7digitjs.jpg");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
   document.getElementById("another").style.display="none";
   
}   
function p09Func(){
   document.getElementById("problem").innerHTML="<p>Takes a number and outputs the sum of the digits</p>";
   
   document.getElementById("flowchart").setAttribute("src","images/sumdflowchart.jpg");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","images/sumdjs.jpg");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
   document.getElementById("another").style.display="none";
   
}   
function p10Func(){
   document.getElementById("problem").innerHTML="<p>Takes a number and outputs if the reverse of the number is equal to the orignal</p>";
   
   document.getElementById("flowchart").setAttribute("src","images/rev_fc.jpg");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","images/rev_js.jpg");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
   document.getElementById("another").style.display="none";
   
}   
function p11Func(){
   document.getElementById("problem").innerHTML="<p>Takes a number and outputs the factorial</p>";
   
   document.getElementById("flowchart").setAttribute("src","images/fact_fc.jpg");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","images/fact_js.jpg");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
   document.getElementById("another").style.display="none";
   
}   
function p12Func(){
   document.getElementById("problem").innerHTML="<p>Takes a number and outputs the fibonacci</p>";
   
   document.getElementById("flowchart").setAttribute("src","images/fib_fc.jpg");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","images/fib_js.jpg");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
   document.getElementById("another").style.display="none";
   
}   
function p13Func(){
   document.getElementById("problem").innerHTML="<p>Takes a number and outputs a triangle based off of it</p>";
   
   document.getElementById("flowchart").setAttribute("src","images/tri_fc.jpg");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","images/tri_js.jpg");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
   document.getElementById("another").style.display="none";
   
}   
function p14Func(){
   document.getElementById("problem").innerHTML="<p>Takes 3 numbers and outputs number of roots</p>";
   
   document.getElementById("flowchart").setAttribute("src","images/roots_fc.jpg");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","images/roots_js.jpg");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
   document.getElementById("another").style.display="none";
   
}   
function p15Func(){
   document.getElementById("problem").innerHTML="<p>Takes a number and checks if it is prime or not</p>";
   
   document.getElementById("flowchart").setAttribute("src","images/prime_fc.jpg");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","images/prime_js.jpg");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
   document.getElementById("another").style.display="none";
   
}   
function p16Func(){
   document.getElementById("problem").innerHTML="<p>Sum of values in an array</p>";
   
   document.getElementById("flowchart").setAttribute("src","images/100_fc.jpg");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","images/100_js.jpg");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
   document.getElementById("another").style.display="none";
   
}   
function p17Func(){
   document.getElementById("problem").innerHTML="<p>Subalgorith that checks if the number is prime</p>";
   
   document.getElementById("flowchart").setAttribute("src","images/primed_fc.jpg");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","images/primed_js.jpg");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
   document.getElementById("another").style.display="none";
   
}   
function p18Func(){
   document.getElementById("problem").innerHTML="<p>Calculates the factorial of a number</p>";
   
   document.getElementById("flowchart").setAttribute("src","images/fact_fc.jpg");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","images/fact_js.jpg");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
   document.getElementById("another").style.display="none";
   
}   
function p19Func(){
   document.getElementById("problem").innerHTML="<p>Calculates the area of a rectangle</p>";
   
   document.getElementById("flowchart").setAttribute("src","images/area_fc.jpg");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","images/aread.jpg");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
   document.getElementById("another").style.display="none";
   
}   
function p20Func(){
   document.getElementById("problem").innerHTML="<p>Checks if number is a power of 2</p>";
   
   document.getElementById("flowchart").setAttribute("src","images/power_fc.jpg");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","images/power_js.jpg");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
   document.getElementById("another").style.display="none";
   
}   


function p21Func(){
   document.getElementById("problem").innerHTML="<p>Devise a program to receive a positive whole number and output its binary representation</p>";
   
   document.getElementById("flowchart").setAttribute("src","images/binary_fc.jpg");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","images/binary_js.jpg");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
   document.getElementById("another").style.display="none";
   
}   

function p23Func(){
   document.getElementById("problem").innerHTML="<p>Make a button where after 21 clicks on the button, will alert Boom!</p>";
   
   document.getElementById("flowchart").setAttribute("src","images/binary_fc.jpg");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","images/boom_js.jpg");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
   document.getElementById("another").style.display="none";
   
}   
function p24Func(){
   document.getElementById("problem").innerHTML="<p>Make a button where after you click it, the date is displayed!</p>";
   
   document.getElementById("flowchart").setAttribute("src","images/prime_fc.jpg");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","images/date_js.jpg");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
   document.getElementById("another").style.display="none";
   
}   