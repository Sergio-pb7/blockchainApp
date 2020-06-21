import React from 'react'
import Header from '../components/Header'
import Form from '../components/Form'
import Post from '../components/Post'
import ScrollArea from 'react-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'
import {connect} from 'react-redux'
import {getPosts, getUsername} from '../redux/actions/moviesActions'

class Posts extends React.Component {
    
    componentDidMount() {
        this.props.getPosts()
        console.log(this.props.post)

    }


    componentWillMount() {

    }


    render() {
        return (
            <div>
                <Header />
                <div>
                <Form/>
                    <PerfectScrollbar
                        >
                        <div>
                        {
                            this.props.post.data.map(post =>(
                    <Post post={post} username = {this.props.getUsername(post[0])}/>
                  ))
              }
                  
                        </div>
                    </PerfectScrollbar>
                </div>
            </div>

        )
    }
}
function mapStateToProps({post}){
    return {post}
}

export default connect (mapStateToProps, {getPosts,getUsername})(Posts);
