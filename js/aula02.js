procedimentos(); //chamada
//essa função está sendo chamadas e  não precisa de argumentos
bemVindo("Thabata"); //chamada
bemVindo(true); //chamada
bemVindo(30); //chamada
bemVindo(bemVindo); //chamada
login("fulano", 12345);
maiorDeIdade(15);
let resultado = maiorDeIdade(16);
console.log(resultado);
console.log(maiorDeIdade(18));
let concatenado = maiorDeIdade(10) + maiorDeIdade(20);
console.log(concatenado);
console.log(verificarSituacao(
    cacularMedia(8, 9, 10)
)
);

function procedimentos() { //declaração
    console.log("Esse tipo de função sempre execulta da mesma forma, porque não tem parâmetros para deixar dinâmico");

    console.warn("Essa função também não retorana nada");
}

procedimentos(); //chamada

function bemVindo(nome) {
    console.log(typeof (nome));
    console.warn("Bem-vindo", nome);

}

function login(userName, password) {
    console.error("O usuário " + userName + " cujo a senha é: " + password + "está inadiplente e não pode entrar");

}

function maiorDeIdade(idade) {
    if (idade < 18) {
        return "Menor de idade"
    } else {
        return "Maior de idade"
    }

}

function cacularMedia(nota01, nota02, nota03) {
    return (nota01 + nota02 + nota03) / 3
}

function verificarSituacao(media) {
    return media >= 7 ? "aprovado" : "Reprovado";

}

function somar(a, b) {
    return a + b;
}
function subtrair(a, b) {
    return a - b;
}
function mutiplicar(a, b) {
    return a * b;
}
function dividir(a, b) {
    return a / b;
}
console.log("Somanado 1+2= ", somar(1, 2));
console.log("Subtraindo 1-2= ", subtrair(1, 2));
console.log("Mutiplucando 1*2= ", mutiplicar(1, 2));
console.log("Dividindo 1/2= ", dividir(1, 2));


function merenda(merendar) {
    return "merenda"
}
console.warn("Já são 20:00 é hora da ", merenda);
