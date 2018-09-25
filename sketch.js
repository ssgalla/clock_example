//Shaminder Galla
//Clock

function setup() {
    createCanvas(800, 800);
    angleMode(DEGREES);
}

function draw() {
    background(0);
    translate(400, 400);
    rotate(-90);

    //time variables - calling hours, minutes and seconds from p5.js
    let hr = hour();
    let mn = minute();
    let sc = second();

    //arc mapped to seconds 
    strokeWeight(10);
    stroke(255, 100, 150);
    noFill();
    let secAngle = map(sc, 0, 60, 0, 360);
    arc(0, 0, 600, 600, 0, secAngle)

    //line moving in co-ordination with the arc secAngle
    push();
    rotate(secAngle);
    stroke(255, 100, 150);
    line(0, 0, 200, 0);
    pop();

    //arc mapped to minutes
    strokeWeight(5);
    stroke(205, 100, 150);
    noFill();
    let minAngle = map(mn, 0, 60, 0, 360);
    arc(0, 0, 550, 550, 0, minAngle);

    //line moving in co-ordination with the arc minAngle
    push();
    rotate(minAngle);
    stroke(205, 100, 150);
    line(0, 0, 175, 0);
    pop();

    //arc mapped to hours
    strokeWeight(5);
    stroke(155, 100, 150);
    noFill();
    let hourAngle = map(hr % 12, 0, 12, 0, 360);
    arc(0, 0, 500, 500, 0, hourAngle);

    //line moving in co-ordination with the arc hourAngle
    push();
    rotate(hourAngle);
    stroke(155, 100, 150);
    stroke(255);
    line(0, 0, 150, 0);
    pop();

    //circle in center
    strokeWeight(10);
    stroke(205, 100, 150);
    point(0, 0);

    //show the time written inside clock
    fill(255);
    noStroke();
    rotate(90);
    text(hr + ':' + mn + ':' + sc, -62.5, 100);
    textSize(30);

    //show the date written inside clock
    fill(255);
    noStroke();
    rotate(360);
    text(day() + '/' + month() + '/' + year(), -72.5, 150);
    textSize(30);

    
}