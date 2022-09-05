import { useState } from "react"

//CUSTOM HOOK!!!!!!!!! PARA FORMULARIOS
export const useForm = (initialState= {}) => {

    const [values, setValues] = useState(initialState);
    const reset=()=>{
        setValues(initialState);
    }
    const handleInputChange= ({target})=>{ 
        setValues({
            ...values,
            [target.name]: target.value
        })
    }

    return[values,handleInputChange,reset];
}
//recibe un objeto que tiene las props de un campo de texto
//o de un formulario con el handle input change se lee lo que se le
//pase por el input y tomar ese valor 