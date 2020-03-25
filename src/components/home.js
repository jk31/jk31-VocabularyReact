import React from 'react';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: "",
            userInput: "",
            vocabulary: [],
        };
    }

    handleChange = (event) => {
        this.setState({userInput: event.target.value});
    }

    upload_data = () => {
        console.log("INPUT " + this.state.userInput);
        this.setState({data: this.state.userInput}, function() {
            console.log("state data:" + this.state.data);
        });
        var data = this.state.data.split("\n");
        console.log("stata data again: " + this.state.data);
        var data_split = data.map((row, index) => 
            row.split(",")
        )
        data_split.map((row, index) => {
            var new_element = this.state.vocabulary.push(
                [
                 {
                    "Language1": row[0],
                    "Language2":  row[1],
                    "Word1":  row[2],
                    "Word2":  row[3],
                 }
                ]
            )
            this.setState({vocabulary: new_element})
        }
        )
        console.log(this.state.vocabulary)
    }

    render() {
        return (
            <main className="Home">
            <p>HOME</p>

            <div>
                <label>Your Dataset:</label><br></br>
                <textarea 
                value={this.state.userInput}
                onChange={this.handleChange}
                />
                <br></br>
                <button onClick={this.upload_data}>
                    Data
                </button>
            </div>
            </main>
        );
    }   
}

export default Home;


/* 
English	German	zealous	eifrig
English	German	compelling	zwingend
English	German	striving	Streben */