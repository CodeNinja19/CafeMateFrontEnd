export const setValueLogin= (value)=>{
    return {
        type:"SETVALUELOGIN",
        payload:value,
    }
}

export const toggleValueLogin=()=>{
    return {
        type:"TOGGLELOGIN",
    }
}

export const getValue=()=>{
    return {
        type:"GETVALUEASYNC",
    }
}