var canvas, surface1, surface2, rightEdge, topEdge;
var music, surface3, surface4, box, leftEdge, music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(690, 580, 200, 20);
    surface2 = createSprite(480, 580, 200, 20);
    surface3 = createSprite(270, 580, 200, 20);
    surface4 = createSprite(60, 580, 200, 20);
    rightEdge = createSprite(800, 300, 1, 600);
    leftEdge = createSprite(0, 300, 1, 600);
    topEdge = createSprite(400, 0, 800, 1);

    surface1.shapeColor = "Blue";
    surface2.shapeColor = "yellow";
    surface3.shapeColor = "red";
    surface4.shapeColor = "orange";

    rightEdge.visible = false;
    leftEdge.visible = false;
    topEdge.visible = false;
    //create box sprite and give velocity
    box = createSprite(random(20, 750), 300, 20, 20);
    box.shapeColor = "white";
    box.velocityY = 2;
    box.velocityX = 3;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites();
    box.bounceOff(rightEdge);
    box.bounceOff(leftEdge);
    box.bounceOff(topEdge);

    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box)){
        box.shapeColor = "blue";
        box.bounceOff(surface1);
    } else if(surface2.isTouching(box)){
        box.shapeColor = "yellow";
        box.bounceOff(surface2);
        music.loop();
    } else if(surface3.isTouching(box)){
        box.shapeColor = "red";
        box.bounceOff(surface3);
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
    } else if(surface4.isTouching(box)){
        box.shapeColor = "orange";
        box.bounceOff(surface4);
    } else{
        
    }

    drawSprites();
}
