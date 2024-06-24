import { useMemo, useState } from 'react'
import DataTable from 'react-data-table-component'
import useData from '../hooks/useData.js'

// const data = [
//   { nombre: 'Laptop', categoria: 'Equipos electrónicos', precio: 100 },
//   { nombre: 'Celular', categoria: 'Equipos electrónicos', precio: 200 },
//   { nombre: 'Pan', categoria: 'Comida', precio: 300 },
//   { nombre: 'Jamón', categoria: 'Comida', precio: 400 },
//   { nombre: 'Polo Talla L', categoria: 'Ropa', precio: 500 },
//   { nombre: 'Pantalón talla 32', categoria: 'Ropa', precio: 600 },
//   { nombre: 'Jeans grandes', categoria: 'Ropa', precio: 700 },
//   { nombre: 'Collar', categoria: 'Accesorios', precio: 800 },
//   { nombre: 'Panes', categoria: 'Comida', precio: 900 },
//   { nombre: 'Manzana', categoria: 'Comida', precio: 1000 },
//   { nombre: 'Chocolate', categoria: 'Comida', precio: 100 },
//   { nombre: 'Galletas', categoria: 'Comida', precio: 200 },
//   { nombre: 'Jugos', categoria: 'Comida', precio: 300 },
//   { nombre: 'Pizza', categoria: 'Comida', precio: 400 },
//   { nombre: 'Teclado Motospeed', categoria: 'Equipos electrónicos', precio: 500 },
//   { nombre: 'Teclado Mecánico', categoria: 'Equipos electrónicos', precio: 600 },
//   { nombre: 'Otros 1', categoria: 'Otros', precio: 700 },
//   { nombre: 'Otros 2', categoria: 'Otros', precio: 800 },
//   { nombre: 'Otros 3', categoria: 'Otros', precio: 900 },
//   { nombre: 'Otros 4', categoria: 'Otros', precio: 1000 }
// ]

const DataTableComponent = () => {
  const { data } = useData('https://jsonplaceholder.typicode.com/posts')
  const [filter, setFilter] = useState('')
  const dataTable = data?.posts
    .filter(item => item.title.toLowerCase().includes(filter.toLowerCase()))
    .map((post) => {
      return {
        id: post.id,
        title: post.title,
        body: post.body
      }
    })
  console.log('Hola')
  const columns = [
    {
      name: 'id',
      selector: (row) => row.id,
      sortable: true,
      width: '4%'

    },
    {
      name: 'title',
      selector: (row) => row.title,
      sortable: true,
      width: '20%'
    },
    {
      name: 'body',
      selector: (row) => row.body,
      sortable: true,
      width: '40%'
    }
  ]

  // const matchesPrice = product.precio <= filter.price
  // const matchesCategory =
  //   filter.category === 'all' || product.categoria === filter.category
  // const filteredpost = useMemo(() => {
  //   return data?.filter((post) => {
  //     const matchesName = post.title
  //       .toLowerCase()
  //       .includes(filter.name.toLowerCase())
  //     return matchesName
  //   })
  // }, [])

  const handleInputChange = (e) => {
    setFilter(e.target.value)
  }

  const cleanFilter = () => {
    if (filter) {
      setFilter('')
    }
  }

  return (
    <div className='bg-green-800 flex flex-col '>
      <section className="m-auto my-4 w-3/12 ">
        <div className="flex items-center gap-2">
          <input
            id="name"
            type="text"
            name='name'
            value={filter}
            onChange={handleInputChange}
            placeholder='search'
            className="w-full h-9 rounded-lg px-4 text-[20px]"
          />
          <button
            className='bg-blue-600 hover:bg-blue-900 rounded shadow-md hover:shadow-lg transition duration-150 ease-in-out flex items-center text-white p-2'
            onClick={cleanFilter}
          >
            Limpiar
          </button>
        </div>
        {/*
         <div className="flex-1">
          <label htmlFor="name">Categoría</label>
          <select
            name="category"
            id="category"
            onChange={handleInputChange}
            className="w-full h-8 rounded-md px-4"
          >
            <option value="all">Todos</option>
            <option value="Comida">Comida</option>
            <option value="Ropa">Ropa</option>
            <option value="Equipos electrónicos">Equipos electrónicos</option>
            <option value="Accesorios">Accesorios</option>
            <option value="Otros">Otros</option>
          </select>
        </div>

        <div className="flex-1">
          <label htmlFor="name">Precio</label>
          <input
            id="price"
            name="price"
            type="range"
            min="100"
            max="1000"
            value={filter.price}
            onChange={handleInputChange}
            className="w-full h-8 rounded-md "
          />
          {filter.price}
        </div>
      */}
      </section>
      {data.error && <h2>Error en la petición</h2>}
      <DataTable
        /* color header */
        title="Lista de Post"
        columns={columns}
        data={dataTable}
        selectableRows
        progressPending={data.loading}
        progressComponent={<h2>Cargando...</h2>}
        pagination
        paginationPerPage={10}
        onSelectedRowsChange={(data) => console.log(data)}
        fixedHeader
      ></DataTable>
    </div>
  )
}

export default DataTableComponent
