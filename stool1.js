class stool1{
    constructor(){ 
        var options={
            isStatic:true
        }    
     this.bodies6=Bodies.rectangle(350,285,50,100,options) 
     this.w=50
     this.h=100
     World.add(world,this.bodies6)  
    }
    display(){
    rect(this.bodies6.position.x,this.bodies6.position.y,this.w,this.h)
    fill("black")
    }
}