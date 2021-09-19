class Boat {
    constructor(x, y, width, height,pos,boatAnimation) {
      var options = {
        restitution: 0.8,
        friction: 1.0,
        density: 1.0
      };
      this.animation=boatAnimation;
      this.boatImage = loadImage("assets/boat.png");
      this.width = width;
      this.height = height;
      this.speed=0.05;
      this.pos=pos;
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      World.add(world, this.body);
    }
    display() {
      var pos = this.body.position;
      var angle = this.body.angle;
      var index= floor(this.speed%this.animation.length)
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.animation[index], 0,this.pos, this.width, this.height);
      pop();
    }
     remove(index){
       this.animation=bbanimation;
       this.speed=0.05;
       this.width=300;
       this.height=300;
       this.isBroken=true;
       setTimeout(()=>{
        Matter.World.remove(world,boats[index].body);
        boats.splice(index,1);
       },2000)
     
     }
     animate(){
       this.speed+=0.05%1.1;
     }
  }
  