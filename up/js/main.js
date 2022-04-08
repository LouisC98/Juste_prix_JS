let prixEntree;
let prixRecherche;
let nbEssai;
let imageObj = document.getElementById("objet")
let nomImg = document.getElementById("nom_objet")
let bouton = document.getElementById("btnTry")
let message = document.getElementById("msg")
let indexObj;
let showEssai = document.getElementById("nb_Essai")
const nomObjet = ["Un grill", "Un costume", "Une guitare", "Une chaise gaming", "Un sac à main"]
const imgObjet = ["grill.png", "costume-haloween.png", "guitare.png", "chaise.png", "sac-a-main.png"]

function chiffreRandom(max) {
    return Math.floor(Math.random() * Math.floor(max))
}
indexObj = chiffreRandom(5)
prixRecherche = chiffreRandom(100) + 1
console.log("Index Objet : "+indexObj);
console.log("Prix mystère : "+prixRecherche);

function showImg(numero) {
    return '<img src="images/'+numero+'" class="">'
}
console.log(showImg(imgObjet[indexObj]));
imageObj.innerHTML = showImg(imgObjet[indexObj]);
nomImg.innerHTML = nomObjet[indexObj]

nbEssai = 10;
showEssai.innerHTML = "Vous avez encore "+nbEssai+" essais restants"

function verifPrix() {
    prixEntree = document.getElementById("prixInput").value;
    if (nbEssai == 0) {
        message.innerHTML = "Vous avez perdu, le juste prix était : "+prixRecherche+" euros.";
        message.classList.add("fail", "bold")
        showEssai.innerHTML = "Vous avez encore "+nbEssai+" essais restants"
        showEssai.classList.add("bold")
        bouton.classList.add("invi")
    } else {
        if (prixEntree > prixRecherche) {
            nbEssai--
            message.innerHTML = "C'est moins !";
            showEssai.innerHTML = "Vous avez encore "+nbEssai+" essais restants"
        }
        if (prixEntree < prixRecherche) {
            nbEssai--
            message.innerHTML = "C'est plus !";
            showEssai.innerHTML = "Vous avez encore "+nbEssai+" essais restants"
        }
        if (prixEntree == prixRecherche) {
            message.innerHTML = "Bravo vous avez gagné !";
            message.classList.add("success", "bold")
            showEssai.innerHTML = "Vous avez reussi en "+parseInt(11-nbEssai)+" coups"
            showEssai.classList.add("bold")
            bouton.classList.add("invi")
        }
    }
}
bouton.addEventListener("click", verifPrix, false)