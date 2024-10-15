"use strict";
// FUnction Declaration
function sapa(nama, umur) {
    console.log("Halo, aku " + nama + "umurku " + umur);
}
sapa("yasir ", 20);
// Anonymous function
const pcikers = function (name, role) {
    return name + role;
};
let pick = pcikers("Nana ", "mage");
console.log("Saya ingin pergi ke midlane menggunakan "
    + pick);
// Arrow Function
let multiplication = (a, b) => {
    return a * b;
};
let result = multiplication(8, 7);
console.log(result);
