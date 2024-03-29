function copyCells() {

  // Get the active spreadsheet and select the "Sheet1" sheet
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1');
  const lastRow = spreadsheet.getLastRow();

  const fillDownRangeB = spreadsheet.getRange(3, 2, (lastRow - 1)); //row, column
  const fillDownRangeC = spreadsheet.getRange(3, 3, (lastRow - 1)); //row, column

  spreadsheet.getRange("B2").copyTo(fillDownRangeB); // selects the cell to copy from
  spreadsheet.getRange("C2").copyTo(fillDownRangeC); // selects the cell to copy from


// sets the formula
  spreadsheet.getRange("D2").setFormula("=CONCATENATE('Clicks'!$A2,'Tracking'!$A2,A2)"); // selects the cell to copy from

  // selects the cell to copy the formula
  const fillDownRange = spreadsheet.getRange(3, 4, (lastRow - 1)); spreadsheet.getRange("D2").copyTo(fillDownRange); 

  // debugger

  // Logger.log();
 
}
