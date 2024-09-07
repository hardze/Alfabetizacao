let play = document.getElementById("icon_fone");

function reproduzSom() {
  let audio = new Audio("audios/cadeira.mp3");
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
  
    if(letra == "c" && 
    letra2 == "a" && 
    letra3 == "d" && 
    letra4 == "e" && 
    letra5 == "i" &&
    letra6 == "r" &&
    letra7 == "a"){
      alert('Palavra correta')
      location.href = "pag1.html";
    }
    else{
      alert('Palavra incorreta')
    }
  }