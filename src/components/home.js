import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { newWord } from "../actions/new_word"

function Home() {
    const words = useSelector(state => state.words);
    const dispatch = useDispatch();

    return (
        <main className="Home">
            <p>State: {words}</p>
            <button 
                onClick={() => dispatch(newWord("new word creation"))}
            >
                Add new word
            </button>
        </main>
    );
}

export default Home;
