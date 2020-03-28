import React from 'react';
import { newWord } from "../actions/new_word"
import { connect } from 'react-redux'

function Home(props) {

    return (
        <main className="Home">
            <p>State: {props.words}</p>
            <button 
                onClick={() => props.new_word()}
            >
                Add new word
            </button>
        </main>
    );
}

const mapStateToProps = state => {
    return {
       words: state.words
    }
}

const mapDispatchToProps = dispatch => {
    return {
        new_word: () => dispatch(newWord("new word from mapdispatch"))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
