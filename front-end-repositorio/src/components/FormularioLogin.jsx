import { useState, useEffect } from 'react'
import { getAllUsers } from '../api/users.api'; // - getAllUsers -> es una funcion que realiza una consulta a la api para ver todos los users  


const FormularioLogin = () => {
  // - Creo users en el cual se van a guardar todos los usuarios para luego verificar si el email y usuario estan en la base de datos  
  const [ users, setUsers ] = useState('')
  // - Creo los useState para guardar los values de email y password 
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  // - El useEffect hace que ejecute una funcion al cargar la pagina es una funcion asincrona que ejecuta la funcion getAllUser 
  useEffect(() => {
      async function loadUsers() {
        const res = await getAllUsers()
        setUsers(res.data)
      }
      loadUsers()
    }, [])

  // console.log(users)

// - Funcion del form que hace la comprovación para  
  const handlerSubmit = (e) => {
    e.preventDefault()

    // Validamos el formulario 
    if ([ email, password ].includes('')){
      console.log('Error deber llenar todos los datos son obligatorios')

      
    return
  }
      
    const objectUser = { email, password }

    const foundUser = users.find((user) => user.email_academico === objectUser.email && user.password === objectUser.password);
    
    if (foundUser) {
      // - Login si los datos estan el la base de datos redirecciona a la pagina homeUser 
      console.log('Si esta en la base de datos ')
      
    } else {
      console.log('no esta en la base de datos')
    }

    

    
    console.log(objectUser)
  
  }




  return (
    <form action="" className="flex flex-col px-8 md:mr-20 text-sm" onSubmit={handlerSubmit}>
      <p className="mb-7">Ingrese su cuenta INACAPMail o su RUT:</p>
      <input
        className="h-7 p-1 border border-gray-400"
        type="text"
        placeholder="usuario@inacapmail.cl o RUT" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="h-7 p-1 border border-gray-400 mt-2"
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="pt-2 pb-6 ">
        <input type="checkbox" name="" id="" placeholder="" />
        <label htmlFor="">
          <span> </span> Mantener la sesión iniciada
        </label>
      </div>

      <input type="submit" className="bg-red-600 text-white w-32 py-1 px-3 mb-5 cursor-pointer" placeholder='Iniciar sesión'/>
        
      
      <p>
        Recuperar clave. Click{" "}
        <a href="" className="text-red-600">
          aquí
        </a>
      </p>
    </form>
  );


};

export default FormularioLogin;
