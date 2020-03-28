const Words = (state = "default state in words.js", action) =>  {
    switch(action.type){
        case "NEW_WORD":
            return state = action.payload;
        default:
            return state
    }
}

export default Words;