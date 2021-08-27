//ENJOY THE GAME


var mario;
var back, ground;
var ov, hurry, out;
var cloudG, hill, hG
var ob, obG, ob1, ob2, ob3, ob4;
var score = 0;
var PLAY = 1,
  END = 0;
var gameState = PLAY;
localStorage["hs"] = 0
var hs = localStorage["hs"]
var maryo, mayro, marioi;
var style;

var mario_run1, mario_jump1, mario_gone1, bI1;
var cloudImg1, hillImg1
var ov1, hu1, ok1

var mario_run2, mario_jump2, mario_gone1, bI2;
var cloudImg2, hillImg2
var ov2, hu2, ok2

var mario_run3, mario_jump3, mario_gone3, bI3;
var cloudImg3, hillImg3
var ov3, hu3, ok3

var mario_runw, mario_jumpw, mario_gonew, bIw;
var ovw, okw

function preload() {
  ob1 = loadImage("o_1.png");
  ob2 = loadImage("o_2.png");
  ob3 = loadImage("o_3.png");
  ob4 = loadImage("o_4.png");

  marioi = loadImage("Continue.png")

  mario_run1 = loadAnimation("Bgame style/run1.png", "Bgame style/run2.png", "Bgame style/run3.png")
  mario_jump1 = loadAnimation("Bgame style/jump.png")
  mario_gone1 = loadAnimation("Bgame style/go.png")
  ov1 = loadSound("Bgame style/01 - Super Mario Bros.mp3")
  hu1 = loadSound("Bgame style/03 - Hurry - Super Mario Bros.mp3")
  ok1 = loadSound("Bgame style/16 - Game Over.mp3")
  cloudImg1 = loadImage("Bgame style/cl_od.png")
  hillImg1 = loadImage("Bgame style/hi_l.png")
  bI1 = loadImage("Bgame style/bg (2).png")

  mario_run2 = loadAnimation("2game style/21run.png", "2game style/22run.png", "2game style/23run.png")
  mario_jump2 = loadAnimation("2game style/2jump.png")
  mario_gone2 = loadAnimation("2game style/2out.png")
  ov2 = loadSound("2game style/2 03 Overworld.mp3")
  hu2 = loadSound("2game style/2 07 Boss.mp3")
  ok2 = loadSound("2game style/2 10 Miss.mp3")
  cloudImg2 = loadImage("2game style/2cloud.png")
  hillImg2 = loadImage("2game style/2hill.png")
  bI2 = loadImage("2game style/2overworld.jpg")

  mario_run3 = loadAnimation("3game style/31run.png", "3game style/32run.png", "3game style/33run.png")
  mario_jump3 = loadAnimation("3game style/3jump.png")
  mario_gone3 = loadAnimation("3game style/3out.png")
  ov3 = loadSound("3game style/3 09 Overworld 1.mp3")
  hu3 = loadSound("3game style/3 20 Hammer Bros. Battle.mp3")
  ok3 = loadSound("3game style/3 27 You Re Dead.mp3")
  cloudImg3 = loadImage("3game style/3cloud.png")
  hillImg3 = loadImage("3game style/3hill.png")
  bI3 = loadImage("3game style/3overworld.PNG")

  mario_runw = loadAnimation("Wgame style/w1run.png", "Wgame style/w2run.png", "Wgame style/w3run.png")
  mario_jumpw = loadAnimation("Wgame style/wjump.png")
  mario_gonew = loadAnimation("Wgame style/wout.png")
  ovw = loadSound("Wgame style/11 - Athletic Bgm.mp3")
  okw = loadSound("Wgame style/2-2-68 - Player Down.mp3")
  bIw = loadImage("Wgame style/woverworld.PNG")
}


function setup() {
  createCanvas(800, 600)
  style = Math.round(random(1,4))

  back = createSprite(400, 280, 10, 10)

  ground = createSprite(400, 510, 900, 10)
  ground.visible = false

  mario = createSprite(60, 450, 10, 10);

  cloudG = new Group();
  hG = new Group();
  obG = new Group();

  mayro = createSprite(400, 330, 10, 10)
  mayro.visible = false

  maryo = createSprite(400, 230, 10, 10)
  maryo.addAnimation("dash", marioi)
  maryo.visible = false

  if (style === 1) {
    back.addImage(bI1)
    back.scale = 1.575
    back.y = 280
    mario.addAnimation("running1", mario_run1)
    mario.addAnimation("gone1", mario_gone1)
    mario.addAnimation("jumping1", mario_jump1)
    mario.scale = 0.75
    mayro.addAnimation("gone1", mario_gone1)
    ov1.play();

  }
  if (style === 2) {
    back.addImage(bI2)
    back.scale = 1
    back.y = 250
    mario.addAnimation("running2", mario_run2)
    mario.addAnimation("gone2", mario_gone2)
    mario.addAnimation("jumping2", mario_jump2)
    mario.scale = 0.5
    mayro.addAnimation("gone2", mario_gone2)
    mayro.scale = 0.75
    ov2.play();

  }
  if (style === 3) {
    back.addImage(bI3)
    back.scale = 1.255
    back.x = 600
    back.y = 310
    mario.addAnimation("running3", mario_run3)
    mario.addAnimation("gone3", mario_gone3)
    mario.addAnimation("jumping3", mario_jump3)
    mario.scale = 0.75
    mayro.addAnimation("gone3", mario_gone3)

    ov3.play();

  }
  if (style === 4) {
    back.addImage(bIw)
    back.scale = 2
    back.y = 280
    mario.addAnimation("runningw", mario_runw)
    mario.addAnimation("gonew", mario_gonew)
    mario.addAnimation("jumpingw", mario_jumpw)
    mario.scale = 0.75
    mayro.addAnimation("gonew", mario_gonew)

    ovw.play();
    ovw.loop();
  }
}

function draw() {
  background(255)

  mario.velocityY = mario.velocityY + 0.5
  if (gameState === PLAY) {
    score = Math.round(frameCount / 4)
    mario.collide(ground);
    mario.debug = false;
    if (mario.y >= 400) {
      if (style === 1) {
        mario.changeAnimation("running1", mario_run1);
      }
      if (style === 2) {
        mario.changeAnimation("running2", mario_run2);
      }
      if (style === 3) {
        mario.changeAnimation("running3", mario_run3);
      }
      if (style === 4) {
        mario.changeAnimation("runningw", mario_runw);
      }
    }
    if (back.x < 250) {
      back.x = 600

    }
    back.velocityX = -(4 + score / 100)
    if ((keyDown("up") && mario.y >= 400) || (keyDown("space") && mario.y >= 400)) {
      if (style === 1) {
        mario.changeAnimation("jumping1", mario_jump1)
      }
      if (style === 2) {
        mario.changeAnimation("jumping2", mario_jump2)
      }
      if (style === 3) {
        mario.changeAnimation("jumping3", mario_jump3)
      }
      if (style === 4) {
        mario.changeAnimation("jumpingw", mario_jumpw)
      }

      mario.velocityY = -15
    }
    if (frameCount % 150 === 0) {
      if (style === 1 || style === 2 || style === 3) {
        Backg()
      }
      Obstacle();
    }
    if (frameCount === 2000) {
      if (style === 1) {
        ov1.stop();
        hu1.play();
        hu1.loop();
      }
      if (style === 2) {
        ov2.stop();
        hu2.play();
        hu2.loop();
      }
      if (style === 3) {
        ov3.stop();
        hu3.play();
        hu3.loop();
      }
    }
    if (mario.isTouching(obG) || mario.y > ground.y) {
      gameState = END;
      mario.y = 350
      if (style === 1) {
        mario.changeAnimation("gone1", mario_gone1)
        ok1.play();
      }
      if (style === 2) {
        mario.changeAnimation("gone2", mario_gone2)
        ok2.play();
      }
      if (style === 3) {
        mario.changeAnimation("gone3", mario_gone3)
        ok3.play()
      }
      if (style === 4) {
        mario.changeAnimation("gonew", mario_gonew)
        okw.play()
      }

    }



  }
  if (gameState === END) {
    obG.setLifetimeEach = -1
    cloudG.setLifetimeEach = -1
    hG.setLifetimeEach = -1

    obG.setVelocityEach(0, 0)
    cloudG.setVelocityEach(0, 0)
    hG.setVelocityEach(0, 0)
    back.velocityX = 0
    ov1.stop();
    hu1.stop();
    ov2.stop();
    hu2.stop();
    ov3.stop();
    hu3.stop();
    ovw.stop();
    mayro.visible = true
    maryo.visible = true

    if (mousePressedOver(mayro)) {
      Bowser();
      score = 0
    }
  }

  drawSprites();
  fill(0)
  textSize(20)
  text("Score=" + score, 20, 20)
  text("HighScore=" + hs, 20, 50)
}

function Backg() {
  var rand = Math.round(random(1, 2))
  var ran = random(245, 100)
  if (rand === 1) {
    hill = createSprite(950, 445, 10, 10)
    hill.velocityX = -(4 + score / 100)
    if (style === 1) {
      hill.addImage(hillImg1)

      hill.scale = 3
    }
    if (style === 2) {
      hill.addImage(hillImg2)
      hill.y = 405
      hill.scale = 0.5

    }
    if (style === 3) {
      hill.addImage(hillImg3)
      hill.scale = 1
      hill.y = 470
    }

    hill.lifetime = 700
    hill.depth = mario.depth - 1
    hG.add(hill)
  } else if (rand === 2) {
    cloud = createSprite(900, ran, 10, 10);
    if (style === 1) {
      cloud.addImage(cloudImg1);
      cloud.scale = 1.5
    }
    if (style === 2) {
      cloud.addImage(cloudImg2);
      cloud.scale = 1
    }
    if (style === 3) {
      cloud.addImage(cloudImg3);
      cloud.scale = 0.75
    }
    cloud.velocityX = -(4 + score / 100)
    cloud.lifetime = 700

    cloud.depth = mario.depth - 1
    cloudG.add(cloud)
  }
}

function Obstacle() {
  ob = createSprite(900, 450, 10, 10)
  ob.depth = mario.depth - 1
  ob.lifetime = 700
  var obrand = Math.round(random(1, 4))
  if (obrand === 1) {
    ob.addImage(ob1)
    ob.scale = 0.5
    ob.setCollider("rectangle", 0, 0, 100, 100)
  } else if (obrand === 2) {
    ob.addImage(ob2)
    ob.y = ground.y - 75
    ob.scale = 0.5
    ob.setCollider("rectangle", 0, 0, 100, 200)
  } else if (obrand === 3) {
    ob.addImage(ob3)
    ob.scale = 0.5
    ob.setCollider("rectangle", 0, 0, 200, 200)

  } else if (obrand === 4) {
    ob.addImage(ob4)
    ob.y = 470
    ob.scale = 0.5
  }
  ob.velocityX = -(4 + score / 100)
  obG.add(ob)
  ob.debug = false
  ob.lifetime = 500
}

function Bowser() {
  gameState = PLAY
  mario.x = 60
  mario.y = 350
  if (style === 1) {
    mario.changeAnimation("running1", mario_run1)
    ov1.play()
  }
  if (style === 2) {
    mario.changeAnimation("running2", mario_run2)
    ov2.play()
  }
  if (style === 3) {
    mario.changeAnimation("running3", mario_run3)
    ov3.play()
  }
  if (style === 4) {
    mario.changeAnimation("runningw", mario_runw)
    ovw.play()
  }
  back.velocityX = -(4 + score / 100)
  obG.destroyEach();
  hG.destroyEach();
  cloudG.destroyEach();
  obG.setLifetimeEach = 700
  cloudG.setLifetimeEach = 700
  hG.setLifetimeEach = 700
  mayro.visible = false
  maryo.visible = false


  if (hs < score) {
    hs = score;
    frameCount = 0
  }

}