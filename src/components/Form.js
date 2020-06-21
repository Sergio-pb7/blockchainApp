import React,{ useState } from 'react'
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap"
import styled from 'styled-components'
import {Redirect} from 'react-router-dom'
import {UserContract, PostContract, web3} from '../setup'

const Container = styled.div`
    vertical-align:middle;
    max-width: 500px;
    margin: auto;
    padding: 20px;
    text-align: center;
    
`
const FormContainer = styled.form`
    padding: 20px;
    border: 2px solid #7C7C7C;
    border-radius: 5px;
`
const Title = styled.h1`
    margin-top 20px;
`
const Background = styled.div`
    background-color:#282c34;
    width: 100%;
    min-height:100vh;
    overflow:hidden;
    margin:auto;
    text-align: center;
    `

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      PostContract.addPost(this.state.value,{gas: 900000})
    }
  
    render() {
      return (
        <FormContainer onSubmit={this.handleSubmit}>
          <FormLabel>Post</FormLabel>
            
            <FormControl type="text" placeholder="Insert here your text" value={this.state.value} onChange={this.handleChange} />
          <Button type="submit">Post</Button>
        </FormContainer>
      );
    }
  }
  export default Form;