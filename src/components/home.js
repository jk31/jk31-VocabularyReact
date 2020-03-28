import React from 'react';
import { newWord } from "../actions/new_word"
import { connect } from 'react-redux'

class Home extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {


        return (
            <main className="Home">
                <p>State: {this.props.words}</p>
                <button 
                    onClick={() => this.props.new_word()}
                >
                    Add new word
                </button> <br></br>
                <button onClick={() => console.log("nothing")}>
                    Store
                </button>
            </main>
        );
    }
}

// with second argument it can be conditioned what is stated
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
