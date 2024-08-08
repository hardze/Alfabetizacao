let play = document.getElementById("icon_fone");

function reproduzSom() {
  let audio = new Audio("audios/Uniforme.mp3");
  audio.play()
}
play.addEventListener("click", reproduzSom);