anvas = document.getElementById("essai1");
// récupération du contexte graphique
// var gfx    = canvas.getContext("2d");
// // changement de la couleur utilisé pour les dessins de figures pleines
// gfx.fillStyle= 'black';
// gfx.fillRect(0,0,canvas.width,canvas.height);
//
// // affichage d'un rectangle plein sur l'ensemble du canvas
//
// for (var i=0; i<100; i++) {
//     // tirage aléatoire de la couleur
//         gfx.fillStyle= 'rgb('+Math.ceil(Math.random()*255)+','+Math.ceil(Math.random()*255)+','+Math.ceil(Math.random()*255)+')';
//             // dessin d'un rectable placé aléatoirement sur le canvas
//                 gfx.fillRect(Math.ceil(Math.random()*canvas.width),Math.ceil(Math.random()*canvas.height),10,10);
//                 }
//
//                 undefined;
//
// récupération du contexte graphique
var canvas = document.getElementById("essai2");
var gfx    = canvas.getContext("2d");
gfx.fillStyle='white';
gfx.fillRect(0,0,canvas.width,canvas.height);

var chessSymbols = new Image();
chessSymbols.src = 'chess.png';
chessSymbols.onload = function() {
    

    gfx.drawImage(chessSymbols,0,0,chessSymbols.width,chessSymbols.height,0,0,canvas.width,canvas.height/2);
    gfx.drawImage(chessSymbols,0,0,75,75,canvas.width/2,canvas.height/2,75,75);
};
undefined;
