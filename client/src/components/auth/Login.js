
import React, { Component } from 'react';
import classnames from 'classnames';
import axios from 'axios';


class Login extends Component {
  
  constructor(){
    super();
    //local state of the component
    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value} )
  }

  onSubmit(e){
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    
    axios
      .post('/api/users/login', user)
      .then(res => console.log(res.data))
      .catch(err => this.setState({errors: err.response.data}));
  }

  render() {
    const {errors} = this.state;
    return (
    <div class="login">
    <div class="container">
      <div class="row">
        <div class="col-md-8 m-auto">
          <h1 class="display-4 text-center">Log In</h1>
          <p class="lead text-center">Log In to Connexion</p>
          <form noValidate onSubmit={this.onSubmit}>
          <div className="form-group">
              <input type="email"  className={classnames("form-control form-control-lg", {'is-invalid': errors.email})} placeholder="Email Address" name="email" value={this.state.email} onChange={this.onChange}/>
              {errors.email && (
                  <div className="invalid-feedback">
                    {errors.email}
                  </div>
                )}
            </div>
            <div className="form-group">
              <input type="password"  className={classnames("form-control form-control-lg", {'is-invalid': errors.password})} placeholder="Password" name="password" value={this.state.password} onChange={this.onChange}/>
              {errors.email && (
                  <div className="invalid-feedback">
                    {errors.email}
                  </div>
                )}
            </div>
            <input type="submit" className="btn btn-info btn-block mt-4" />
          </form>
        </div>
      </div>
    </div>
  </div>
    )
  }
}
export default Login;
