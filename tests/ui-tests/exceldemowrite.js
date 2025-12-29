const ExcelJs= require('exceljs');

async  function readExcelFile() {
    let output = [{row:-1, col:-1}];
const workbook = new ExcelJs.Workbook();

await workbook.xlsx.readFile('path/to/your/excel/file.xlsx')

    const worksheet = workbook.getWorksheet('Sheet1');
    
    worksheet.eachRow((row, rowNumber) => {
        
        row.eachCell((cell, colNumber) => {
                if (cell.value === "Dell Laptop") {
                    output.row = rowNumber;
                    output.col = colNumber;
                }
    });
});
    const cell= worksheet.getCell(output.row, output.col)
    cell.value = "HP Laptop";
    await workbook.xlsx.writeFile('path/to/your/excel/file.xlsx')

}

readExcelFile();
