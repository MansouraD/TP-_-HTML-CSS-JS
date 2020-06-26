
function afficherForm (){
  document.getElementById("pore").style.display="block"
  document.getElementById("aorn").style.display="block"
  document.getElementById("info_compte").style.display="block"
}

function particulier(){
  document.getElementById("sccp").style.display="block"
  document.getElementById("soumettre").style.display="block"
  document.getElementById("scce").style.display="none"
}

function entreprise(){
  document.getElementById("scce").style.display="block"
  document.getElementById("soumettre").style.display="block"
  document.getElementById("sccp").style.display="none"
}

function sal(){
  document.getElementById("info_employeur").style.display="block"
  document.getElementById("soumettre").style.bottom="-55%"
}
