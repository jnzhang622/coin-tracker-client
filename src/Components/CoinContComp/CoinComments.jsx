import React from "react";

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
    fetch(`http://localhost:3000/api/v1/coin_user_comments`)
      .then((resp) => resp.json())
      .then((arr) => {
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
              .then(data => {})
          }

  render() {
    console.log(this.state.comments);
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
        {this.props.currentUser != null ? (
          <div>
            <textarea
              type="textarea"
              name="commentsTextInput"
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
