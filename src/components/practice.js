import React from 'react';

import '../App.css';

class Practice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vocabulary: [
                {
                    "Language1": "English",
                    "Language2": "German",
                    "Word1": "tree",
                    "Word2": "Baum",
                },
                {
                    "Language1": "English",
                    "Language2": "German",
                    "Word1": "house",
                    "Word2": "Haus",
                },
            ],
            wordToPractice: "Click me to start!"
        };
    }

    random_word = () => {
        var word = this.state.vocabulary[Math.floor(Math.random()*this.state.vocabulary.length)];
        this.setState({ wordToPractice: word["Word1"] });
    };

    render() {
        return (
            <React.Fragment>
                <main>
                    <span 
                    className="practiceWord"
                    >
                        {this.state.wordToPractice}
                    </span>
                    <br></br>
                    <br></br>
                    <button onClick={this.random_word}>
                        OK
                    </button>
                </main>
            </React.Fragment>
        );
    }
}


export default Practice;