import { useEffect, useState } from "react"
import { useForm } from 'react-hook-form'
import useDateModal from "./useDateModal"

let empleadosInit = [
  {id: 1, nombre: 'Juan', apellido: 'Perez', edad: 30, tipoDocumento: 1, area: 1, activo: true, fechaIngreso: '2022/06/03' , fechaSalida: '2023/06/07'},
  {id: 2, nombre: 'Maria', apellido: 'Gomez', edad: 20 , tipoDocumento: 2, area: 2, activo: false, fechaIngreso: '2020/06/03' , fechaSalida: '2022/06/07' },
  {id: 3, nombre: 'Carlos', apellido: 'Gutierrez', edad: 20 , tipoDocumento: 3, area: 3, activo: true, fechaIngreso: '2019/06/03' , fechaSalida: '2022/06/07'},
  {id: 4, nombre: 'Luis', apellido: 'Martinez', edad: 30 , tipoDocumento: 1, area: 1, activo: false, fechaIngreso: '2008/06/03' , fechaSalida: '2023/06/07'},
  {id: 5, nombre: 'Ana', apellido: 'Fernandez', edad: 30 , tipoDocumento: 2, area: 2, activo: true, fechaIngreso: '2020/06/03' , fechaSalida: '2024/06/07'},
  {id: 6, nombre: 'Lucia', apellido: 'Diaz', edad: 40 , tipoDocumento: 3, area: 3, activo: false, fechaIngreso: '2018/06/03' , fechaSalida: '2026/06/07'},
  {id: 7, nombre: 'Eva', apellido: 'Rodriguez', edad: 10 , tipoDocumento: 1, area: 1, activo: true, fechaIngreso: '2017/06/03' , fechaSalida: '2018/06/07'},
  {id: 8, nombre: 'Pedro', apellido: 'Alvarez', edad: 20 , tipoDocumento: 2, area: 2, activo: false, fechaIngreso: '2017/06/03' , fechaSalida: '2020/06/07'},
  {id: 9, nombre: 'Alberto', apellido: 'Benitez', edad: 40 , tipoDocumento: 3, area: 3, activo: true, fechaIngreso: '2023/06/03' , fechaSalida: '2022/06/07'},
  {id: 10, nombre: 'Sofia', apellido: 'Blanco', edad: 40 , tipoDocumento: 1, area: 1, activo: false, fechaIngreso: '2024/06/03' , fechaSalida: '2025/06/07'},
]


const EmpleadosFiltro = () => {

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
  };

  const {
    dateModal: startDateModal,
    changeStateDateModal : changeStartDateModal ,
    date: startDate,
    dateToShow: startDateToShow,
    setDateToShow: setStartDateToShow,
  } = useDateModal();

  const {
    dateModal: endDateModal,
    changeStateDateModal : changeEndDateModal ,
    date: endDate,
    dateToShow: endDateToShow,
    setDateToShow: setEndDateToShow,
  } = useDateModal();

  const styles = 'table table-striped table-hover'
  const formStyles = 'form-group d-flex justify-content-around'
  
  const { handleSubmit, register, setValue } = useForm()
  const [empleadosFiltrados, setEmpleadosFiltrados] = useState(empleadosInit)
  const [empleados, setEmpleados] = useState(empleadosInit)
  
  useEffect(() => {
    setEmpleados(empleados)
  }, [])

  useEffect(() => {
    setValue("fechaDesde", formatDate(startDate));
    setValue("fechaHasta", formatDate(endDate));
  }, [startDate, endDate, setValue]);

  const onSubmit = (data) => {
    console.log(data)
    const filteredEmpleados = empleados.filter(empleado => {
      const estadoFilter = data.estado ? (data.estado === '1' ? empleado.activo : !empleado.activo) : true;
      const areaFilter = data.area ? empleado.area === parseInt(data.area) : true;
      const edadFilter = data.edad ? empleado.edad === parseInt(data.edad) : true;
      const fechaDesde = data.fechaDesde ? new Date(data.fechaDesde) <= new Date(empleado.fechaIngreso) : true;
      const fechaHasta = data.fechaHasta ? new Date(data.fechaHasta) >= new Date(empleado.fechaSalida) : true;
      return estadoFilter && areaFilter && edadFilter && fechaDesde && fechaHasta;
    });
    setEmpleadosFiltrados(filteredEmpleados);
  }

  return (
    <>
      <div>Filtro de Empleados</div>
      <form className={formStyles} onSubmit={handleSubmit(onSubmit)}>
        
      <select {...register("edad")}>
          <option value="" hidden>Edad</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
        </select>

        <select {...register("area")}>
          <option value="" hidden>Area</option>
          <option value="1">Area 1</option>
          <option value="2">Area 2</option>
          <option value="3">Area 3</option>
        </select>

        <select {...register("estado")}>
          <option value="" hidden>Status</option>
          <option value="1">Activo</option>
          <option value="2">Inactivo</option>
        </select>
        AÑO/MES/DIA
        <div onClick={() => changeStartDateModal(true)}>
          <label>Fecha Desde: {startDateToShow || "Seleccionar Fecha"}</label>
        </div>
        {startDateModal()}

        <div onClick={() => changeEndDateModal(true)}>
          <label>Fecha Hasta: {endDateToShow || "Seleccionar Fecha"}</label>
        </div>
        {endDateModal()}
       
        <button>Filtrar</button>
      </form>

      <div>
        <table className={styles}>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Edad</th>
              <th>Area</th>
              <th>Activo</th>
              <th>Fecha de Ingreso</th>
              <th>Fecha de Salida</th>
            </tr>
          </thead>
          <tbody>
            {empleadosFiltrados.map((empleado) => (
              <tr key={empleado.id}>
                <td>{empleado.nombre}</td>
                <td>{empleado.apellido}</td>
                <td>{empleado.edad}</td>
                <td>{empleado.area}</td>
                <td>{empleado.activo ? 'Activo' : 'Inactivo'}</td>
                <td>{empleado.fechaIngreso}</td>
                <td>{empleado.fechaSalida}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default EmpleadosFiltro
