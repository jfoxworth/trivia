




import React from 'react';
import { connect } from 'react-redux';


// Import CSS
import '../mainCSS.css';


// Import Bootstrap Items
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


// Font Awesome Items
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';

// Action creators
import { editGame } from '../../store/actions/gameActions';


class ChallengeStatus extends React.Component {

    constructor(props) {
        super(props);
		}

    removeChallenge = (user) =>{
      this.props.editGame({...this.props.game, players:this.props.game.players.filter(el=>el.id!=user.id)}, this.props.gameId);
    }

    render(){

      return (

        <div>

          {this.props.game.playerType==1 &&
          <Row>
            {this.props.game.players.map((pl)=>(
              <Col key={pl.id}>
                
                <div className={'center-me avatars'+pl['avatarpage']+'-image-medium avatar'+pl['avatarpage']+'-'+pl['avatar']}></div>
                
                <div className="lead center-me text-center">
                  {pl.username} 
                  <FontAwesomeIcon icon={faMinusCircle} className="ml-small hover-me" onClick={()=>this.removeChallenge(pl)} />
                </div>

                { !this.props.game.challengeArray.includes(pl.id) &&
                  <div className="text-muted center-me text-center"><small>Waiting for response</small></div>
                }

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

export default connect(null, mapDispatchToProps)(ChallengeStatus);



