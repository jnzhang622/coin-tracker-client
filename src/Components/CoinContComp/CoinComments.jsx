import React from 'react';

class CoinComments extends React.Component {

    state= {
        comments: []
    }

    // componentDidMount(){
    //     fetch(``)
    //         .then(resp => resp.json())
    //         .then(arr => { this.setState({ comments: arr }) })
    // }

    render() {
        return (
            <div name="CommentsSection">
                <h2>Comments</h2>
                <input type="textarea" name="commentsTextInput"/>
            </div>
            )
        }
    }

export default CoinComments;