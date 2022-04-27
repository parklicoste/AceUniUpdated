import React from 'react';
import {useState} from 'react'
import { Form, Button } from "carbon-components-react";
import { TextInput } from 'carbon-components-react';
import { NumberInput, Row, Column } from 'carbon-components-react';
import Layout from '../../components/layout/Layout';
import secureRouteHandler from '../../../lib/secureRouteHandler';
import axios from 'axios';

const divStyle = {
    margin: '0 0 15px 0'
  };
const padStyle = {
  margin: '0 0 15px 0',
  padding: '15px'
}

const Profile = props => {
  const [name, setName] =useState("");
  const [number, setNumber] =useState("");

  const updateProfile = async (e) => {
    e.preventDefault();
    axios.put('http://localhost:8080/api/Authentication/update-profile',{
      "name": name,
      "mobile": number
      }, {
        headers: {
          'Authorization': 'Bearer ' + props.user.token
        }
      }).then((res)=>{
        console.log(res)
      }).catch((err) => {
          console.log(err);
      });
  }

  return (<Layout>
  <div className="bx--grid">
    <div className="bx--row"  style={divStyle}>
    <h2 style={divStyle}>Profiles</h2>
    </div>
    <div className="bx--row" style={divStyle}>
        <Form>
          <TextInput labelText="Email"  placeholder={props.user.email || 'admin@admin.com'} disabled style={divStyle}/>
          <TextInput labelText="Name"  placeholder={props.user.name || 'Acer'} onChange={(e) => {setName(e.target.value)}}  style={divStyle}/>
          <NumberInput id="carbon-number" min={0} /*{this.user.number}*/ max={9999999999} value={1234567890 || props.user.number} onChange={(e) => {setNumber(e.target.value)}} label="Mobile Number" helperText="" invalidText="Number is not valid"/>

          <Row style={padStyle}>
              <Column>Contribution:</Column>
              <Column>{props.user.contribution || '0'} docs</Column> 
              {/* this.user.contribution */}
            </Row> 
          
          <Button type="submit" className="some-class"  style={divStyle} onClick={(e) => {updateProfile(e)}}>
            Save
          </Button>
        </Form>
    </div>

 {/* here i'm going to map the results */}
</div>
</Layout>)};


export const getServerSideProps = secureRouteHandler;
export default  Profile;

