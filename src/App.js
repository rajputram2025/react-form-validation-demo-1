import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
    formValid: false
  }

  updateUsername = (username) => {
    this.setState({username})
  }

  updateEmail = (email) => {
    this.setState({email})
  }

  updatePassword = (password) => {
    this.setState({password})
  }

  updatePasswordConfirm = (passwordConfirm) => {
    this.setState({passwordConfirm})
  }

  render() {
    return (
      <div className="App">
        <header>
          Form Validation
        </header>
        <main role='main'>
          <form action='#' id='js-form'>
            <div className='form-group'>
              <label htmlFor='username'>Username</label>
              <input type='text' id='username' name='username' className='form-field'
              value={this.state.username} onChange={(e) => this.updateUsername(e.target.value)}/>
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input type='email' id='email' name='email' className='form-field'
              value={this.state.email} onChange={(e) => this.updateEmail(e.target.value)}/>
            </div>
            <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <input type='password' id='password' name='password' className='form-field'
              value={this.state.password} onChange={(e) => this.updatePassword(e.target.value)}/>
            </div>
            <div className='form-group'>
              <label htmlFor='password-confirmation'>Password Confirmation</label>
              <input type='password' id='password-confirmation' name='password-confirmation' className='form-field' value={this.state.passwordConfirm} onChange={(e) => this.updatePasswordConfirm(e.target.value)}/>
            </div>
            <div className='form-controls'>
              <button className='button' type='submit'>Sign Up</button>
            </div>
          </form>
        </main>
      </div>
    );
  }
}

export default App;
