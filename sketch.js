const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world,rand,image,infected,doctor,doctorimg,infectedimg;


function preload(){
    infectedimg=loadImage("corona.png")
    doctorimg=loadImage("doctor.png")
}
function setup(){
createCanvas(900,500)

engine=Engine.create()
world=engine.world

npc1=new npc(random(20,700),random(20,500))
npc2=new npc(random(20,700),random(20,500))
npc3=new npc(random(20,700),random(20,500))
npc4=new npc(random(20,700),random(20,500))
npc5=new npc(random(20,700),random(20,500))

infected=Bodies.rectangle(500,300,10,10,{isStatic:true})
doctor=Bodies.rectangle(300,300,30,30,{isStatic:true})

World.add(world,infected)
World.add(world,doctor)
}

function draw(){
    background("red")
    Engine.update(engine)
    text(mouseX+","+mouseY,mouseX,mouseY)
//------------npc creation-------------------------


    image(doctorimg,doctor.position.x,doctor.position.y,200,200)
    image(infectedimg,infected.position.x,infected.position.y,75,75)
//------------------doctor controls---------------
        if(keyDown("w")){
            doctor.position.y-=5
        }
        if(keyDown("a")){
            doctor.position.x-=5
        }   
        if(keyDown("s")){
            doctor.position.y+=5
        }    
        if(keyDown("d")){
            doctor.position.x+=5
        }
//---------------covid controls----------------------
        if(keyDown("UP")){
            infected.position.y-=5
        }
        if(keyDown("down")){
            infected.position.y+=5
        }

        if(keyDown("left")){
            infected.position.x-=5
        }
        if(keyDown("right")){
            infected.position.x+=5
        }
//------------------npc--------------------------------------
       
            npc1.displayman()
  
            npc2.displayman2()

   
            npc3.displayman3()

   
            npc4.displayman4()
           
        if(frameCount%100===0){
           npc1.reset()
           npc2.reset()
           npc3.reset()
           npc4.reset()
         
           npc1=new npc(random(20,700),random(20,400))
           npc2=new npc(random(20,700),random(20,400))
           npc3=new npc(random(20,700),random(20,400))
           npc4=new npc(random(20,700),random(20,400))
        
        }
}