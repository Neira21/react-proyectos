import React from 'react';
import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';

const ExportToExcel = ({ data, fileName }) => {
  const handleExport = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Sheet1');

    // Add column headers and data
    const columns = Object.keys(data[0]).map((key) => ({ header: key, key }));
    worksheet.columns = columns;
    data.forEach((row) => worksheet.addRow(row));

    // Save the workbook to file
    const buffer = await workbook.xlsx.writeBuffer();
    saveAs(new Blob([buffer]), `${fileName}.xlsx`);
  };

  return (
    <button onClick={handleExport}>Exportar a Excel</button>
  );
};

export default ExportToExcel;
