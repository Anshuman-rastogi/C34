class Roof{

    constructor(x, y, w, h){

        var options ={
            isStatic:false,
            restitution:0.5,
            friction:0.5,
            density:2
        }
        this.w = w;
        this.h = h;
        this.body = Bodies.rectangle(x, y, this.w, this.h, options);
        this.image = loadImage("trgl.png");
        World.add(world, this.body);

    }

    display(){

        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(this.body.angle);

        imageMode(CENTER);
        image(this.image, 0, 0, this.w, this.h);
        pop();

    }

}