
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
import Badge from 'react-bootstrap/Badge';

// Font Awesome Items
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';


// Typeahead stuff
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { Typeahead } from 'react-bootstrap-typeahead';


// Action creators
import { editGame } from '../../../store/actions/gameActions';


class PlayerType extends React.Component {

    constructor(props) {
        super(props);
		}
		
		changePlayerType = (type)=>{
			this.props.editGame({...this.props.game, playerType:type } , this.props.gameId);
		}


    challengePlayer =(newPlayers) =>{
      if (newPlayers[0])
      {
          this.props.editGame({...this.props.game, players:this.props.game.players.concat(newPlayers[0])}, this.props.gameId);

      }
    }
    

    removeChallenge = (user) =>{
      this.props.editGame({...this.props.game, players:this.props.game.players.filter(el=>el.id!=user.id)}, this.props.gameId);
    }

    render(){

      return (

        <Container className="mt-large mb-large">

          <Row>


            <Col lg={4} className="">
              <h4>How do you want to play your opponent?</h4>
            </Col>

            <Col lg={4} className="text-center center-me">

                <div className="center-me text-center">

                  { this.props.game.playerType==1 && 
                    <Button className="bg-success mb-small width-250 text-center">
                      <FontAwesomeIcon icon={faCheck} 
                                      className="margin-right-small mt-tiny hover-me"/>
                      Challenge another user
                    </Button>
                  }

                  { this.props.game.playerType==0 && 
                    <Button className="bg-secondary mb-small width-250"
                            onClick={ ()=>{this.changePlayerType(1) } }>
                      Challenge another user
                    </Button>
                  }
                </div>

                <div className="center-me text-center">

                  { this.props.game.playerType==1 && 
                    <Button className="bg-secondary mb-small width-250"
                            onClick={ ()=> {this.changePlayerType(0) } }>
                      Play on one computer
                    </Button>
                  }


                  { this.props.game.playerType==0 && 
                    <Button className="bg-success mb-small width-250">
                      <FontAwesomeIcon icon={faCheck} 
                                      className="margin-right-small mt-tiny hover-me"/>
                      Play on one computer
                    </Button>
                  }
                </div>

            </Col>

            <Col lg={4} className="text-center">

            { !this.props.game.players[1] && 
              <div className="center-me">
                <Form.Group className="width-300 center-me">
                  <Typeahead
                    id="userValue"
                    disabled={this.props.game.playerType==0}
                    labelKey="username"
                    options={this.props.users}
                    placeholder="Start Typing User Name"
                    onChange={this.challengePlayer}
                    className="center-me width-300"
                  />
                </Form.Group>
              </div>}

              { this.props.game.players[1] && 
                this.props.game.playerType==1 &&
                <div>You are challenging user : 
                  <Badge className="ml-small">
                    { this.props.game.players[1].username }
                    <FontAwesomeIcon icon={faMinus}	
                            className="ml-small mb-tiny hover-me easy-text badge-icon" 
                            onClick={()=>{this.removeChallenge(this.props.game.players[1])} } />
                  </Badge>
                </div>}

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

export default connect(null, mapDispatchToProps)(PlayerType);
