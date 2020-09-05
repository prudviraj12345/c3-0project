class Block {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }





    display(){

      console.log(this.body.speed);

        if(this.body.speed<2){

        
        }
          
         else{

          World.remove(world, this.body);

       var pos =this.body.position;
       push();
      rectMode(CENTER);
      fill("blue");
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
  }
  };
