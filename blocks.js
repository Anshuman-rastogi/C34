class Blocks{

    constructor(x,y){

        var options ={
            isStatic:false,
            restitution:0.5,
            friction:0.5,
            density:2
        }
        this.w = 50;
        this.h = 70;
        this.body = Bodies.rectangle(x, y, this.w, this.h, options);
        World.add(world, this.body);
    }

    display(){

        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(this.body.angle);

        fill("green");
        rectMode(CENTER);
        rect(0, 0, this.w, this.h);
        pop();
    }
}