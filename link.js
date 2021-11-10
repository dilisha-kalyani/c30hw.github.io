class Link {
    constructor( bodyA, bodyB){
    var lastlink = bodyA.body.bodies.length-2;
    this.link = Constraint.create({
    bodyA: body.body.bodies[lastlink],
    pointA: { x: 0, y:0},
    bodyB: bodyB.body,
    pointB: {x:0, y:0},
    length: 10,
    stiffness: 0.8
    });
    
    World.add( world, this.link);
    }

    dettatch(){
        world.remove(world, this.link);
    }
    }