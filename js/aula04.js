console.group("Ler conteudo com jQuery")
console.log($("#paragrafo_1"));
console.log($("#paragrafo_1").text());
console.groupEnd()

console.group("Altera conteudos com jQuery")
$("#paragrafo_2").text("Conteudo escrito com jQuery")
console.log($("#paragrafo_2").text());
console.groupEnd()

console.group("Ler varios conteudos com jQuery")
let lista = $("p")
console.log(lista);
console.log(lista.text());

$("p").each(function () {
    console.log(this.textContent);
})
console.groupEnd()

console.group("Escrever varios conteudos com jQuery")
$("li").text("li esacrito com jQuery")
console.groupEnd()

console.group("Criar elementos com jQuery")
$("<button>", {
    text: "Click aqui",
    class: "btn btn-outline-primary"
}).appendTo("body")

$("#aqui").append(
    $("<br>"),
    $("<b>", { text: "Texto negrito" }),
    $("<br>"),
    $("<i>", { text: "Texto Italico" })
)
console.groupEnd()

console.group('Mais de um item com jQuery');
$("<ul>").append(
    $("<li>", {
        text: "Item 1"
    }),
    $("<li>", {
        text: "Item 2"
    }),
    $("<li>", {
        text: "Item 3"
    })
).appendTo("#aqui2")
console.groupEnd();

console.group('Exercio escrever mais de um item');
//  table
// Thead
//th
//th
//th
// Tbody
//tr
//td
//td
//td
//tr
//td
//td
//td


$("<table>",{class: "table  table-striped table-bordered "}).append(
    $("<thead>").append($("<th>", { text: " coluna" }), $("<th>", { text: " coluna2" }), $("<th>", { text: " coluna3" })),
            $("<tbody>").append(
        $("<tr>").append($("<td>", { text: " linha" }), $("<td>", { text: " linha1" }), $("<td>", { text: " linha3" })),
        $("<tr>").append($("<td>", { text: " linha" }), $("<td>", { text: " linha1" }), $("<td>", { text: " linha3" }))
            )
).appendTo("#aqui3")
console.groupEnd();

console.group('Enventos de click em qulaquer lugar');
$("p").on("click", function () {
    alert("Opa!")
    
})
$("li").on("click",()=> {
console.warn("Clicou foi?");    
})

$("#ok").on("click", function () {
    alert("Está ok!")
})
console.groupEnd();

console.group('Exercicios com eventos');
$("#add").on("click", ()=> {
    $("<p>", {text:" Arouuuuuuuuuuuu!", class:"alert alert-danger"}).appendTo("#card-body")

})

$("#limpar").on("click", ()=>{
    $(".alert").remove()
})
console.groupEnd();