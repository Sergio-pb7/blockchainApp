import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {UserContract, PostContract, web3} from '../setup'

const urlBaseImage = 'https://image.tmdb.org/t/p/w154'

const Container = styled.div`
vertical-align:middle;
max-width: 700px;
margin: auto;
text-align: center;
box-sizing: border-box;
border: 2px solid #7C7C7C;
border-radius: 5px;
`

const Circle = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 100px;
    background: #333;
    display: inline-block;
`
const Name = styled.div`
    width: 100px;
    text-align: center;
    color: white;
    font-size: 36px;
    line-height: 100px;
`

const Text = styled.p`

`
const Like = styled.div`
display: block;`

const Data = styled.div`
display: inline-block;
width: 500px;
height: 100%;
margin: 20px;
`

class Post extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
          count: props.post[3].toNumber()
        }
      }

    increment = () => {
        PostContract.addLike(this.props.post[1].toNumber())
        this.setState({ count: this.state.count + 1 })
     }
    render(){
        const post = this.props.post
        return(
        <Container>
        <Circle>
            <Name>{UserContract.getUsername(post[0])}</Name>
            
        </Circle>
        <Data>
            <Text>{post[2]}</Text>
        <Like><p><button onClick={this.increment}>&hearts;</button>{this.state.count}</p></Like>
        </Data>
        </Container>
        )}
}


export default Post;


 