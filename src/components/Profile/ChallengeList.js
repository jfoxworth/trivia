

import React from 'react';
import { format, formatDistance, formatRelative, subDays } from 'date-fns';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";


// Import CSS
import './profileStyle.css';


// Import Bootstrap Items
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


// Action creators
import { editGame } from '../../store/actions/gameActions';
import { editChallenge } from '../../store/actions/challengeActions';


class ChallengeList extends React.Component {

  constructor(props) {
      super(props);
      this.state = { }
  }

  acceptChallenge = (gameId, challenge, challengeId, userId)=>{
    let aa = ['/TicTacToe/', '/BigBoard/'];
    this.props.games.forEach((game)=>{
      if (game.id==gameId)
      {
        let ta = JSON.parse(JSON.stringify(game.challengeArray));
        ta.push(userId);
        let check=ta.length==game.players.length ? true : false;
        this.props.editChallenge({...challenge, accepted:true } , challengeId)
        console.log(ta);


        this.props.editGame({...game, challengeAccepted:check, challengeArray:ta } , gameId).then((id)=> 
          { this.setState({ redirect: aa[game.gameType]+''+gameId })});

      }
    })
  }

  render(){

    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    const nameArray=['Tic Tac Toe', 'Big Board'];

    return (

    <Container>

      { this.props.challenges.length==0 &&
        <div className="h4 text-center mb-large">You have no challenges waiting</div>}

      { this.props.challenges.length>0 &&

        <Container>
          <div className="h4 text-center mb-medium">You have {this.props.challenges.length} challenges waiting</div>

          <ListGroup variant="flush" key={'challenges'}>
            
            <ListGroup.Item className="mb-small mt-small shallow-bg">
              <Row>
                <Col className="text-center lead" sm={3}>Game Type</Col>
                <Col className="text-center lead" sm={3}>Challenger</Col>
                <Col className="text-center lead" sm={3}>Date</Col>
                <Col className="text-center lead" sm={3}></Col>
              </Row>
            </ListGroup.Item>

            { this.props.challenges.map((el, index)=>(
              <ListGroup.Item key={el.id} className="shallow-bg text-center mb-large">
                <Row>
                  <Col sm={3}>
                    {nameArray[el.gameType]}
                  </Col>
                  <Col sm={3}>
                    {el.challengerName}
                  </Col>
                  <Col sm={3}>
                    {format(el.dateCreated.toDate(), 'MM/dd/yyyy K:Maaaa')}
                  </Col>
                  <Col sm={3}>
                    <Button variant="primary" onClick={()=>{ this.acceptChallenge(el.gameId, el, el.id, this.props.uid) }} >
                      Accept Challenge
                    </Button>
                  </Col>
                </Row>
                  
              </ListGroup.Item>

            ))}
          </ListGroup>

        </Container>

      }

    </Container>
    )
  }
}




const mapDispatchToProps = (dispatch) => {
  return {
    editGame: (game, gameId) => dispatch(editGame(game, gameId)),
    editChallenge: (challenge, challengeId) => dispatch(editChallenge(challenge, challengeId))
  }
}

export default connect(null, mapDispatchToProps)(ChallengeList);


