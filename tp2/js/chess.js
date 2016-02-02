<html>
  <head>
  <script type='text/javascript'>
// On tente de charger l'image au plus tôt !
var chessSymbols = new Image();
chessSymbols.src = 'chess.png';
chessSymbols.onload = function() {
    console.info("Chess symbols loaded !");
    
    // dessine la grille, une fois l'image chargée
    drawGrid(0,0, canvas.width, canvas.height, 8, 8); 
};
    </script>
  </head>
  <body>
    <h1>Deep blue version JS</h1>
    <center><canvas id='screen' width='400' height='400' >JavaScript est nécessaire ...</canvas></center>
    <script type='text/javascript'>

var canvas = document.getElementById("screen");
var gfx    = canvas.getContext("2d");

// définition du constructeur du type Piece
var Piece = function(name, color, line, column){
    this.name    = name   || 'empty'; // si il n'y a pas de paramètre 'name', utiliser 'empty' 
    this.line    = line   || 0;
    this.column  = column || 0;
    this.color   = color  || 'grey';
    this.pieceId = undefined;
};

// définition d'une méthode du type Piece: il est crucial de la créer 
// au niveau du prototype et non pas de l'objet !
// Cette fonction sera pratique pour calculer le déplacement des pièces
// quelle que soit leur orientation
Piece.prototype.orientation = function() {
    return (this.color === 'white') ? +1 : -1;
}

// Constructeur du type Pawn, observez attentivement l'appel au constructeur de Piece !
// pieceId correspond aux coordonnées d'extraction des images du pion en blanc puis noir
var Pawn = function(color, line, column) {
    Piece.prototype.constructor.call(this, 'Pawn', color, line, column);
    this.pieceId = [[0, 5], [480, 5]];
}
Pawn.prototype = new Piece();

var Rook = function(color,line,column){
    Piece.prototype.constructor.call(this,'Rook',color,line,column);
    this.pieceId =[[225, 5],[705, 5]];
}
Rook.prototype = new Piece();

var Bishop = function(color,line,column){
    Piece.prototype.constructor.call(this,'Bishop',color,line,column);
    this.pieceId =[[150,5],[630,5]];
}
Bishop.prototype = new Piece();

var Knight = function(color,line,column){
    Piece.prototype.constructor.call(this,'Knight',color,line,column);
    this.pieceId =[[75, 5],[555, 5]];
}
Knight.prototype = new Piece();

var King = function(color,line,column){
    Piece.prototype.constructor.call(this,'King',color,line,column);
    this.pieceId =[[405,5],[885,5]];
}

King.prototype = new Piece();

var Queen =function(color,line,column){
    Piece.prototype.constructor.call(this.'Queen",color,line,column);
    this.pieceId =[[330,5],[810,5];
}
Queen.prototype = new Piece();

//var createBoard = function(nbLine, nbColumn) // avec des pieces vide
  
//var isEmpty = function(lig, col)
//var put = function(lig, col, piece)

//var board = createBoard(8, 8);

//var initBoard = function() // avec les pièces du jeu

var convertCoordinates = function(ligPixel, colPixel) {
    var lig = Math.ceil(ligPixel / (canvas.height/8)) - 1;
    var col = Math.ceil(colPixel / (canvas.width /8)) - 1;
    return [lig, col];
}

var highlightedCells = [];

var drawCell = function(coord, color){
  gfx.fillStyle = color;
  gfx.fillRect(coord.lig,coord.col,canvas.width/8,canvas.height/8);
}
    
//var highlight = function(on)
    
canvas.addEventListener("mousedown", mouseClicked, false);
//var mouseClicked = function(event) { // Pourquoi cela ne fonctionne pas avec var ?!
function mouseClicked(event) {
/*    var ligCoord = event.pageY - canvas.offsetTop;
    var colCoord = event.pageX - canvas.offsetLeft;
    var coord    = convertCoordinates(ligCoord, colCoord);
    console.info(coord);
    if (highlightedCells.length > 0) {
        highlight(false);
        highlightedCells = [];
    }
    var piece = board[coord[0]][coord[1]];
    if (piece.name !== '.') {
        var moves = piece.getMoves();
        highlightedCells.push(moves);
        highlight(true);
    } else {
        // TODO: if empty and highlighted, move the piece !
        // doMove();
    }*/
}

//initBoard();

var drawGrid = function(x, y, width, height, nbLig, nbCol) {
  gfx.strokeStyle ='red';
  gfx.StrokeRect(0,0,width,height);
  for(var i = 0; i<nblig;i++){
    for(var j = 0;j<nbCol;j++){
      gfx.strokeStyle= 'red';
      gfx.strokeRect(j*width/nbCol,i*height*nbLig,width/nbCol,height/nbLig);
    }
  }
}
    </script>
  </body>
</html>
