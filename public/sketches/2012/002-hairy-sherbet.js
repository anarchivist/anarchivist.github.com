void setup() {
    size(500, 500); 
    smooth();
    noStroke();
    frameRate(30);
    background(255);
} 

int ystart = 0;
int xstart = 0;
int yvelocity = 1;
int xvelocity = 2;
int x = 0;
int y = 0;

void draw() {
  xstart = (frameCount * 0.0083)+random(50,300);
  ystart = xstart + 20;
  x = noise(xstart) * width;
  y = noise(ystart) * height;
  if ((frameCount % 3) == 0){
    bezier(
      xstart, ystart,
      xstart+(random(50,500)*xvelocity), ystart+(random(50,500)*yvelocity),
      x-(random(50,500)*xvelocity), y-(random(50,500)*yvelocity),
      x, y
    );
  }
  if ((frameCount % 7) == 0) {
    stroke(0);
    curve(xstart, ystart,
      xstart-(random(2,30)*xvelocity), ystart-(random(2,30)*yvelocity),
      x+(random(2,60)*xvelocity), y+(random(2,30)*yvelocity),
      x, y
    );
    noStroke(0);
  }
  fill(random(128,255), random(128,255), random(192,255), random(0,255));
  updateVelocities();
}

void updateVelocities() {
  xvelocity = (int)(((x - xstart)/100.0));
  yvelocity = (int)(((y - ystart)/100.0));
}