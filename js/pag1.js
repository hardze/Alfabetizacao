let play = document.getElementById("icon_fone");

function reproduzSom() {
  let audio = new Audio("audios/computador.mp3");
  audio.play()
}
  play.addEventListener("click", reproduzSom);


  function avancar(){
  var letra = document.getElementById('letra1').value;
  var letra2 = document.getElementById('letra2').value;
  var letra3 = document.getElementById('letra3').value;
  var letra4 = document.getElementById('letra4').value;
  var letra5 = document.getElementById('letra5').value;
  var letra6 = document.getElementById('letra6').value;
  var letra7 = document.getElementById('letra7').value;
  var letra8 = document.getElementById('letra8').value;
  var letra9 = document.getElementById('letra9').value;
  var letra10 = document.getElementById('letra10').value;

  if(letra == "c" && 
  letra2 == "o" && 
  letra3 == "m" && 
  letra4 == "p" && 
  letra5 == "u" &&
  letra6 == "t" &&
  letra7 == "a" &&
  letra8 == "d" &&
  letra9 == "o" &&
  letra10 == "r"){
    alert('Palavra correta')
    location.href = "pag2.html";
  }
  else{
    alert('Palavra incorreta')
  }
}