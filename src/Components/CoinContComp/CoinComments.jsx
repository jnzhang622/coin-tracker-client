import React from "react";
import Comment from './Comment';

class CoinComments extends React.Component {
  state = {
    username: "",
    comments: [],
    textAreaInput: "",
  };

  handleChange = (e) => {
    this.setState({ textAreaInput: e.target.value });

  };

  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/coin_user_comments/${this.props.symbol}`)
        .then(res => res.json())
        .then(data => {
           if (data[0] === "coin not found") {
             alert(data)
          } else {
          this.setState({ comments: data[0] })
          }
         })
  }

  handleSubmit = (e) => {
      e.preventDefault()
          fetch(`http://localhost:3000/api/v1/coin_user_comments`, {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
                  "Accept": "application/json",
                  Authorization: `Bearer ${this.props.currentUser[2]}`
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
                  username: data[1],
                  comments: data[0],
                  textAreaInput: ""
                 })
              })
          }

  render() {
    console.log(this.props)
    return (
      <div name="CommentsSection">
        <div className="comment_container">
          <h2>Comments</h2>
          {this.props.currentUser != null ? (
            <div>
              <textarea
                className="comment_post_box"
                type="textarea"
                name="commentsTextInput"
                value={this.state.textAreaInput}
                onChange={this.handleChange}
              />
              <button className="card_button"
                onClick={(e) => this.handleSubmit(e)}
                type="submit">
                  Post
              </button>
            </div>
          ) : null}
        {
          this.state.comments.length > 0 ?
          this.state.comments.reverse().map((comment, index) =>
            <Comment key={comment.id} username={this.state.username} comment={comment}/>)
        : null
          }
        </div>
      </div>
    );
  }
}

export default CoinComments;
