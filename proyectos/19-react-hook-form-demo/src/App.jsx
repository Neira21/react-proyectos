import { useForm } from 'react-hook-form'

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset
  } = useForm()

  console.log(errors)

  const onSubmit = handleSubmit((data) => {
    console.log('data', data)
    // enviar a una base de datos
    alert('Enviando Formulario')
    reset()
  })

  return (
    <>
      <h1>Formulario</h1>
      <form onSubmit={onSubmit} >
        <label htmlFor='nombre'>Nombre</label>
        <input id="nombre" type="text" {...register("nombre", {
          required: {
            value: true,
            message: 'Nombre requerido'
          },
          minLength: {
            value: 2,
            message: 'Mínimo 2 letras'
          },
          maxLength: {
            value: 6,
            message: 'Máximo 6 letras'
          },
        })} />
        {
          errors.nombre && <span style={{ color: 'red' }}>{errors.nombre.message}</span>
        }

        <label htmlFor="correo">Correo</label>
        <input id="correo" type="email" {...register('correo', {
          required: {
            value: true,
            message: 'Correo requerido'
          },
          pattern: {
            value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            message: 'El correo debe ajustarse al patrón "nombre"@"gmail.com"'
          }
        })} />
        {
          errors.correo && <span style={{ color: 'red' }}>{errors.correo.message}</span>
        }

        <label htmlFor="password">PassWord</label>
        <input id="password" type="password" {...register('password', {
          required: {
            value: true,
            message: 'Password requerido'
          },
          pattern: {
            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,12}$/,
            message: 'El password debe tener entre 6 y 12 caracteres, al menos un número y una letra'
          }
        }
        )} />
        {
          errors.password && <span style={{ color: 'red' }}>{errors.password.message}</span>
        }

        <label htmlFor="confirmaPassword">Confirmar Password</label>
        <input id="confirmaPassword" type="password" {...register('confirmaPassword', {
          required: {
            value: true,
            message: 'Confirmar Password requerido'
          },
          validate: value => value === watch('password') || 'Los passwords no coinciden'
        }
        )} />
        {
          errors.confirmaPassword && <span style={{ color: 'red' }}>{errors.confirmaPassword.message}</span>
        }

        <label htmlFor="fechaNacimento">Fecha de Nacimiento</label>
        <input id="fechaNacimiento" type="date" {...register('fechaNacimiento', {
          required: {
            value: true,
            message: 'Fecha de Nacimiento requerido'
          },
          validate: value => {
            const fechaNacimiento = new Date(value)
            const fechaActual = new Date()
            const edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear()
            return edad >= 18 || 'Debes ser mayor de edad'
          }
        }
        )} />
        {
          errors.fechaNacimiento && <span style={{ color: 'red' }}>{errors.fechaNacimiento.message}</span>
        }


        <label htmlFor="pais">País </label>
        <select id="pais" {...register('pais')}>
          <option value="mx">México</option>
          <option value="co">Colombia</option>
          <option value="ar">Argentina</option>
        </select>

        {
          watch('pais') === 'ar' && (
            <input type='text' placeholder='Provincia'
              {...register('provincia', {
                required: {
                  value: true,
                  message: 'Provincia requerida'
                }
              })} />
          )
        }

        <label htmlFor="foto">Foto de perfil</label>
        <input id="foto" type="file" onChange={(e) => {
          console.log(e.target.value[0])
          setValue('fotoDelUsuario', e.target.files[0].name)
        }} />


        <div style={{ display: "flex", gap: '10px' }}>
          <label htmlFor="acepto">Acepto terminos y condiciones</label>
          <input id="acepto" type="checkbox" {...register('terminos', {
            required: true
          }
          )} />
          {
            errors.terminos && <span style={{ color: 'red' }}>Acepta términos y condiciones requeridas</span>
          }
        </div>

        <input type="submit" value='Enviar' />
        {JSON.stringify(watch(), null, 2)}
      </form>
    </>
  )
}

export default App
