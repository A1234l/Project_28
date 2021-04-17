class Launcher{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB
        }
        this.bodyA = bodyA;
        this.pointB = pointB;
        this.launcher = Constraint.create(options);
        World.add(world,this.launcher);
    }
    fly(){
        this.launcher.bodyA = null;
    }
    display(){
        if(this.launcher.bodyA){
            var bodyA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(5);
        line(bodyA.x,bodyA.y,pointB.x,pointB.y);
        }
    }
}