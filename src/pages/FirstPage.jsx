import React, { useState } from "react"

export const FirstPage = () => {

    const [valor, setValor] = useState(10)
    const modificarEstado = (num) => {
        setValor(Math.max(valor+num, 0)) 
    }

    

    return (
        <>
        <h1>Contador</h1>
        <h1>{valor}</h1>
        <button onClick={() => modificarEstado(+1)}> +1 </button>
        <button onClick={() => modificarEstado(-1)}> -1 </button> <br />
        <button onClick={() => modificarEstado(10)}> Reset </button> <br />

        </>
    )
}