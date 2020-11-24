
import React from 'react';
import { connect } from 'react-redux';


// Import CSS
import '../mainCSS.css';


// Import Bootstrap Items
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';


// Action creators
import { editBoard } from '../../store/actions/boardActions';



class BoardName extends React.Component {

    constructor(props) {
				super(props);
				this.textInput = React.createRef();
		}
		
		updateName = (name)=>{
			this.props.editBoard({...this.props.board, name:name } , this.props.boardId);
		}

		_handleKeyDown = (e) =>{
			if (e.key === 'Enter') {
				console.log('Enter Pressed');
				this.updateName(this.textInput.current.value);
			}
		}


    render(){

      return (

        <Row className="mt-large mb-3 ml-large mr-large text-center">

					<Col sm={2}>
							<div className="lead">Board Name</div>
					</Col>

	        <Col sm={10}>
						<Container>
							<InputGroup>
								<FormControl as="textarea" 
														 aria-label="With textarea" 
														 className="game-input"
														 defaultValue={this.props.board.name} 
														 ref = {this.textInput}
														 onBlur={()=>{this.updateName(this.textInput.current.value)}}
														 onKeyDown={this._handleKeyDown}/>
							</InputGroup>
						</Container>
  	      </Col>

				</Row>

			)
		}
}


const mapDispatchToProps = (dispatch) => {
    return {
        editBoard: (board, boardId) => dispatch(editBoard(board, boardId))
    }
}

export default connect(null, mapDispatchToProps)(BoardName);
