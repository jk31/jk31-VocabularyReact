import React from 'react';

class VocabularyList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vocabulary: props.vocabulary,
        };
    }
    
    render() {

        const listWords = this.state.vocabulary.map((word, index) =>
            <tr key={index}>
                <td>{word["Word1"]}</td>
                <td>{word["Word2"]}</td>
            </tr>
        )

        return (
            <React.Fragment>
                <main>
                    <h3>Vocabulary List</h3>
                    <table width="30%">
                        <tbody>
                            {listWords}
                        </tbody>  
                    </table>
                </main>
            </React.Fragment>
        );
    }
}


export default VocabularyList;