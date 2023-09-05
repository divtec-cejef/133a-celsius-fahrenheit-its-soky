/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Djovensky
 * @version 0.1
 * @since   05.09.2023
 */
"use strict"; // Demande un interprétation stricte du code
let celsius = parseInt(prompt("Rentrez une température en C°"));
if (isNaN(celsius) === false){
    let fahrenheit = celsius * (9 / 5) + 32;
    alert(fahrenheit + " F°");
} else {
    alert("Veuillez mettre un nombre.")
}