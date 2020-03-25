import React from 'react';

class VocabularyList extends React.Component {
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
    };
    }
    render() {

        const listWords = this.state.vocabulary.map((word) =>
            <li key={word.toString()}>{word["Word1"]}</li>
        )
        // item["Language1"]["English"]
        // Object.keys(word["Language1"])[0]

        return (
            <React.Fragment>
                <p>some text</p>
                <ul>
                    {listWords}
                </ul>
            </React.Fragment>
        );
    }
}


export default VocabularyList;