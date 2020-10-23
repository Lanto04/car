/*
var variable1 = 'La valeur ici';
console.log(variable1);

var myH1 = document.querySelector('h1');
console.log('Log 1', myH1);
function alertUser() {
  alert(variable1);
}

function coloreTitre() {
  conso.log('Log 2', myH1);
  document.querySelector('h1').style.color = 'red';
}
*/
var maVoiture = document.querySelector('.voiture');
var positionInitiale = maVoiture.style.left;
var miodina = false;
alert(maVoiture.style);

function faireBouger(direction, rotation) {
    positionInitiale = +positionInitiale + direction;
    if (miodina == false){
        
  document.querySelector('.voiture').style.left = positionInitiale + 'px';
}
else{
    document.querySelector('.voiture').style.top = positionInitiale + 'px';
}
}

function faireTourner(direction, rotation) {
var test = maVoiture.style.transform;
    document.querySelector('.voiture').style.transform = test + 'rotate(90deg)';
 miodina = !miodina   
}