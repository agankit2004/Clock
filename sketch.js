function setup() {
 let a =  createCanvas(700, 700);
  angleMode(DEGREES);
  
  
}


var x = 50;
var y = 200;
function draw() {
  

   background(0);
  
  let h = hour();
  let m = minute();
  let s = second();
  let H ;
 
  



   
  
  
    if(h > 11){
      stroke(255);
      strokeWeight(2)
      textSize(20);
     if(h == 12){ 
      text("12" +":"+ m  + " PM" ,300,height/2)
      strokeWeight(15);
      noFill();
       H = h-12;
       stroke(55,0,255); // blue
       arc(width/2,height/2,300,300,270,275);
     }
      if(h==24){
        
        text((h-12) +":"+ m  + " AM" ,300,height/2)
        strokeWeight(15);
        noFill();
       
        stroke(55,0,255); // blue
        arc(width/2,height/2,300,300,270,275);
        
        
        
        
      }
      else{
       text((h-12) +":"+ m  + " PM" ,300,height/2)
       strokeWeight(15);
       noFill();
       H = h-12;
       stroke(55,0,255); // blue
       arc(width/2,height/2,300,300,270,(H-3)*30);
      }
    }
  else{
     stroke(255);
     strokeWeight(2)
     textSize(20);
     text(h +":"+ m  + " AM" ,300,height/2)
     strokeWeight(15);
     noFill();
     stroke(55,0,255); // blue
     arc(width/2,height/2,300,300,270,(h-3)*30);
    
    
  }

  stroke(255,0,255); // Pink
 
   arc(width/2,height/2,400,400,270,(s-15)*6);
   stroke(51,255,51); // green
  arc(width/2,height/2,350,350,270,(m-15)*6);
  
 
  strokeWeight(2)
  stroke(255);
  textSize(100);
  
  text("CLOCK",170,80);
  textSize(30);
  text("1",470,160);
  text("2",550,250);
  text("3",575,355);
  text("4",550,480);
  text("5",450,573);
  text("6",335,600);
  text("7",213,570);
  text("8",125,460);
  text("9",100,355);
  text("10",115,247);
  text("11",220,150);
  text("12",330,120);
  
  
}