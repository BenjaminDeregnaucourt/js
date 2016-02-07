
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
	this.move= [[line+1,column],[line-1,column];
	this.debut= [[line+1,column],[line+2,column],[line-2,column],[line-1,column]];
	this.attack=[line+1,column-1],[line+1,column+1],[line-1,colum-1],[line-1,colum+1]];
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
    Piece.prototype.constructor.call(this,'Queen',color,line,column);
    this.pieceId =[[330,5],[810,5]];
}
Queen.prototype = new Piece();

//var createBoard = function(nbLine, nbColumn) // avec des pieces vide
  
//var isEmpty = function(lig, col)
	
var put = function(lig, col, piece){
	var chessSymbols = new Image();
	chessSymbols.src = 'chess.png';
	chessSymbols.onload = function() {
		if(piece.color==='white'){
		gfx.drawImage(chessSymbols,piece.pieceId[0][0],piece.pieceId[0][1],75,75,75*lig,75*col,75,75);
		
		}
		if(piece.color==='black'){
			gfx.drawImage(chessSymbol,piece.pieceId[1][0],piece.pieceId[1][1],75,75,75*lig,75*col,75,75);
		}
	}
}
//var board = createBoard(8, 8)

//var initBoard = function() // avec les pièces du jeu

var convertCoordinates = function(ligPixel, colPixel) {
    var lig = Math.ceil(ligPixel / (canvas.height/8)) - 1;
    var col = Math.ceil(colPixel / (canvas.width /8)) - 1;
    return [lig, col];
}

var highlightedCells = [];

/*var drawCell = function(coord, color){
  gfx.fillStyle = color;
  gfx.fillRect(coord.lig,coord.col,canvas.width/8,canvas.height/8);
}*/
    
//var highlight = function(on)
    
canvas.addEventListener("mousedown", mouseClicked, false);
//var mouseClicked = function(event) { // Pourquoi cela ne fonctionne pas avec var ?!
function mouseClicked(event) {
	var ligCoord = event.pageY - canvas.offsetTop;
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
    }
}

//initBoard();

var drawGrid = function(x, y, width, height, nbLig, nbCol) {
  gfx.strokeStyle ='red';
  gfx.strokeRect(x,y,width,height);
  var j=0;
  var i=0;
  var couleur =0;
  while(i<nbLig){
    while(j<nbCol){
      gfx.strokeStyle= 'black';
      gfx.strokeRect(x+(j*width/nbCol),y+(i*height/nbLig),(width/nbCol),(height/nbLig));
	  if (couleur ===0){
		  couleur=1;
		  gfx.fillStyle='white';
		  gfx.fillRect(x+1+(j*width/nbCol),y+1+(i*height/nbLig),(width/nbCol)-2,(height/nbLig)-2);
	  }else if(couleur ===1){
		  couleur=0;
		  gfx.fillStyle='black';
		  gfx.fillRect(x+1+(j*width/nbCol),y+1+(i*height/nbLig),(width/nbCol)-2,(height/nbLig)-2);
	  }
	  
	  j++;
	  //console.log(j);
	}
	i++;
	 if (couleur ===0){
		  couleur=1;
	 }
	 else if(couleur ===1){
		  couleur=0;
	 }
	j=0;
	//console.log(i);
  }
 // Pion rekt =new Pion('white',4,4);
  //put(rekt.lig,rekt.col,rekt);
  //put()
}

