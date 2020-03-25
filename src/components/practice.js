import React from 'react';

import '../App.css';

class Practice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vocabulary: props.vocabulary,
            wordToPractice: "Click me to start!",
            wordToPracticeSolution: "",
            wordToPracticeUser: "",
            start: true,
            numberCorrect: 0,
            numberWrong: 0,
        };
    }

    startPractice = () => {
        this.setState({start: false});
        this.random_word();
    }

    random_word = () => {
        var word = this.state.vocabulary[Math.floor(Math.random()*this.state.vocabulary.length)];
        this.setState({ 
            wordToPractice: word["Word1"], 
            wordToPracticeSolution: word["Word2"],
        });
    };

    check_word = () => {
        if ( this.state.wordToPracticeUser === this.state.wordToPracticeSolution) {
            this.setState({numberCorrect: this.state.numberCorrect+1, wordToPracticeUser: ""});
            this.random_word();
        } else {
            this.setState({numberWrong: this.state.numberWrong+1});
        }
    }

    handleChange = (event) => {
        this.setState({wordToPracticeUser: event.target.value});
    }

    handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            this.check_word();
        }
      }

    render() {

        return (
            <React.Fragment>
                <main>

                    <div>
                        Correct words: {this.state.numberCorrect} <br></br>
                        Incorrect words: {this.state.numberWrong} <br></br> 
                    </div>
                    <br></br>
                    <span className="practiceWord" onClick={this.state.start ? this.startPractice : null}>
                        {this.state.wordToPractice}
                    </span>
                    <br></br>
                    <br></br>

                    {this.state.start
                        ? null  
                        :
                        <div>
                            <label>Your Translation:</label><br></br>
                            <input type="text" 
                            value={this.state.wordToPracticeUser} 
                            onChange={this.handleChange}
                            onKeyPress={this.handleKeyPress}
                            />
                            <br></br>
                            <button onClick={this.check_word}>
                                Check word
                            </button>
                        </div>
                    }
                 
                </main>
            </React.Fragment>
        );
    }
}


export default Practice;