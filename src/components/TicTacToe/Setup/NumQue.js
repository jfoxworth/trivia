
import React from 'react';
import { connect } from 'react-redux';


// Import CSS
import '../../mainCSS.css';


// Import Bootstrap Items
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';


// Action creators
import { editGame } from '../../../store/actions/gameActions';


class NumQue extends React.Component {

    constructor(props) {
        super(props);
		}
		    
		render(){

      return (

        <Container className="mt-large mb-large">

          <Row>


            <Col lg={4} className="lead">Number of potential questions</Col>

            <Col lg={8} className="">

              <div className="">{this.props.game.potentialQuestions}</div>

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

export default connect(null, mapDispatchToProps)(NumQue);
