class Bob{
    constructor(x,y){
        var options={
            isStatic: false,
            restitution:0.3,
            friction:5,
            density:1.2

        }
        this.radius=40;
        this.body=Bodies.circle(x,y,this.radius,options)
         World.add(world,this.body);

    }
display(){
   
    var pos=this.body.position
    var angle=this.body.angle
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    fill("magenta");
    ellipseMode(CENTER)
    ellipse(0,0,this.radius);
    pop();
}
}