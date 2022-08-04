$("body").attr("class", "bg-dark");

$("<header>", { class: "row" })
  .append(
    $("<section>", { class: "col" }).append(
      $("<div>", { class: "card bg-danger text-light" }).append(
        $("<div>", { class: "card-body text-center" }).append(
          $("<h1>", { text: "Página vertical" })
        )
      )
    )
  )
  .appendTo("body");

$("body")
  .append(
    $("<section>", { class: "row" }).append(
      $("<aside>", { class: "col-3 mt-4" }).append(
        $("<section>", { class: "col" }).append(
          $("<div>", { class: "card bg-danger text-light" }).append(
            $("<div>", { class: "card-body text-center" }).append(
              $("<nav>", { class: " bg-danger text-light " }).append(
                $("<a>", { href: "/aula05/aula05.html", text: "Inicio", class: "btn btn-outline-light me-2 mb-1 btn-block form-control" }),
                $("<a>", { href: "/aula05/menu_lateral.html", text: "Página Vertical", class: "btn btn-outline-light mb-1 me-2 btn-block form-control" })
              )
            )
          )
        )
      ),
      $("<main>", { class: "col mt-4" }).append(
        $("<section>", { class: "col" }).append(
          $("<div>", { class: "card" }).append(
            $("<div>", { class: "card-body  bg-dark" }),
            $("<div>", { class: "card-footer text-light bg-dark",text:"Say Goodbye" })
          )
        )
      )
    )
  )
  .appendTo("body");


$("main .card-body").append(
  $("<table>", {
    class: "table table-bordered table-striped table-danger"
  }).append(
    $("<thead>", {Class:"text-light bg-danger"}).append(
      $("<th>", { text: "Nome" }),
      $("<th>", { text: "Idade" }),
      $("<th>", { text: "Cidade" })
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
);