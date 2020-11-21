class Rope{

    constructor(bodyA, pointB){

        var options ={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.2,
            length:350
        }

        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    display(){

        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.pointB;

        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        
    }
}