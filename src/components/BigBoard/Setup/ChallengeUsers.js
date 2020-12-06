
import React from 'react';
import { connect } from 'react-redux';


// Import CSS
import '../../mainCSS.css';


// Import Bootstrap Items
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';


// Font Awesome Items
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';


// Typeahead stuff
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { Typeahead } from 'react-bootstrap-typeahead';


// Action creators
import { editGame } from '../../../store/actions/gameActions';


class ChallengeUsers extends React.Component {

    constructor(props) {
        super(props);
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

        <div>
        
          <Row>
            { <div className="center-me">
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
          </Row>

          {this.props.game.playerType==1 &&
          <Row>
            {this.props.game.players.map((pl)=>(
              <Col key={pl.id}>
                <div className={'center-me avatars'+pl['avatarpage']+'-image-medium avatar'+pl['avatarpage']+'-'+pl['avatar']}></div>
                <div className="lead">{pl.username} 
                <FontAwesomeIcon icon={faMinusCircle} className="ml-small hover-me" onClick={()=>this.removeChallenge(pl)} /></div>
              </Col>)
            )}
          </Row>}

				</div>

			) 
		}
}



const mapDispatchToProps = (dispatch) => {
    return {
        editGame: (game, gameId) => dispatch(editGame(game, gameId))
    }
}

export default connect(null, mapDispatchToProps)(ChallengeUsers);
