import React from "react";

 class Comment extends React.Component {
   state = {
     user: {}
   }

   componentDidMount(){
     fetch(`http://localhost:3000//api/v1/users/${this.props.comment.user_id}`)
       .then(res => res.json())
       .then(data => {
         console.log(data)
         this.setState({user: data})
       })
   }

   render(){
   console.log(this.props)
   console.log(this.state)
    return (
      <div className="comment_box">
        <a className="comment_user_name">{this.state.user.user_name}  </a>
        <a className="comment_timestamp">{this.props.comment.created_at}</a><br/>
        <a className="comment_text">{this.props.comment.comment}</a>
      </div>
    );
  }
}

export default Comment;
