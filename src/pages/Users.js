import React from 'react'
import Header from '../components/Header'
import Form from '../components/Form'
import User from '../components/User'
import ScrollArea from 'react-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'
import {connect} from 'react-redux'
import {getUsers, getUsername} from '../redux/actions/moviesActions'

class Users extends React.Component {
    
    componentDidMount() {
        this.props.getUsers()
        console.log(this.props.user)

    }


    componentWillMount() {

    }


    render() {
        return (
            <div>
                <Header />
                <div>
                    <PerfectScrollbar
                        >
                        <div>
                        {
                            this.props.user.data.map(user =>(
                    <User user={user}/>
                  ))
              }
                  
                        </div>
                    </PerfectScrollbar>
                </div>
            </div>

        )
    }
}
function mapStateToProps({user}){
    return {user}
}

export default connect (mapStateToProps, {getUsers})(Users);
