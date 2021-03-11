var player
var ground
function setup(){
    createCanvas(1600,800)
    player = createSprite(20,750,20,20) 

    ground= createSprite(800,795,1600,5) 
    s1 = createSprite(200,680,150,5) 
    s2 = createSprite(400,690,150,5) 
    s3 = createSprite(700,660,150,5) 
    s4 = createSprite(1000,670,150,5) 

    s5 = createSprite(300,590,150,5) 
    s6 = createSprite(500,570,150,5) 
    s7 = createSprite(800,560,150,5) 
    s8 = createSprite(1100,600,150,5) 

    s9 = createSprite(200,410,150,5) 
    l1 = createSprite(370,580,10,20)
    l2 = createSprite(360,583,10,10) 
    s10 = createSprite(550,400,150,5) 
    s11 = createSprite(760,380,150,5) 
    s12 = createSprite(970,410,150,5) 
    s13 = createSprite(1180,400,150,5) 
    s14 = createSprite(1390,410,150,5) 
   // s15 = createSprite(365,440,15,5) 

    s15 = createSprite(1300,680,150,5) 
    s16 = createSprite()
    
 

    

}




function draw(){
background(0)
textSize(15)
text("x:"+mouseX,50,40)
text("y:"+mouseY,50,55)

player.collide(ground)
player.collide(s1)
player.collide(s2)
player.collide(s3)
player.collide(s4)
player.collide(s5)
player.collide(s6)
player.collide(s7)
player.collide(s8)
player.collide(s9)
player.collide(l1)
player.collide(l2)
player.collide(s10)
player.collide(s11)
player.collide(s12)
player.collide(s13)
player.collide(s14)
player.collide(s15)
player.collide(s16)
//player.collide(s17)
//player.collide(s18)
//player.collide(s19)




if(keyDown("UP_ARROW")){
    jump()
}
if(keyWentDown("RIGHT_ARROW")){
    player.velocityX=5
}
if(keyWentUp("RIGHT_ARROW")){
    player.velocityX=0
}
if(keyWentDown("LEFT_ARROW")){
    player.velocityX=-5
}
if(keyWentUp("LEFT_ARROW")){
    player.velocityX=0
}

player.velocityY=player.velocityY+1



drawSprites()
}

function jump(){
    //player.y+=5
    player.velocityY=-16
   
}
