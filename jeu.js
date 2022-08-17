/***************** Etape 1 : afficher 3 choix : */

/**crétion de la fonction pour init le jeu */
function readyGame(){
    /**masque les div stape-1 & 2 */
    let hideStapes = document.getElementsByClassName("etape");
    for (element of hideStapes){
        element.style.display = "none";
    }

    /**masque les div à l'interrieur de la div "stape-2" */
    let hideResults = document.getElementsByClassName("result");
    for (element of hideResults){
        element.style.display = "none";
    }

    /**affiche la div stape-1 */
    let showStape1 = document.getElementById("stape-1");
    showStape1.style.display = "flex";
}

/**lance la fonction qui init le jeu */
readyGame();







/***************** Etape 2 : obtenir le choix de l'IA : */

/**random pour choix pc */
let ia = {};

function iaChoice(){
let random = getRandom(0,3);
    console.log(random);
    // une fonction permettant de tirer un entier aléatoirement
    // compris entre min (inclu) et max (inclu) (param de ma fonction)
    function getRandom(min,max){
        //return Math.floor( Math.random() * 3);
        return Math.floor( min + Math.random() * max - min );
    }

const choices = ["pierre","feuille","ciseaux"];

ia = (choices[random]);
console.log(ia);
return ia
}






/***************** Etape 3 : entrer le choix user : */

/**déclaration de la variable qui contiendra le choix du joueur à la fin de cette étape*/
let user = "";
let valeur ="";

/**ajout d'un listenner qui exe la fonction test quand on click sur le bouton buttonPierre */

let boutonPierre = document.getElementById("boutonPierre");
function pierre(){
    valeur = boutonPierre.value;
    console.log(valeur);
    iaChoice()
    test()
}
boutonPierre.addEventListener("click", ()=> {(pierre())}); 

/**ajout d'un listenner qui exe la fonction test quand on click sur le bouton buttonPapier */
let boutonFeuille = document.getElementById("boutonFeuille");
function feuille(){
    valeur = boutonFeuille.value;
    console.log(valeur);
    iaChoice()
    test()
}
boutonFeuille.addEventListener("click", ()=> {(feuille())}); 

/**ajout d'un listenner qui exe la fonction test quand on click sur le bouton buttonCiseaux */
let boutonCiseaux = document.getElementById("boutonCiseaux");
function ciseaux(){
    valeur = boutonCiseaux.value;
    console.log(valeur);
    iaChoice()
    test()
}
boutonCiseaux.addEventListener("click", ()=> {ciseaux()}); 

console.log(user);





/***************** Etape 4 : comparer les choix : */

function test() {
    user = valeur;
    console.log(user);

    if (user=="pierre" && ia=="feuille" || user=="feuille" && ia=="ciseaux" || user=="ciseaux" && ia=="pierre"){
        console.log("perdu");
        console.log(user);
        readyResult();
        lose();

    } else if (ia=="pierre" && user=="feuille" || ia=="feuille" && user=="ciseaux" || ia=="ciseaux" && user=="pierre"){
        console.log("gagné");
        console.log(user);
        readyResult();
        win();

    } else if (ia==user) {
            console.log("égalité");
            console.log(user);
            readyResult();
            equal();
        } 
    }




/***************** Etape 5 : basculer sur l'affichage des résultats : */

/**changer d'affichage */

function readyResult(){
    let hideStapes = document.getElementsByClassName("etape");
    for (element of hideStapes){
        element.style.display = "none";
    }

    let showStape2 = document.getElementById("stape-2");
    showStape2.style.display = "block";

    let userSpan = document.querySelectorAll("#stape-2 .userResult");
    for (element of userSpan){
        element.innerHTML= user;
        console.log(user);
        changeColor()
    }

    let iaSpan = document.querySelectorAll("#stape-2 .iaResult");
    for (element of iaSpan){
        element.innerHTML= ia;
        console.log(ia);
        changeColor2()
    }
}

/**couleurs */
/**ca marche un peu jusque là */

function changeColor(){

    let couleurs = user;
    switch (couleurs){
        case "pierre":
            let bleu = document.querySelectorAll(`.userResult`);
            for (element of bleu){
                element.style.background = "blue";
                }
                console.log("bleu");
            break;
        case "feuille":
            let vert = document.querySelectorAll(`.userResult`);
            for (element of vert){
                element.style.background = "green";
                }
                console.log("green");
            break;
        case "ciseaux":
            let rouge = document.querySelectorAll(`.userResult`);
            for (element of rouge){
                element.style.background = "red";
                }
                console.log("rouge");
            break;
        default:
            console.log("nop");
    }
}

/***************** */
function changeColor2(){

    let couleurs = ia;
    switch (couleurs){
        case "pierre":
            let bleu = document.querySelectorAll(`.iaResult`);
            for (element of bleu){
                element.style.background = "blue";
                }
                console.log("bleu");
            break;
        case "feuille":
            let vert = document.querySelectorAll(`.iaResult`);
            for (element of vert){
                element.style.background = "green";
                }
                console.log("green");
            break;
        case "ciseaux":
            let rouge = document.querySelectorAll(`.iaResult`);
            for (element of rouge){
                element.style.background = "red";
                }
                console.log("rouge");
            break;
        default:
            console.log("nop");
    }
}

/************/


function lose(){
    let showResult = document.getElementById("lose");
    showResult.style.display = "block";
    replay()
}

function win(){
    let showResult = document.getElementById("win");
    showResult.style.display = "block";
    replay()
}

function equal(){
    let showResult = document.getElementById("equal");
    showResult.style.display = "block";
    replay()
}





/**proposer de rejouer */

function replay(){
    let boutonReplay = document.getElementById("boutonReplay")

    boutonReplay.addEventListener("click", ()=> {readyGame()}); 

    function showModal(){
        let showReplay = document.getElementById("stape-3");
        showReplay.style.display = "block";
    }
    showModal()
}
