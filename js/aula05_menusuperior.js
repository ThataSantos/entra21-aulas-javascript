$("body").attr("class", "bg-dark");
$("<header>", { class: "row"}).append(
    $("<section>", { class: "col" }).append(
        $("<div>", { class: "card bg-danger text-light" }).append(
            $("<div>", { class: "card-body text-center" }).append(
                $("<a>", { href: "/aula05/aula05.html", text: "Inicio", class: "btn btn-outline-light me-2" }),
                $("<a>", { href: "/aula05/menu_lateral.html", text: "Página Vertical", class: "btn btn-outline-light me-2" })

            )
        )
    )
).appendTo("body");

$("<main>", { class: "row mt-3 bg-danger " })
  .append(
    $("<section>", { class: "col" }).append(
      $("<div>", { class: "card" }).append(
        $("<div>", { class: "card-body bg-dark" }), 
        $("<div>", { class: "card-footer text-light bg-dark",text:"Say Goodbye" })
      )
    )
  )
  .appendTo("body");


  $("main .card-body").append(
    $("<table>",{class:"table table-bordered table-striped table-danger "}).append(
        $("<thead>", {Class:"text-light bg-danger"}).append(
            $("<th>",{text:"Nome"}),
                $("<th>",{text:"Idade"}),
                $("<th>",{text:"Cidade"}),
        ),
        $("<tbody>").append(
            $("<tr>").append(
                $("<td>",{text:"Thabata"}),
                $("<td>",{text:"29"}),
                $("<td>",{text:"Florianópolis"}),
            ),
            $("<tr>").append(
                $("<td>",{text:"Joãozinho"}),
                $("<td>",{text:"25"}),
                $("<td>",{text:"Palhoça"}),
            ),
        )
    )
  )