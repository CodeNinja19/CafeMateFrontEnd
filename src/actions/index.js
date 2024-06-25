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

export const setUser=(value)=>{
    return {
        type:"SETUSER",
        payload:value,
    }
}