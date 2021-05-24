class npc{
constructor(x,y){
var options={
    isStatic:true
}
this.body=Bodies.rectangle(x,y,20,20,options)
World.add(world,this.body)
this.man=loadImage("man.png")
this.man2=loadImage("man2.png")
this.man3=loadImage("man3.png")
this.man4=loadImage("man4.png")

}
displayman(){
        imageMode(CENTER)
    var pos=this.body.position
    image(this.man,pos.x,pos.y,120,120)

}
displayman2(){
    imageMode(CENTER)
var pos=this.body.position
image(this.man2,pos.x,pos.y,120,120)

}
displayman3(){
    imageMode(CENTER)
var pos=this.body.position
image(this.man3,pos.x,pos.y,80,80)

}
displayman4(){
    imageMode(CENTER)
var pos=this.body.position
image(this.man4,pos.x,pos.y,80,80)

}
reset(){
    World.remove(world,this.body)
}
}