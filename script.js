
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

function map(){
  document.getElementById("sccp")
  if(sccp.style.display = "none"){
    document.getElementById("prenom_client").required= false
    document.getElementById("nom_client").required= false
    document.getElementById("datenaiss").required= false
    document.getElementById("cni").required= false
    document.getElementById("adresse_client").required= false
    document.getElementById("tel_client").required= false
  }
  document.getElementById("scce")
  if(scce.style.display = "none"){
    document.getElementById("statut_juridique").required= false
    document.getElementById("nom_entreprise").required= false
    document.getElementById("ninea").required= false
    document.getElementById("adresse_entreprise").required= false
    document.getElementById("tel_entreprise").required= false
  }
  document.getElementById("info_employeur")
  if(info_employeur.style.display = "none"){
    document.getElementById("denomination").required= false
    document.getElementById("raison_sociale").required= false
    document.getElementById("numero_identification").required= false
    document.getElementById("adresse_employeur").required= false
  }
}

function sal(){
  document.getElementById("info_employeur").style.display="block"
  document.getElementById("soumettre").style.bottom="-55%"
}

function anulsal(){
  document.getElementById("info_employeur").style.display="none"
  document.getElementById("soumettre").style.bottom="-15%"

}

function idc (){
  document.getElementById("id_client")
  id_client.disabled = false
}

function anulidc (){
  document.getElementById("id_client")
  id_client.disabled = true
}

function salac (){
  document.getElementById("salaire")
  salaire.disabled = false
}

function anulsalac (){
  document.getElementById("salaire")
  salaire.disabled = true 
}

function frais(){
  document.getElementById("frais_ouverture")
  frais_ouverture.disabled = false
  frais_ouverture.required = true
}

function anulfrais(){
  document.getElementById("frais_ouverture")
  frais_ouverture.disabled = true
}

function automat(){
    document.getElementById("prenom_client").disabled = true
    document.getElementById("nom_client").disabled = true
    document.getElementById("datenaiss").disabled = true
    document.getElementById("cni").disabled = true
    document.getElementById("tel_client").disabled = true
    document.getElementById("statut_juridique").disabled = true
    document.getElementById("nom_entreprise").disabled = true
    document.getElementById("ninea").disabled = true
    document.getElementById("adresse_entreprise").disabled = true
    document.getElementById("tel_entreprise").disabled = true
  
}

function anulautomat(){
  document.getElementById("prenom_client").disabled = false
  document.getElementById("nom_client").disabled = false
  document.getElementById("datenaiss").disabled = false
  document.getElementById("cni").disabled = false
  document.getElementById("tel_client").disabled = false
  document.getElementById("statut_juridique").disabled = false
  document.getElementById("nom_entreprise").disabled = false
  document.getElementById("ninea").disabled = false
  document.getElementById("adresse_entreprise").disabled = false
  document.getElementById("tel_entreprise").disabled = false


}
