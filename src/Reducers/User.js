const User={username:" "};

const ChangeUser =function(state=User,action){
    switch(action.type){
        case "SETUSER": return {...action.payload};
        default: return {...state};
    }
};

export default ChangeUser;