import {useState} from "react"

export const useContador = (initialState) => {

    const [valor, setValor] = useState(initialState)

        const modificarEstado = (num) => {
            setValor(Math.max(valor+num, 0)) 
        }

        const reset = () =>{
            setValor(initialState)
        }
        return{
            valor,
            modificarEstado,
            reset
        }

}
