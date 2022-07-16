function definirArray() {

    console.log("Para criar um array basta let nome = []");
    console.log("Para criar um array com itens basta let nome = [5,13,2]");
    let listaVazia = [];
    console.log(listaVazia);
    let nomes = ["Thabata", "Arthur", "Erick", "Rafael", "timeGreen"];
    console.log(nomes);

}
definirArray();

function alertar(mensagem) {
    alert(mensagem);

}

var lista = ["Thabata", "thabata", "Sextou!!!", "Bora dormir!"];

function incluirArrays(novoNome) {
    lista.push(novoNome);
    console.log(lista);

}

function listarFor() {
    for (let contador = 0; contador < lista.length; contador++) {
        console.log("Repetindo com o for o indíce " + contador + "=" + lista[contador]);
    }
    console.log("--------");
    for (const item of lista) {
        console.log("Repetindo com for inteligente, sem contar o indíce " + item);
    }
    console.log("--------");
    lista.forEach(item => {
console.log("Repetindo com forEach sem conta indíce "+ item);
    });
}

function name(params) {

}