import React from 'react';
import Image from 'next/image'
import { Modal, Select, SelectItem, ButtonSet, Link, AspectRatio, TextInput, FormGroup, Button, Grid, Row, Column } from "carbon-components-react";
import axios from 'axios';
import { AuthContext } from '../../../context/auth';




class Signup extends React.Component {

  static contextType = AuthContext

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      occupation: "Student",
      invalidPassword: false

    }
  }
  setEmail(e) {
    this.setState({ email: e })
  }

  setPassword(e) {
    this.setState({ password: e })
  }

  checkPassword(e) {
    if (this.state.password != e || this.state.password === "") {
      this.setState({
        invalidPassword: true
      })
    }
    else {
      this.setState({
        invalidPassword: false
      })
    }

  }

  setOccupation(e) {
    this.setState({ occupation: e })
  }


  handleSubmit(e) {
    e.preventDefault()
    if (!this.state.invalidPassword && this.state.email != "") {
      // console.log("Made the account")
      axios.post('http://localhost:8080/api/Authentication/signup', {
        "email": this.state.email,
        "password": this.state.password,
        "occupation": this.state.occupation
      })
      .then(res => this.context.login(res.data)) 
      .catch((err) => {
          console.log(err)
          if (err === "Account already exists") {
            alert("Account already exists, try forgot password");
          }
        })
      this.props.handleCloseSignup()
    }
  }



  render() {
    return <Modal modalHeading="Sign Up"
      primaryButtonText="Submit"
      secondaryButtonText="Cancel"
      open={open}
      onRequestSubmit={(e) => { this.handleSubmit(e) }}
      onRequestClose={() => this.props.handleCloseSignup()}>
      {/* onHide={props.handleClose()}> */}
      <TextInput id="email" required labelText="Email" style={{ marginBottom: '1rem' }} onChange={e => { this.setEmail(e.currentTarget.value); }} />
      {/* value={this.state.email} onChange={e => { this.setEmail(e.currentTarget.value); }}  */}

      <TextInput id="password" type="password" required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" labelText='Password' onChange={e => { this.setPassword(e.currentTarget.value); }} />

      <TextInput id="confirm-password" type="password" required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" labelText='Confirm Password' invalid={this.state.invalidPassword} invalidText={this.state.invalidPassword ? "Passwords do not match or The Password provided is empty" : null} onChange={e => { this.checkPassword(e.currentTarget.value); }} />

      <Select id="occupation" defaultValue="us-south" labelText="Occupation" onChange={e => { this.setOccupation(e.currentTarget.value) }}>
                      <SelectItem value="student" text="Student" />
                      <SelectItem value="teacher" text="Teacher" />
                    </Select>

    </Modal>
  }
}

export default Signup;

