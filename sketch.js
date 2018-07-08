
function setup() {
  //sky
  createCanvas(680, 680);
  background(130, 206, 245);

  //ground
  noStroke();
  fill(51, 153, 102);
  rect(-10, 600,860, 600);

  //individual grass
  drawGrass();
}
//============================================

function draw(){
  //flags and strings
  drawStrings();

  //yellow body
  noStroke();
  strokeWeight(4);
  fill(color(255, 255 , 133));
  rect(280, 90, 95, 505);

  //dividing lines
  drawlines();

  //side decoration
  stroke(color(255,78,78));
  strokeWeight(4);
  rect(280, 90, 15, 505); //left
  rect(370, 90, 15, 505); //right

  //center line
  stroke(134,98,78);
  line(332, 90, 332, 595);

  //bell
  stroke(color(136,137,138));
  fill(color(166,167,178));
  ellipse(332, 60, 90, 90);

  //bell center
  ellipse(332, 60, 10, 10);

  //slamming spot
  noStroke();
  fill(0);
  rect(280, 570, 105, 55, 20);

  //box
  stroke(color(255,78,78));
  fill(color(255, 255, 133));
  rect(260,596,146,50);
  pointsText();

  //interactive puck
  drawPuck();

}
//============================================

//draws height lines
function drawlines(){
  stroke(0);
  for(var i = 0; i < 450; i = i + 45){
    line(298, 135 + i, 380, 135 + i);
  }
}

var num = 0;
//creates and moves the puck
function drawPuck(){
  //color the puck
  stroke(color(136,137,138));
  fill(color(166,167,178))
  if(mouseX > 280 && mouseX < 280 + 105 && mouseY > 570 && mouseY < 570 + 50){
  if(mouseIsPressed){
        coverWin();
        //recolor the puck
        stroke(color(136,137,138));
        fill(color(166,167,178))

        //move puck up until reaches bell
        num += PI;
        if(!(num > 450)){
            ellipse(332, 561 - num, 15, 15);
        }
        else{
            textSize(45);
            smooth();
            fill(255);
            noStroke();
            textFont('Palatino');
            text('You win!', 14, 80);
        }
    }
    else{
      num = 0;
      ellipse(332, 561, 15, 15);
    }
  }
}

//cover up win screen
function coverWin() {
  noStroke();
  fill(130, 206, 245);
  rect(0,0,190,85);
}

//draws indivual grass
function drawGrass(){
  noFill();
  strokeWeight(3);
  for(var i = 0; i < 700; i = i + 15){
    if(i % 2 == 0){
      stroke(57, 172, 115);
      for(var j = 0; j < 700; j = j + 20){
        arc(40 + i, 602 + j, 70, 70, PI, PI + QUARTER_PI);
      }
    }
    else{
      stroke(0, 134, 89);
      for(var j = 0; j < 700; j = j + 20){
        arc(i - 45, 587 + j, 50, 50, 0, QUARTER_PI);
      }
    }
  }
}

//draws strings and triangle flags
function drawStrings(){
  noFill();
  stroke(255);
  strokeWeight(1);
  smooth();
  line(370,0,800,435);
  line(290,0,0,285);
  line(370,0,800,200);
  line(290,0,0,500);

  for(var i = -20; i < 1000; i = i + 60){
    fill(255, 80, 80);
    noStroke();
    smooth();
    triangle(200 - i, 81 + i, 258 - i, 20 + i, 286 - i, 75 + i);
    triangle(388 + i, 17 + i, 450 + i, 75 + i, 398 + i, 81 + i);
  }
}

//places values on machine
function pointsText(){
  fill(255);
  textSize(12);
  textFont('Helvetica');

  //red
  if(num < 20) fill(241, 136, 113);
  text('100       100', 300, 530);

  //orange
  if(num < 60) fill(239, 162, 85);
  text('200       200', 300, 485);

  //yellow
  if(num < 110) fill(243, 230, 77);
  text('300       300', 300, 440);

  //light green
  if(num < 160) fill(54, 234, 75);
  text('400       400', 300, 395);

  //turquoise
  if(num < 200) fill(54, 234, 201);
  text('500       500', 300, 350);

  //turquoise
  if(num < 242) fill(77, 243, 207);
  text('600       600', 300, 305);

  //light blue
  if(num < 285) fill(77, 210, 243);
  text('700       700', 300, 260);

  //blue
  if(num < 330) fill(171, 162, 247);
  text('800       800', 300, 215);

  //purple
  if(num < 375) fill(221, 162, 247);
  text('900       900', 300, 170);

  //pink
  if(num < 420) fill(238, 162, 247);
  text('1000   1000', 300, 125);
}
