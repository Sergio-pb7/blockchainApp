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
const Form = styled.form`
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


export default function Login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    function validateForm() {
      return username.length > 0 && password.length > 0;
    }
  
    function handleSubmit(event) {
      event.preventDefault()
      for(let i = 0; i < 10; i++){
        if(!UserContract.isAccountUsed(web3.eth.accounts[i])){
          web3.eth.defaultAccount = web3.eth.accounts[i]
          UserContract.addUser(username, {gas: 900000})
          props.history.push('/posts')
          break
        }
      }
     
      
    }
  
    return (
    <Background>
        <Title>Iniciar sesión</Title>
      <Container className="Login">
        <Form onSubmit={handleSubmit}>
          <FormGroup controlId="username" bsSize="large">
            <FormLabel>Username</FormLabel>
            <FormControl
              autoFocus
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <FormLabel>Password</FormLabel>
            <FormControl
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
            />
          </FormGroup>
          <Button variant="primary" block bsSize="large" disabled={!validateForm()} type="submit">
            Login
          </Button>
        </Form>
      </Container>
      </Background>
    );
  }