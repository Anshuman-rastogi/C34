class Ball{

    constructor(x, y){

        var options ={
            isStatic:false,
            restitution:0.4,
            density:1,
            friction:0.6
        }

        this.r = 90;
        this.body = Bodies.circle(x, y, this.r, options);
        World.add(world, this.body);
    }

    display(){

        var pos = this.body.position;

        fill(137, 136, 136);
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, this.r, this.r);
    }
}