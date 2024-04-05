

function mudarCor(){
    var Pacman = document.getElementsByClassName('pacman');
    var button = document.getElementById("cor");
    for (var i = 0; i < Pacman.length; i++) {
        Pacman[i].style.stroke = button.value; 
      }
    }
    document.getElementById("cor").addEventListener("change", mudarCor);