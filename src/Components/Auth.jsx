import React from 'react';
import SignUp from '/src/SignUp'
class Auth extends React.Component {
    state = {
        isNewUser: false,
        username: '',
        password: '',
        confirmation: '',
        name: '',

    }

    toggleNewUser = () => this.setState(prevState => ({ isNewUser: !prevState.isNewUser, username: '', password: '', name: '', confirmation: '' }))

    handleChange = e => this.setState({ [e.target.name]: e.target.value })

    handleSubmit = e => {
        const { isNewUser, password, confirmation, username } = this.state;
        isNewUser
            ? password === confirmation ? this.props.history.push('/coins') : alert('Passwords do not match!')
            : this.props.history.push('/coins')
    }

    renderLogin = () => {
        const { username, password } = this.state;
        return (
            <>
                <input name="username" placeholder="Username" value={username} onChange={this.handleChange}/>
                <input name="password" placeholder="Password" type="password" value={password} onChange={this.handleChange}/>
            </>
        )
    }

    renderSignup = () => {
        const { username, password, name, confirmation } = this.state;
        return (
            <>
                <input name="name" placeholder="Name" value={name} onChange={this.handleChange}/>
                <input name="username" placeholder="Username" value={username} onChange={this.handleChange}/>
                <input name="password" placeholder="Password" type="password" value={password} onChange={this.handleChange}/>
                <input name="confirmation" placeholder="Confirm Password"  type="password" value={confirmation} onChange={this.handleChange}/>
            </>
        )
    }

    render(){
        let { isNewUser } = this.state;
        console.log(this.props.history)
        return (
            <div className="simple-flex-col">
                <h3>{isNewUser ? 'Sign Up' : 'Login'}</h3>
                { isNewUser ? this.renderSignup() : this.renderLogin() }
                <button type="submit" onClick={this.handleSubmit}>Submit</button>
                <div onClick={this.toggleNewUser}>{isNewUser ? "Login" : "Sign Up"}</div>
            </div>
        )
    }
}

export default Auth;
