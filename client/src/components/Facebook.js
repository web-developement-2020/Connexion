import React, { Component } from "react";
import FacebookLoginBtn from "react-facebook-login";

class LoginFacebook extends Component {
  state = {
    auth: false,
    name: "",
    picture: "",
  };
  componentClicked = () => {
    console.log("Facebook btn clicked");
  };
  responseFacebook = (response) => {
    console.log(response);
    if (response.status !== "unknown")
      this.setState({
        auth: true,
        name: response.name,
        email: response.email,
        picture: response.picture.data.url,
        //picture: this.state.picture.data.url
      });
  };
  

  render() {
    let facebookData;

    this.state.auth
      ? (facebookData = (
          <div>
            <img
             id = "img"
               src={this.state.picture}
              alt={this.state.name}
            />
            <h2>Welcome {this.state.name}</h2>
          </div>
        ))
      : (facebookData = (
          <FacebookLoginBtn
            appId="2728720434077580"
            autoLoad={true}
            fields="name,picture,email"
            onClick={this.componentClicked}
            callback={this.responseFacebook}
          />
        ));
    return <>{facebookData}</>;
  }
}
export default LoginFacebook;
