const ExcelJs= require('exceljs');

async  function readExcelFile() {
const workbook = new ExcelJs.Workbook();

await workbook.xlsx.readFile('path/to/your/excel/file.xlsx')

    const worksheet = workbook.getWorksheet('Sheet1');
    
    worksheet.eachRow((row, rowNumber) => {
        
        row.eachCell((cell, colNumber) => {
                console.log(cell.value);
    });
});
}

readExcelFile();
