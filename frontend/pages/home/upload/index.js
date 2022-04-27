import React from 'react';
import { useState } from 'react'
import { Button, Row, Select, Form, TextInput, SelectItem, TextArea, FileUploader } from "carbon-components-react";
import Layout from '../../components/layout/Layout';
import axios from 'axios';
import secureRouteHandler from '../../../lib/secureRouteHandler';
import router from 'next/router';

const divStyle = {
  margin: '10px 0 20px 0'
};

//   const args = (args) => require('./stories/drop-container').default(args)


const Upload = props => {
  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");
  const [university, setUni] = useState("");
  const [description, setDesc] = useState("");
  const [files, setFiles] = useState(null)

  const uploadFile = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.set('title', title);
    formData.set('code', code);
    formData.set('university', university);
    formData.set('description', description);
    if (files) formData.set('file', files[0]);
    axios.post('http://localhost:8080/api/material', formData, {
      headers: {
        'Authorization': 'Bearer ' + props.user.token
      }
    })
      .then(res => {
        router.push('/home')
      })
      .catch(err => console.log(err))

  }
  // const prefix = usePrefix();

  return (<Layout>
    <div className="bx--grid" >
      <div className="bx--row" style={divStyle}>
        <Row><h2>Upload Material</h2></Row>
      </div>

      <div className="bx--row" ><Form fullwidth onSubmit={uploadFile}>

        <TextInput id="course-name" type="name" required labelText="Course Title" onChange={(e) => { setTitle(e.target.value) }} />

        <TextInput id="course-code" type="name" required labelText="Course Code" onChange={(e) => { setCode(e.target.value) }} />

        <Select style={divStyle} id="select-1" required defaultValue="placeholder-item" labelText="University" helperText="" onChange={(e) => { setUni(e.target.value) }}>
          <SelectItem disabled hidden value="placeholder-item" text="Choose an option" />
          <SelectItem value="Carleton University" text="Carleton University" />
          <SelectItem value="UOttawa" text="UOttawa" />
          <SelectItem value="Algonquin College" text="Algonquin College" />
          <SelectItem value="Other" text="Other" />
        </Select>

        <TextArea labelText="Course Description" required placeholder='Start Writing...' onChange={(e) => { setDesc(e.target.value) }} />

        <FileUploader onChange={e => setFiles(e.target.files)} style={divStyle} accept={['.jpg', '.png', '.pdf']} buttonKind="primary" buttonLabel="Add files" filenameStatus="edit"
          iconDescription="Clear file" labelDescription=".jpg .pdf files at 500mb or less" labelTitle="Upload" />

        <Button type="submit" className="some-class" style={{ marginTop: "15px" }}>
          Submit
        </Button>

      </Form></div>

      {/* here i'm going to map the results */}
    </div></Layout>)
}
// Settings.Layout = DefaultLayout;

export const getServerSideProps = secureRouteHandler;

export default Upload;