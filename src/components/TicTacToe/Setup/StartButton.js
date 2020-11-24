
import React from 'react';
import { connect } from 'react-redux';


// Import CSS
import '../../mainCSS.css';


// Import Bootstrap Items
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

// Typeahead stuff
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { Typeahead } from 'react-bootstrap-typeahead';


// Action creators
import { editGame } from '../../../store/actions/gameActions';


class StartButton extends React.Component {

    constructor(props) {
        super(props);
		}
		
    handlePress =() =>{
			this.props.editGame({...this.props.game, status:1 } , this.props.gameId);
    }

    
		render(){

      return (

        <Container className="mt-large">

          <Row>

            <Col lg={4} className="center-me text-center">
              <Button variant="success" size="lg" block onClick={ ()=>{this.handlePress() } }>Start Game</Button>
            </Col>

  				</Row>

        </Container>

			) 
		}
}



const mapDispatchToProps = (dispatch) => {
    return {
        editGame: (game, gameId) => dispatch(editGame(game, gameId))
    }
}

export default connect(null, mapDispatchToProps)(StartButton);
