function setup() {
  //sky
  createCanvas(680, 680);
  background('rgba(0,150,255, 0.5)');

  //ground
  noStroke();
  fill(51, 153, 102);
  rect(-10, 600,860, 600);

  drawGrass();
}

function draw(){
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

  drawPuck();

}

function drawlines(){
  stroke(0);
  for(var i = 0; i < 450; i = i + 45){
    line(298, 135 + i, 380, 135 + i);
  }
}

function drawPuck(){
  stroke(color(136,137,138));
  fill(color(166,167,178))
  if(mouseIsPressed){
    if(mouseButton == LEFT){
        ellipse(332, 561 - 100, 15, 15);
    }
  }
   else ellipse(332, 561, 15, 15);
}

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

function pointsText(){
  text('100       100', 300, 530);
  text('200       200', 300, 485);
  text('300       300', 300, 440);
  text('400       400', 300, 395);
  text('500       500', 300, 350);
  text('600       600', 300, 305);
  text('700       700', 300, 260);
  text('800       800', 300, 215);
  text('900       900', 300, 170);
  text('1000   1000', 300, 125);
}
