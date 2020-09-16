import React,{ createContext, useEffect, useState } from 'react'
import axios from 'axios'


export const ModalContext = createContext();

const ModalProvider = props => {
    const[ idReceta, guardarIdReceta ] = useState(null);
    
    useEffect(()=>{
        const obtenerRecetas = async () => {
            if(!idReceta) return;

            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}
            `
            const resultado = await axios.get(url)
            console.log(resultado.data.drinks[0])
        }
        obtenerRecetas()
    },[idReceta])

     return(
        <ModalContext.Provider
         value={{
            guardarIdReceta
         }}
        >
            {props.children}
        </ModalContext.Provider>
    )
}


 export default ModalProvider