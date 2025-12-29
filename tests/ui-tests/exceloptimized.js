const ExcelJs= require('exceljs');

async  function writeExcelFile(searchText, replaceText, filePath) {
    
    const workbook = new ExcelJs.Workbook();
    await workbook.xlsx.readFile(filePath);
    const worksheet = workbook.getWorksheet('Sheet1');

    const output = readExcelFile(worksheet, searchText);
    const cell= worksheet.getCell(output.row, output.col)
    cell.value = replaceText;
    await workbook.xlsx.writeFile(filePath)

}
async function readExcelFile(worksheet,searchText){
    let output = {row:-1, col:-1};
    worksheet.eachRow((row, rowNumber) => {
        
        row.eachCell((cell, colNumber) => {
                if (cell.value === searchText) {
                    output.row = rowNumber;
                    output.col = colNumber;
                }
    });
    return output;
});

}

writeExcelFile("Banana","Apple","/users/excel.xlsx");