function insert_Row() {
    //Write your code here
	 // Get the reference to the table
    var table = document.getElementById('sampleTable');

    // Create a new row at the beginning of the table (insert at position 0)
    var newRow = table.insertRow(0);

    // Insert two cells into the new row
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    // Set the text content for the new cells
    cell1.textContent = 'New Cell1';
    cell2.textContent = 'New Cell2';
  
  
}
