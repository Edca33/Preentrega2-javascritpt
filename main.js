let comprador = true;
let intentos = 1;
const smartbandsDisponibles = [
    { nombre: "Smartband 1", precio: 100 },
    { nombre: "Smartband 2", precio: 200 },
    { nombre: "Smartband 3", precio: 300 },
];

let carrito = [];

do {
    let smartbandElegida = prompt("Selecciona una smartband por su número (solo 3 intentos):\n1. Smartband 1 ($100)\n2. Smartband 2 ($200)\n3. Smartband 3 ($300)");

    if (smartbandElegida === null) {
        break;
    }

    if (Number(smartbandElegida) >= 1 && Number(smartbandElegida) <= smartbandsDisponibles.length && intentos <= 3) {
        let smartband = smartbandsDisponibles[Number(smartbandElegida) - 1];
        carrito.push(smartband);
        alert(`Has añadido ${smartband.nombre} a tu carrito por $${smartband.precio}.`);
    } else {
        alert("Smartband no válido o has superado los 3 intentos.");
        intentos++;

        if (intentos > 3) {
            alert("Has superado los 3 intentos, vuelva más tarde.");
            console.error("Usuario no ha podido completar la compra");
            break;
        }
    }
} while (comprador && carrito.length > 0);

if (carrito.length > 0) {
    let total = carrito.reduce((sum, product) => sum + product.precio, 0);
    alert(`Has comprado las siguientes smartbands:\n${carrito.map(product => `${product.nombre} ($${product.precio})`).join('\n')}\nTotal: $${total}`);
} else {
    alert("No has realizado ninguna compra.");
}
