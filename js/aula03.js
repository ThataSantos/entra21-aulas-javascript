console.warn("READ");
let leitura = document.getElementById("paragrafo_ler")
console.log(leitura);
console.log("Apenas o conteudo do texto", leitura.textContent);
console.log("Apenas o conteudo mais elementos internos com HTML", leitura.innerHTML);
let aprendendo_leitura = document.getElementById("test_01")
console.log(aprendendo_leitura.textContent);
console.log(aprendendo_leitura.innerHTML);
let aprendendo_leitura2 = document.getElementById("ta_aqui")
console.log(aprendendo_leitura2.textContent);
console.log(aprendendo_leitura2.innerHTML);
console.warn("READ MORE");
let paragrafos = [...document.getElementsByTagName("p")]
console.log("Lendo todos os paragrafos", paragrafos);
paragrafos.forEach(pagrafro => {
    console.log(pagrafro.textContent);
});

console.warn("WRITE");

let escrita = document.getElementById("parafo_escrever")
escrita.textContent = "Esse paragrafo foi escrito com JavaScript"
escrita.title = "www.google.com";
document.getElementById("ta_aqui").textContent = "Botão alterado com JavaScript"

let alterar1 = document.getElementById("mudar_texto1")
alterar1.title = "Passou o mouse achou!!!"
alterar1.textContent = "Agora mudou tudo"

let alterar2 = document.getElementById("mudar_texto2")
alterar2.title = "ihhh mudei hahah!"
alterar2.textContent = "sacaniei e mudei!"
alterar2.className = "text-bg-primary"

function mudarTexto(conteudo){
    let elemento = document.getElementById("qualquer");
    elemento.title = conteudo;
    elemento.textContent = conteudo;
}

function addConteudo(conteudo){
    let enter = document.createElement("br");
    document.body.append(enter);
    let elemento = document.createElement("div");
    elemento.textContent = conteudo;
    document.body.append(elemento);
}