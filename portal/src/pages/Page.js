import React from "react";
import {Route, Redirect } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//redux 
import {connect} from "react-redux"
import {getLocalAuthToken} from "../actions/authenticate-actions"


const mapStateToProps = state => ({
  auth_token: state.authenticate.local_auth_token,
  error: state.notification.error
})


class Page extends React.Component {



  render() {
    if(this.props.error){
     toast.error(this.props.error)
    }

    //null check; initial value is undefined and will remain so till the auth token is retreived
    if(this.props.auth_token === undefined){
      this.props.getLocalAuthToken();
      return null
    }

    return (

      <div >
        <div className="Page">
         <ToastContainer autoClose={3000}/>
        {this.props.auth_token !== null ? //null means no auth token found  
          <Route exact path={this.props.path} component={this.props.component} />
          :<Redirect to={{ pathname: '/login', state: { from: this.props.location } }} />
        }
          </div>
      </div>
      )
  }
}

export default connect(mapStateToProps, {getLocalAuthToken})(Page)