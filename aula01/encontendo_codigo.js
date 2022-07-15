// //criar consoles.log só é visivel no console
// console.log("Hello Wolrd"); //o console aceitaq parametros para exibir em log 
// console.log("thabata " + 28 + " anos"); // é possivel concatenar texto e variaveis igual ao java
// console.log("Thabata", 28, "anos"); // o console aceita infinitos parametros basta separar por virgula
// // criar variaveis
// let nome = "Thabata"; //let cria uma variavel com escopo limitado
// var sobrenome = "Santos"; // var cria uma variavel que continua existindo mesmo depois do escopo
// console.log(nome);
// console.log("Meu nome é " + nome);
// console.log("Meu nome é", nome);
// console.log("Meu nome è " + nome + "mas me chama também de 'thata'");
// console.log("Meu nome è " + nome + 'mas me chama também de "thata"');
// console.log("Meu nome è " + nome + "mas me chama também de \"thata\"");
// console.log(`Meu nome è ${nome}`);
// console.log("No momento nome é do tipo " + typeof (nome));
// nome = 10;
// console.log("No momento nome é do tipo " + typeof (nome));
// nome = false;
// console.log("No momento nome é do tipo " + typeof (nome));
// nome = "";
// console.log("No momento nome é do tipo " + typeof (nome));
// let idade = 28;
// let altura = 1.63;
// console.log(`A variavel idade é do tipo ${typeof (idade)} e a variavel altura é do tipo ${typeof (altura)}`);
// // let mensagem = prompt("o que você está pensando?");
// // let interromper=prompt("Estou interrompendo?");
// // console.log("Você está pensando " + mensagem);
// // console.log("a informação capturada é do tipo " + typeof (mensagem));
// console.log("os operadores aritimeticos são os mesmos do java +,-,*,/,%");
// console.log("somando " + (1 + 2));
// console.log("subtraindo " + (2 - 1));
// console.log("mutiplicando " + (3 * 2));
// console.log("dividindo " + (10 / 2));

// if (idade < 18) {
//     console.log("È menor de idade");

// } else {
//     console.log("È maior de idade");
// };

// if (altura < 1.5) {
//     console.log("Baixinho");

// } else if (altura < 1.7) {
//     console.log("altura mediana");
// } else if (altura < 1.9) {
//     console.log("altura é grande");

// } else {
//     console.log("é gigante ?");
// }

// let resposta = (altura < 2 ? "normal" : "gigante");

// switch (idade) {
//     case 1:
//         console.log("um aninho");

//         break;
//     case 2:
// console.log("dois aninnhos");
//         break;

//     default:
//         console.log("chega tá bom");
//         break;
// };
console.log("pratica em sala");
let nome = prompt("Qual seu nome?");
let idade = prompt("Qual sua idade?");
let cidade = prompt("Onde você mora?");
console.log(`Bem vindo ${nome}, vejo que você é ${idade} de idade e mora em ${cidade}.`);
console.log("Esse site é apenas para desenvolvedores não importa a idade nem onde mora, mas o importante é ter vontade de aprender.");
console.log("Veja os operadores matemáticos em ação");
console.log("1+3=" + (1 + 2));
console.log("2-1=" + (2 - 1));
console.log("3*2=" + (3 * 2));
console.log("10/2=" + (10 / 2));
if (cidade == "blumenal") {
    console.log("legal voce mora em Blumenal");
} else {
    console.log("Legal voce mora em " + cidade);
}
if (idade < 18) {
    console.log("é menor de idade");
} else if (idade <= 18) {
    console.log("idade é menor ou ilgual a 18");
} else if (idade > 18) {
    console.log("é maior de idade");
} else if (idade >= 18) {
    console.log("idade é maior ou ilgual a 18");
}

let resposta = (idade < 18 || cidade == "blumenal" ? " maior de idade e mora em blumenal" : "é maior de idade e não mora em blumenal");
console.log(resposta);
let resposta2 = (idade < 18 && cidade == "blumenal" ? " maior de idade e mora em blumenal" : " é maior de idade e não mora em blumenal");
console.log(resposta2);







