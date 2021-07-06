class Particle {
    constructor(x, y, r){
        var options = {
            // add restitution as the particles will bounce between the plinkos
            restitution: 0.4
           // isStatic: false // need not to give this
        }

        // add radius that you will capture during sketch file
        this.r = r;

    this.body = Bodies.circle(x, y, this.r, options)
    this.color = color(random(0, 255), random(0,255), random(0, 255))
    World.add(world, this.body)
    }
    
    display() {
   // capture the position and angle for the particles like we did for log class in angry bird game
/*
1. create namespace for position and angle.
2.use push pop and in between that use translate and rotate property
3.then use ellipse property to display the particle and use ellipsemode center
and also give color to it using fill(this.color) as it will provide random
colors to  the particles
4. or you can just check the plinko class display code...its exactly the same way you have to write over here. :)
    }
}

