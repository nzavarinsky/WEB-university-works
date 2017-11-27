$.ajax({
    url: 'http://localhost:8080/api/bears',
    type: "get",
    dataType: "json",

    success: function(data) {
        drawTable(data);
    }
});

function drawTable(data) {
    for (var i = 0; i < data.length; i++) {
        drawRow(data[i]);
    }
}

function drawRow(rowData) {
    var row = $("<article>")
    $("#personDataTable").append(row);
    Image = "<div class=\"img\"><img src=\"img/1.jpg\" alt=\"альтернативный текст\" width=\"469.56px\" height=\"150px\"></div>"
    Addition = "<a class=\"read-more\" href=\"#\">read more</a>"
    row.append($(Image));
    row.append($("<h4>" + rowData.title + "</h4>"));
    row.append($("<span>" + rowData.longdescription + "</span>"));
    row.append($("<h5>" + rowData.shortdescription + "</h5>"));
    row.append($(Addition));
}