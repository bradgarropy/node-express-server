function render(weights) {

    // create html table
    let table = "";
    weights.forEach(function(weight) {
        table += "<tr><td>" + weight.date + "</td><td>" + weight.weight + "</td></tr>";
    });

    // html template
    let html =
    `
    <html>
        <head>
            <!-- bootstrap css -->
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        </head>

        <body>

            <div class="container">

                <table class="table table-hover">
                    <tr>
                        <th>Date</th>
                        <th>Weight</th>
                    </tr>
                    ${table}
                </table>

            </div>

            <!-- jquery -->
            <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>

            <!-- bootstrap js -->
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

        </body>
    </html>
    `;

    return html;
}


// exports
exports.render = render;
