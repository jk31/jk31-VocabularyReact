import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { newWord } from "../actions/new_word"

function Change() {
    const words = useSelector(state => state.words);
    const dispatch = useDispatch();

    return (
        <main className="Change">
            <p>State: {words}</p>
            <button 
                onClick={() => dispatch(newWord("Change from Change page."))}
            >
                Add new word
            </button>
        </main>
    );
}

export default Change;
