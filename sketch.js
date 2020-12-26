var ground1
var rod,rod1,rod2,rod3,rod4
var pink1,pink2,pink3,pink4,pink5,pink6
var pink7 ,pink8,pink9,pink10,pin11,pink12
var pink13,pink14,pink15,pink16,pink17,pink18
var part1
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

var particles=[]
var plinkos=[]
var divisions=[]

var divisionHeight=300


  //for(var i=0;i<=width;i=i+80){
    //divisions.push(new Divisions(i,height-divisionHeight/2,10,divisionHeight))
 //}


function setup() {
  createCanvas(600,700);



  engine= Engine.create();
  world = engine.world;


  for(var j=40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,75))
     }
     
  ground1=new Ground(400,680,800,20)
  //rod=new Divisions(400,580,20,200)
/// rod1=new Divisions(200,580,20,200)
 ///rod2=new Divisions(300,580,20,200)
 //rod3=new Divisions(500,580,20,200)
 ///rod4=new Divisions(100,580,20,200)
 
 
 //pink1=new Plinko(550,400,20)
//pink3=new Plinko(350,400,20)
 //pink4=new Plinko(250,400,20)
 //pink5=new Plinko(150,400,20)
// pink6=new Plinko(50,400,20)

 //pink7=new Plinko(50,300,20)
 //pink8=new Plinko(120,300,20)
 //pink9=new Plinko(200,300,20)
 //pink10=new Plinko(270,300,20)
 //pink11=new Plinko(350,300,20)
 //pink12=new Plinko(450,300,20)

 //pink13=new Plinko(50,200,20)
 //pink14=new Plinko(150,200,20)
 //pink15=new Plinko(250,200,20)
// pink16=new Plinko(350,200,20)
 //pink17=new Plinko(450,200,20)
// pink18=new Plinko(550,200,20)
  //createSprite(400, 200, 50, 50);

  
  Engine.run(engine);


	
  
}




function draw() {
  
  background('black');  
  drawSprites();

 

ground1.display()
 //rod.display()
// rod1.display()
 //rod2.display()
// rod3.display()
// rod4.display()
// pink1.display()
 //pink2.display()
 //pink3.display()
 //pink4.display()
 //pink5.display()
 //pink6.display()
 //pink7.display()
 ///pink8.display()
 //pink9.display()
 //pink10.display()
 //pink11.display()
 //pink12.display()
 //pink13.display()
 //pink14.display()
 //pink15.display()
// pink16.display()
 //pink17.display()
 //pink18.display()

 for(var j=0;j<plinkos.length;j++){
   particles[j].display()
 }
}









