class Dino {
  constructor() {
    this.w = 100;
    this.x = 0;
    this.y = height - this.w;
    this.v = 0;
    this.gravity = 1.0;
  }
  
  hits(cactus) {
   
 let hit =   collideRectRect(this.x,this.y,this.w,this.w,cactus.x,cactus.y,cactus.w,cactus.w);
 return hit;
  }
  show() {
    image(dino_image, this.x, this.y, this.w, this.w);
    noFill();
    rect(this.x,this.y,this.w,this.w);
  }
  
  move() {
    this.y = this.y + this.v;
    this.v = this.v + this.gravity;
    this.y = constrain(this.y,0,height - this.w);
    
  }
  
  jump() {
    this.v = -20;
  }

}