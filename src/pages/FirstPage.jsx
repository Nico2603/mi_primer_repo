import {useContador} from "../hooks/useContador"

//useState
//REFACTOR

export const FirstPage = () => {

    const {valor, modificarEstado, reset} = useContador(200)
    return (
        <>
        <h1>Contador Mejorado</h1>
        <hr/>
        <h1>{valor}</h1>
        <button onClick={() => modificarEstado(+1)}> +1 </button>
        <button onClick={() => modificarEstado(-1)}> -1 </button> <br />
        <button onClick={reset}> Reset </button> <br />
        </>
    )
}