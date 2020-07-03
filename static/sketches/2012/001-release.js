ArrayList points;
ArrayList getPoints() { return points; }
points = new ArrayList();

class Point {
  int x,y;
  Point(int x, int y) { this.x=x; this.y=y; }
  void draw() { ellipse(x,y,10+xvelocity,10+yvelocity); }
}

void setup() {
    size($('#content').width(), 500); 
    smooth();
    stroke(0);
    frameRate(30);
} 

int ystart = 0;
int xstart = 0;
int yvelocity = 1;
int xvelocity = 2;
int numClicks = 0;
int startX = 0;
int startY = 0;
int endX = 0;
int endY = 0;
boolean dragging = false;
boolean first = true;

void draw() {  // this is run repeatedly.  
    background(150);
    drawXLines();
    drawYLines();
    drawTool();
    for(int p=0, end=points.size(); p < end; p++) {
        Point pt = (Point) points.get(p);
        if(p < end-1) {
            Point next = (Point) points.get(p+1);
            line(pt.x,pt.y,next.x,next.y); }
        pt.draw(); }
    update();
}

void drawXLines() {
  stroke(0);
  for(int x = 0; x <= width; x += 10) {
    line(x+xstart, 0, x+xstart, height);
  }
}

void drawYLines() {
  stroke(0);
  for(int y = 0; y <= height; y += 10) {
    line(0, y+ystart, width, y+ystart);
  }
}

void drawTool () {
  if (dragging) {
    // fanciful!!!
    float d = dist(startX, startY, endX, endY);
    stroke((int)(255*(d/100.0))-random(0,255), (int)(255*(d/100.0))-random(0,255), random(0,255));
    line(startX, startY, endX, endY);
    new Point(endX,endY);

  }
}

void update() {
  ystart = (ystart + yvelocity) % 10;
  xstart = (xstart + xvelocity) % 10;
}

void updateVelocities() {
  endX = mouseX;
  endY = mouseY;
  xvelocity = (int)(((endX - startX)/100.0)*5.0);
  yvelocity = (int)(((endY - startY)/100.0)*5.0);
}

void mousePressed() {
  if (first) {
    startX = mouseX;
    startY = mouseY;
    points.add(new Point(mouseX,mouseY));
    first = false;
  }
  thispt = new Point(mouseX,mouseY);
  thispt.draw();
}

void mouseDragged() {
  dragging = true;
  fill(random(128,255), random(128,255), random(192,255));
  updateVelocities();
  thispt = new Point(mouseX,mouseY);
  thispt.draw();
}

void mouseReleased() {
  dragging = false;
  updateVelocities();
  points.add(new Point(mouseX,mouseY));
  startX = mouseX;
  startY = mouseY;
}