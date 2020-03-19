class Cactus {
 constructor() {
  this.w = 50;
  this.x = width;
   this.y = height - this.w;
 }
  show() {
   image(cactus_image,this.x,this.y,this.w,this.w);
    noFill();
    rect(this.x,this.y,this.w,this.w);
  }
  move() {
    this.x = this.x - 8;
  }

}