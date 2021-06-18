var number1, number2,input1,input2;
var b1,b2,b3,b4;

function add(){
    console.log(number1 + number2);
}

function multiply(){
  console.log(number1 * number2);
}

function subtract(){
  console.log(number1 - number2);


}

function divide(){
  console.log(number1/number2);


}

function setup() {
  createCanvas(400, 400);

  input1 = createInput();
  input1.position(5,60);

  input2 = createInput();
  input2.position(200,60);

  b1 = createButton("ADD");
  b1.position(10,200);
  b1.mousePressed(add);

  b2 = createButton("MUTLIPLY");
  b2.position(80,200);
  b2.mousePressed(multiply);

  b3 = createButton("SUBTRACT")
  b3.position(180,200)
  b3.mousePressed(subtract)

  b4 = createButton("DIVIDE")
  b4.position(280,200)
  b4.mousePressed(divide)

}


function draw() {
  background(200,16,200);

  text("Number 1",70,50);
  text("Number 2", 250,50);

  //console.log(input1.value());
  //parseInt() ===> converts string type data inside text box into a interger number(means whole number)

  number1 = parseInt(input1.value());
  number2 = parseInt(input2.value());
}