const loginState=false;


const getStatus=async function (){
    try{
        const response=await fetch("/api/isLoggedIn");
        const data=await response.json();
        return data.status;
    } catch(err){
        console.log("server is down!!");
    }
};
const ChangeLoginState=function (state=loginState,action){
    switch(action.type){
        case "SETVALUELOGIN": return action.payload;
        case "TOGGLELOGIN": return !state;
        case "GETVALUEASYNC":  return getStatus();
        default: return state;
    }
}

export default ChangeLoginState;