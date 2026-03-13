const btnMenos = document.getElementById('btnmenos');
const btnMais = document.getElementById('btnmais');
const visor = document.getElementById('visor');

let contador = 0;
visor.innerText = contador;

btnMais.addEventListener('click', () => {
    contador++;
    visor.innerText = contador;
});

btnMenos.addEventListener('click', () => {
    if (contador > 0) {
        contador--;
        visor.innerText = contador;
    }
});

visor.addEventListener('click', () => {
    contador = 0;
    visor.innerText = contador;
});