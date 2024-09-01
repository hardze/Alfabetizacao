{let play = document.getElementById("icon_fone");

function reproduzSom() {
  let audio = new Audio("audios/computador.mp3");
  audio.play()
}
  play.addEventListener("click", reproduzSom);
}

let avancar = document.getElementById("avancar");

  function avancar(){
  var letra = document.getElementById('letra1').value;
  var letra2 = document.getElementById('letra2').value;
  var letra3 = document.getElementById('letra3').value;
  var letra4 = document.getElementById('letra4').value;
  var letra5 = document.getElementById('letra5').value;
  var letra6 = document.getElementById('letra6').value;
  var letra7 = document.getElementById('letra7').value;
  var letra8 = document.getElementById('letra8').value;

  if(letra == "u" && 
  letra2 == "n" && 
  letra3 == "i" && 
  letra4 == "f" && 
  letra5 == "o" &&
  letra6 == "r" &&
  letra7 == "m" &&
  letra8 == "e"){
    alert('Palavra correta')
    location.href = "pag2.html";
  }
  else{
    alert('Palavra incorreta')
  }
}