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
        console.log(this.props.currentUser)
        return (
            <div name="CommentsSection">
                <h2>Comments</h2>
                {
                    // this.state.comments.map(comment => {
                    //     return 
                    //     <div>
                    //         {comment.user}
                    //         {comment.timestamp}
                    //         {comment.comment}
                    //     </div>
                    // })
                    
                }
                {this.props.currentUser != null ? 
                <div>
                    <input type="textarea" name="commentsTextInput" onChange={this.handleChange} />
                    <button className="ui button" type="submit" >Post</button>
                </div>
                :
                null
                }
            </div>
            )
        }
    }

export default CoinComments;