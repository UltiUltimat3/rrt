var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;


function preload(){
  //loadImage (carregarImagem) da pista)
  pathImg = loadImage("path.png");
  //loadAnimation (carregarAnimação) de corrida para o menino
 boyImg = loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  
  createCanvas(400,400);
 //crie um sprite para a pista
  path = createSprite(200,200,10,10)
//adicione uma imagem para a pista
path.addImage(pathImg)
//Faça com que a pista seja um fundo que se move dando a ela velocity Y.
path.scale=1.1;

//crie um sprite de menino
//adicione uma animação de corrida para ele
boy = createSprite(200,300,10,10)
boy.scale=0.08;
boy.addAnimation("i",boyImg)
  
//crie um limite à esquerda
leftBoundary=(0,0,100,800);
leftBoundary.visible = false;
//defina visibilidade como falsa para o limite à esquerda

//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
//defina visibilidade como falsa para o limite à direita
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // mover o menino com o mouse usando mouseX
  
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  boy.collide(edges)
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();

  if(keyDown("left")){
    boy.x = boy.x-10;
    
  }
  
  if(keyDown("right")){
    boy.x = boy.x+10;
    
  
}

boy.depth = boy.depth + 4;

}
