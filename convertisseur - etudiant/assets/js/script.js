/**
 * Prend en paramètre une température en celsius et renvoie son équivalent en fahrenheit
 * @param {*} tmp 
 */
function getFahrenheitTemp(tmp) {
    return Number(tmp + 32);
    // TODO 
}
/**
 * Prend en paramètre une température en celsius et renvoie son équivalent en kelvin
 * @param {*} tmp 
 */
function getKelvinTemp(tmp) {
    return Number(tmp + 273.15);
    // TODO
}

// Déclarez ici les 3 variables (celsuis, kelvin, fahrenheit)
 
let celsius = document.querySelector(".celsius p")
let fahrenheit = document.querySelector(".fahrenheit p")
let kelvin = document.querySelector(".kelvin p")
let celsius2 = document.getElementsByClassName("celsius")
console.log(celsius2)


/**
 * Fonction qui gère l'affichage par défaut
 * @param {*} temp 
 */
function reset(temp) {
    kelvin.textContent = getKelvinTemp(temp);
    fahrenheit.textContent = getFahrenheitTemp(temp);
}
// on récupère une référence du input range
let temp = document.querySelector('#temp');
window.addEventListener('DOMContentLoaded', function(){
    reset(temp.value);
});

temp.addEventListener('input', function() {
    // On récupère la valeur du input range
    let tmp = parseInt(this.value);
    // On ajoute la valeur tmp au paragraphe du bloc celsius
    celsius.textContent = tmp;
    // On ajoute la valeur en °K au paragraphe du bloc kelvin
    kelvin.textContent = getKelvinTemp(tmp);
    // On ajoute la valeur en °F au paragraphe du bloc fahrenheit
    fahrenheit.textContent = getFahrenheitTemp(tmp);
})




