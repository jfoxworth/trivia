
import React from 'react';
import { connect } from 'react-redux';


// Import CSS
import '../../mainCSS.css';


// Import Bootstrap Items
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


// Models
import modelChallenge from '../../../models/challenge';

// Action creators
import { editGame } from '../../../store/actions/gameActions';
import { createChallenge } from '../../../store/actions/challengeActions';


class StartButton extends React.Component {

    constructor(props) {
        super(props);
		}
		
    handlePress =() =>{
      console.log('The challenge is');
      console.log(modelChallenge);
      this.props.game.playerType==1 ? this.props.editGame({...this.props.game, status:1, playersArray:this.props.game.playersArray.concat(this.props.game.players[1]['id']) } , this.props.gameId) :
                                      this.props.editGame({...this.props.game, status:1, challengeAccepted:true } , this.props.gameId)
      this.props.game.playerType==1 ? this.props.createChallenge( this.props.game.players[1], this.props.gameId, modelChallenge, 0 ) : '';
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
        editGame: (game, gameId) => dispatch(editGame(game, gameId)),
        createChallenge: (userId, gameId) => dispatch(createChallenge(userId, gameId))
    }
}

export default connect(null, mapDispatchToProps)(StartButton);
