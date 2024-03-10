import axios from "axios";
import { API_URL } from "../../constants/env";
import { setToken } from "../../helpers/auth";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import LoginTemplate from "../templates/LoginTemplate";

const Login = () => {
    const nav = useNavigate()
    const [error, setError] = useState(null)

    const handleSumit = (e) => {
        e.preventDefault(null)
        setError()
        /* alert("Formulario enviado"); */
        const data = {
            email: e.target.email.value,
            password: e.target.password.value
        }

        axios.post(`${API_URL}/public/login`, data)
            .then((resp) => {
                setToken(resp.data.data.token)
                nav("/")
            })
            .catch((err) => {
                // Handle errors gracefully
                if (err.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    const errorMessage = err.response.data.errors[0].message; // Assuming first error message
                    setError(errorMessage); // Set a user-friendly error message
                } else if (err.request) {
                    // The request was made but no response was received
                    // `err.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in Node.js
                    setError('Network Error: Could not connect to server.');
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.error('Error:', err.message);
                    setError('An unexpected error occurred. Please try again later.'); // User-friendly error
                }
            })
    }

    return (
        <LoginTemplate title="Iniciar sesión">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSumit}>
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
                        Please choose a password.
                    </p>
                </div>
                {error && (
                    <p className="text-center p-2 bg-red-100 text-red-800">{error}</p>
                )}
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Ingresar
                    </button>
                    <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" to="/registro">¿Deseas registrate?</Link>
                </div>
            </form>
        </LoginTemplate>
    )
}

export default Login