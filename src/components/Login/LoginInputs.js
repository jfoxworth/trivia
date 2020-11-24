
import React from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';


// Font Awesome Items
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

// Import CSS
import './loginStyle.css';

// Import Bootstrap Items
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';



class LoginInputs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {  email:'', password:''}
        this.emailInput = React.createRef();
        this.passInput = React.createRef();
    }


    handleChange(e){

        this.setState({
            email:this.emailInput.current.value,
            password:this.passInput.current.value
        });
    }


    handleSubmit(e){
        this.props.signIn(this.state)
    }


    render(){

      const { authError } = this.props;

      return (

        <Form>
            
            <Form.Text>
                <h2 className="text-center mb-3">Sign in</h2>
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
                        <InputGroup.Text id="password" >
                            <FontAwesomeIcon icon={faKey} />
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        type="password"
                        placeholder="Password"
                        aria-label="Password"
                        aria-describedby="password"
                        ref = {this.passInput}
                    />  
                </InputGroup>

                <Button className="btn btn-primary login-btn btn-block mb-3"
                        onClick={()=>{this.handleSubmit()}}>
                    Sign in
                </Button>

								{ authError ? <div className="text-danger">{authError}</div>:null}

            </Form.Group>

        </Form>
      )

    }

}

const mapStateToProps = (state)=>{
    return {
        authError:state.auth.authError
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        signIn:(creds)=>dispatch(signIn(creds))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)( LoginInputs );
