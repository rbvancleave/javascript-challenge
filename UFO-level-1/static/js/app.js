// Grab Data
const tableData = data;
const tableBody = d3.select("tbody");

//Add rows to blank table
function table(data) {
    tableBody.html("");
    data.forEach((row) => {
        const new_row = tableBody.append("tr");
        
        Object.values(row).forEach((value) => {
            let dp = new_row.append("td");
                dp.text(value);
            }
        );
    });
}




table(tableData);
