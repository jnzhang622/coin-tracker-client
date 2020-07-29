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
      <div className="comment">
        <p>{this.props.comment.comment}</p>
        <p>by:{this.state.user.user_name}</p>
         <p>posted on:{this.props.comment.created_at}</p>
      </div>
    );
  }
}

export default Comment;
