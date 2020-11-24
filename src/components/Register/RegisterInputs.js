
import React from 'react';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';


// Font Awesome Items
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';


// Import CSS
import './registerStyle.css';

// Import Bootstrap Items
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';



class RegisterInputs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {  email:'', password:''}
        this.emailInput = React.createRef();
        this.passInput = React.createRef();
        this.repeatpassInput = React.createRef();
        this.usernameInput = React.createRef();
    }


    handleChange(e){

        this.setState({
            email:this.emailInput.current.value,
            password:this.passInput.current.value,
            repeatpassword:this.repeatpassInput.current.value,
            username:this.usernameInput.current.value
        });
    }


    handleSubmit(e){
        this.props.signUp(this.state)
    }


    render(){

      const { authError } = this.props;

      return (

        <Form>
            
            <Form.Text>
                <h2 className="text-center mb-3">Create Account</h2>
            </Form.Text>
            
            <Form.Group controlId="loginForm">

                <InputGroup className="mb-3" onChange={()=>{this.handleChange()}}>
                    <InputGroup.Prepend>
                        <InputGroup.Text id="email" >
                            <FontAwesomeIcon icon={faEnvelope} />
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="Email"
                        aria-label="Email"
                        aria-describedby="email"
                        ref = {this.emailInput}
                    />  
                </InputGroup>



                <InputGroup className="mb-3" onChange={()=>{this.handleChange()}}>
                    <InputGroup.Prepend>
                        <InputGroup.Text id="username" >
                            <FontAwesomeIcon icon={faUserEdit} />
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="username"
                        aria-label="username"
                        aria-describedby="username"
                        ref = {this.usernameInput}
                    />  
                </InputGroup>


                <InputGroup className="mb-3" onChange={()=>{this.handleChange()}}>
                    <InputGroup.Prepend>
                        <InputGroup.Text id="password" >
                            <FontAwesomeIcon icon={faKey} />
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        type="password"
                        placeholder="Create Password"
                        aria-label="Create Password"
                        aria-describedby="password"
                        ref = {this.passInput}
                    />  
                </InputGroup>


                <InputGroup className="mb-3" onChange={()=>{this.handleChange()}}>
                    <InputGroup.Prepend>
                        <InputGroup.Text id="password" >
                            <FontAwesomeIcon icon={faKey} />
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        type="password"
                        placeholder="Repeat Password"
                        aria-label="Repeat Password"
                        aria-describedby="repeatpassword"
                        ref = {this.repeatpassInput}
                    />  
                </InputGroup>


                <Button className="btn btn-primary login-btn btn-block mb-3"
                        onClick={()=>{this.handleSubmit()}}>
                    Sign Up
                </Button>

								{ authError ? <div className="text-danger">{authError}</div>:null}

            </Form.Group>

        </Form>
      )

    }

}

const mapStateToProps = (state)=>{
    return {
        auth:state.firebase.auth,
        authError:state.auth.authError
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        signUp:(newUser)=>dispatch(signUp(newUser))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)( RegisterInputs );
