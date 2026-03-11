const lampada = document.getElementById('lampada');
const linkAcesa = "img/Captura de tela 2026-03-10 090343.png";
const linkApagada = "img/Captura de tela 2026-03-10 090327.png";

/** 
  @param {string} estado 
 **/
function alternar(estado) {
    if (estado === 'ligar') {
        if (!lampada.src.includes("6eb6W")) {
            lampada.src = linkAcesa;
        }
    } else if (estado === 'desligar') {
        if (!lampada.src.includes("yb96d")) {
            lampada.src = linkApagada;
        }
    }
}