import React from "react";
import Comment from './Comment';
class CoinComments extends React.Component {
  state = {
    comments: [],
    textAreaInput: "",
  };

  handleChange = (e) => {
    this.setState({ textAreaInput: e.target.value });
    console.log(this.state.textAreaInput);
  };

  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/coin_user_comments/${this.props.symbol}`)
      .then((resp) => resp.json())
      .then((arr) => {
        console.log(arr)
        this.setState({ comments: arr });
      });
  }

  handleSubmit = (e) => {
      e.preventDefault()
          fetch(`http://localhost:3000/api/v1/coin_user_comments`, {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
                  "Accept": "application/json"
              },
              body: JSON.stringify({
                  username: this.props.currentUser[0].user_name,
                  symbol: this.props.symbol,
                  comment: this.state.textAreaInput
              })
          })
              .then(res => res.json())
              .then(data => {
              console.log(data)
                this.setState({
                  comments: data,
                  textAreaInput: ""
                 })

              })
          }

  render() {
    console.log(this.state)
    return (
      <div name="CommentsSection">
        <h2>Comments</h2>
        {
          this.state.comments.length > 0 ?
          this.state.comments.map((comments, index) =>
            comments.map((comment, index) =>
            <Comment key={comment.id} comment={comment}}/>
          )
        ) : null
        }
        {this.props.currentUser != null ? (
          <div>
            <textarea
              type="textarea"
              name="commentsTextInput"
              value={this.state.textAreaInput}
              onChange={this.handleChange}
            />
            <button onClick={(e)=> this.handleSubmit(e)}className="ui button" type="submit">
              Post
            </button>
          </div>
        ) : null}
      </div>
    );
  }
}

export default CoinComments;
