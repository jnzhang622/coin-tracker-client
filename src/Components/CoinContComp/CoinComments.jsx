import React from 'react';

class CoinComments extends React.Component {

    state= {
        comments: [],
        textAreaInput: ""
    }

    handleChange = (e) => {
        this.setState({textAreaInput: e.target.value})
        console.log(this.state.textAreaInput)
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
                {
                    this.state.comments.map(comment => {
                        return <div></div>
                    })
                }
                <input type="textarea" name="commentsTextInput" onChange={this.handleChange}/>
            </div>
            )
        }
    }

export default CoinComments;