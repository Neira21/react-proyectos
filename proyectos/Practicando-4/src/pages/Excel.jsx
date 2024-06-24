import ExportToExcel from '../components/excel/ExportToExcel';

const data = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Jake', age: 35 }
];

const chartData = [
  {
    labels: ['John', 'Jane', 'Jake'],
    values: [30, 25, 35]
  }
];

const Excel = () => {
  return (
    <div>
      <h1>Exportar Datos a Excel</h1>
      <ExportToExcel data={data} chartData={chartData} fileName="DatosExportados" />
    </div>
  );
};

export default Excel;
