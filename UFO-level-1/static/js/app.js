// Grab Data
const tableData = data;
const tableBody = d3.select("tbody");

//Add rows to blank table
function table_Build(data) {
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

function dateClick() {

    // Get user entered data if present
    const date = d3.select("#datetime").property("value");
    let newData = tableData;
  
    // Fliter Data is entered
    if (date) {
      newData = newData.filter(row => row.datetime === date);
    }
  
    // Build Table
    table_Build(newData);
  }
  
  // Attach Event to Button 
  d3.selectAll("#filter-btn").on("click", dateClick);


table_Build(tableData);
