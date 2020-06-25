
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

function verify(){

  var erreur = document.getElementById("erreur");

          var prenom_client = document.getElementById("prenom_client");
          if(prenom_client.value.trim() == ""){
            erreur.textContent="Merci de saisir le prénom";
            prenom_client.style.borderColor = "red"; 
          }
          var nom_client = document.getElementById("nom_client");
          if(nom_client.value.trim() == ""){
            erreur.textContent="Merci de saisir le nom";
            nom_client.style.borderColor = "red";
          }
          var datenaiss = document.getElementById("datenaiss");
          if(datenaiss.value.trim() == ""){
            erreur.textContent="Merci de saisir la date de naissance";
            datenaiss.style.borderColor = "red";
          }  
          var cni = document.getElementById("cni");
          if(cni.value.trim() == ""){
            erreur.textContent="Merci de saisir le numéro d'indentification national";
            cni.style.borderColor = "red";
          }
          var adresse_client = document.getElementById("adresse_client");
          if(adresse_client.value.trim() == ""){
            erreur.textContent="Merci de saisir l'adresse ";
            adresse_client.style.borderColor = "red";
          }
          var tel_client = document.getElementById("tel_client");
          if(tel_client.value.trim() == ""){
            erreur.textContent="Merci de saisir le numéro de téléphone ";
            tel_client.style.borderColor = "red";
          }
        
          

} 
