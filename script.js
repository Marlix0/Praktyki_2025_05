function historyOpen(){
    document.querySelector("#history-box").style.display = "block";
    document.querySelector("main").style.height = "900px";
}
function closeHistory(){
    document.querySelector("#history-box").style.display = "none";
    document.querySelector("main").style.height = "800px";
}

localStorage.setItem("challenge1-title","SPĘDŹ GODZINĘ BEZ TELEFONU");
localStorage.setItem("challenge1-content","Daj sobie chwilę wytchnienia. Odłóż telefon i skup się na tu i teraz. Może spacer? A może filiżanka herbaty i cisza?");

localStorage.setItem("challenge2-title","NAPIJ SIĘ WODY");
localStorage.setItem("challenge2-content","Odstaw na chwilę komputer i pójdź się nawodnić.");

localStorage.setItem("challenge3-title","NAPISZ MIŁY KOMENTARZ");
localStorage.setItem("challenge3-content","Czasami warto jest być miłym. Wejdź na czyjś profil na social mediach i napisz tej osobie miły komentarz.");

function generateChallenge(){
    var random = Math.floor(Math.random()*3)+1;
    document.querySelector("#challenge-title").innerHTML = localStorage.getItem("challenge"+random+"-title");
    document.querySelector("#challenge-content").innerHTML = localStorage.getItem("challenge"+random+"-content");
    document.querySelector("#complete-button").style.display = "initial";
    document.querySelector("#lotus-img").style.display = "initial";
}
function completeChallenge(){
    document.querySelector("#challenge-title").innerHTML = "GOTOWE! 🌷";
    document.querySelector("#challenge-content").innerHTML = "Mały krok zrobiony — czas na jeszcze jeden!<br>🌸 Kliknij, by zobaczyć, co przyniesie kolejna chwila";
    document.querySelector("#complete-button").style.display = "none";
    document.querySelector("#lotus-img").style.display = "none";
}
