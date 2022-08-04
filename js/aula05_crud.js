$("header .card-body a").attr("class", "btn btn-outline-success")
$("#update").hide();

let pessoas = [];
let update = null;

$("form").on("submit", function (event) {
    event.preventDefault();
    let dados = obterDados();
    console.log("Recebi", dados);

    if ($("#add").is(":visible")) {
        pessoas.push(dados);
        console.log(pessoas);
        escreverTabela();
        console.log("Added");
    } else {
        pessoas[pessoas.indexOf(update)] = dados;
        $("#add").toggle();
        $("#update").toggle();
        console.log("Updated");
    }
    
    $("#clean").click();
});

function obterDados() {
    let nome = $("#nome").val();
    let idade = $("#idade").val();
    let cidade = $("#cidade").val();

    return {
        nome: nome,
        idade: idade,
        cidade: cidade,
    };
    console.log("recebi", nome, idade, cidade);
}

function escreverTabela() {
    $("tbody").empty();

    pessoas.forEach((pessoa) => {
        $("tbody").append(
            $("<tr>").append(
                $("<td>", { text: pessoa.nome }),
                $("<td>", { text: pessoa.idade }),
                $("<td>", { text: pessoa.cidade }),
                $("<td>").append(
                    $("<button>", {
                        text: "Edit",
                        class: "btn btn-outline-primary",
                        click: function () {
                            update = pessoa;
                            $("#nome").val(pessoa.nome);
                            $("#idade").val(pessoa.idade);
                            $("#add").hide();
                            $("#update").show();
                        },
                    }),
                   
                )
            )
        );
    });
}