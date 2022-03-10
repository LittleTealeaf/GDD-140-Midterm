/// <reference path="./libraries/p5.global-mode.d.ts" />

var colorA = "HotPink"
var colorB = "MediumSlateBlue"
var currentColor;

var size = 20;
var brushSize = false;

function setup() {
  print("setup")
  createCanvas(150, 300);
  currentColor = color(0,0,0,0);
}

function draw() {
  //Draw the grid
  print("draw");
  stroke('black');
  strokeWeight(2);
  for(var i = 0; i < 3; i++) {
    print("row " + i);
    for(var j = 0; j < 3; j++) {
      print("row " + i + " column " + j);
      //Alternate colors
      fill((i + j)%2==0 ? colorA : colorB);
      rect(i * 50,j * 50,50,50);
    }
  }
  //Draw the center ellipse
  fill('grey');
  ellipse(75,75,size);
  //Draw the text
  noStroke();
  fill('black');
  text("Color ?",5,140);
  text("Color ?",105,140);
  text("Erase",58,140);
}

function mousePressed() {
  print("mousePressed");
  
  if(mouseY > 150) {
    //If it's in the paint area
    noStroke();
    fill(currentColor);
    ellipse(mouseX,mouseY,size);
  } else {
    //If it's in the top grid, figure out the x and y positions on the grid that the mouse is
    var x = int(mouseX / 50);
    var y = int(mouseY / 50);
    if(y == 2) {
      //If it's on the last row
      if(x == 0 || x == 2) {
        //Random Color
        currentColor = color(random(0,255),random(0,255),random(0,255),random(0,255));
      } else {
        //Erase Board
        setup();
      }
    } else if(y == 1 && x == 1) {
      //Switch colors
      if(size == 20) {
        size = 40;
      } else {
        size = 20;
      }
    } else {
      //Set Color
      currentColor = ((y + x)%2==0) ? colorA : colorB;
    }
  }
}