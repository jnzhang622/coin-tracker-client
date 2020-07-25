import React from 'react'

class SignUp extends React.Component {

  state = {
    username: "",
    password: "",
    passwordConfirmation: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

  if (this.state.password === this.state.passwordConfirmation){
    fetch("http://localhost:3001/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
    .then(res => res.json())
    .then(console.log)
  } else {
    alert("Passwords don't match.")
   }

  }

  render(){
    return (
      <div className="center-form">
        <form className="auth-form" onSubmit={this.handleSubmit}>
          <input name="username" value={this.state.username} onChange={this.handleChange}placeholder="username"/>
          <input name="password" value={this.state.password} type="password"  onChange={this.handleChange}placeholder="password"/>
          <button className="login" type="submit">Log In</button>
        </form>
      </div>
    )
  }

}

export default SignUp
