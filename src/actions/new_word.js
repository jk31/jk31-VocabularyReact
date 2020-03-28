export const newWord = (new_word) => {
    return {
        type: "NEW_WORD",
        payload: new_word
    }
};