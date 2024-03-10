import axios from "axios"
import { API_URL } from "../../constants/env"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import RegistroTemplate from "../templates/RegistroTemplate"

const Registro = () => {
    const nav = useNavigate()
    const [error, setError] = useState(null)
    const handleSumit = (e) => {
        e.preventDefault(null)

        const data = {
            email: e.target.email.value,
            password: e.target.password.value,
            details: {
                fullname: e.target.nombre.value,
            },
        }

        axios.post(`${API_URL}/public/users`, data)
        .then(() => {
            nav("/login")
        })
        .catch((err) => {
            setError(err)
            console.log(err);
        })
    }

    return (
        <RegistroTemplate title="Registro">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSumit}>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="nombre"
                    >
                        Nombre Completo
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="nombre"
                        id="nombre"
                        type="text"
                        placeholder="Nombre Completo"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="username"
                    >
                        Username
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="email"
                        id="email"
                        type="email"
                        placeholder="Correo electrónico"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="password"
                    >
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight mb-3 focus:outline-none focus:shadow-outline"
                        name="password"
                        id="password"
                        type="password"
                        placeholder="******************"
                        required
                    />
                    <p className="text-red-500 text-xs italic">
                        Porfavor ingrese una contraseña.
                    </p>
                </div>
                {error && (
                    <p className="text-center p-2 bg-red-100 text-red-800">
                        {error?.response?.data.errors[0].message}
                    </p>
                )}
                <div className="flex items-center justify-center">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Crear cuenta
                    </button>
                </div>
            </form>
        </RegistroTemplate>

    )
}

export default Registro