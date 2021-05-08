class Bar{
    constructor(x,y){
        var options={
            isStatic: true,
            restitution:0.3,
            friction:0.5,
            density:1.2

        }

        this.body=Bodies.rectangle(x,y,215,20,options);
        this.width=215;
        this.height=20;
        World.add(world,this.body);
    }
display(){
    var pos=this.body.position
    var angle=this.body.angle
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    fill("black");
    rect(0,0,this.width,this.height);
    pop();
}
    
}