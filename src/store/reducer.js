


const INTIAL_STATE = {
    name : "Muhammad Shahzad",
    email: "shazhad@gmail.com"
}


// export default (state = INTIAL_STATE) => {
//     return state
// }

export default (state = INTIAL_STATE,action) => {
    switch(action.type){
        case "UPDATE_NAME":
            return({
                ...state,
                name:action.name
            })
            default: 
            return state
    }
}