<html>
  <body>
     <div id="output"></div>
         <script type='text/javascript'>
var monde = [
  [0,0,0,0,0,0,0,0],
  [0,1,1,0,0,0,0,0],
  [0,1,1,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,1,0,0,0],
  [0,0,0,0,1,0,0,0],
  [0,0,0,0,1,0,0,0],
  [0,0,0,0,0,0,0,0]
];

// fonction créeant un tableau à deux dimensions de nbLig lignes et nbCol colonnes, initialisé avec la valeur value
// il est conseillé de commencer avec un tableau à une dimension dans lequel on ajoute progressivement chacune des lignes, représentées sous la forme d'un tableau à une dimension de nombres
var mondeVide = function(nbLig, nbCol, value){
  var t=[[]];
  for(i = 0;i<nbLig;i++){
    t.push([]);
    for(j=0;j<nbCol;j++){
      t[i].push(value);
    }
  }
  return t;
};

// il vaut mieux avoir un tableau temporaire lors du calcul de la génération suivante ;)
var mondeTMP = mondeVide(8,8,0);

// fonction prenant en paramètre un tableau à deux dimensions contenant des 0 et 1 qui affiche le tableau sous forme de caractère dans la <tt>div</tt> d'<tt>id</tt> égal à <tt>GOLScreen</tt>
//
var affiche = function(m) {
  var screen = document.getElementById("output");
  screen.style['font-family'] = 'monospace';
  screen.innerHTML = '';
  for (var idxL=0; idxL<m.length; idxL++) {
    var ligne = "";
    for (var idxC=0; idxC<m[0].length; idxC++) {
      ligne += (m[idxL][idxC] === 0 ? '.' : '*');
    }
    var node = document.createTextNode(ligne);
    screen.appendChild(node);
    var newLine = document.createElement("br");
    screen.appendChild(newLine);
  }
}

// calcul le nombre de cellules vivantes autour de la cellule de coordonnées (lig, col)
var voisins = function(lig, col) {
  var ans=0;
  for(var i=-1;i<1;i++){
    for(var j=-1;j<1;j++){
      if(i != 0 || j != 0){
        ans+=mondeTMP[lig+i][col+j];
      }
    }
  }
  console.log("["+lig+","+col+"] a "+ans+" voisins");
  return ans;
};

// détermine l'état d'une cellule à la génération suivante, le premier paramètre vaut 0 ou 1 (état de la cellule actuelle et le second correspond au nombre de cellules vivantes l'entourant
var evolution = function(vivante, nbVoisins) {
  if(vivante===1 && (nbVoisins === 2 || nbVoisins ===3)){
    return 1;
  }if(vivante===0 && nbVoisins===3){
    return 1;
  }return 0;
}

// effectue un pas de simulation, en parcourant monde et initialisant mondeTMP avec les cellules de la génération suivante, puis recopie mondeTmp dans monde
var simule = function() {
  mondeTMP = monde.concat();
  for(var i = 1;i<mondeTMP.length;i++){
    for(var j = 1;j<mondeTMP.length;j++){
      var nb = voisins(i,j);
      mondeTMP[i][j]=evolution(monde[i][j],nb);
    }
  }
  monde = mondeTMP.concat();
};

console.log(monde.length);
console.log(monde[1].length);
// appelle toutes les secondes la fonction passée en premier paramètre
for (var i=0; i<5; i++) {
  setTimeout(function() {affiche(monde); simule(); }, 1000*i);
}

  </script>
 </body>
</html>
        
