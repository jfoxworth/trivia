

import React from 'react';
import { format, formatDistance, formatRelative, subDays } from 'date-fns';
import { Redirect } from "react-router-dom";


// Import CSS
import './profileStyle.css';


// Import Bootstrap Items
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


class GameList extends React.Component {

  constructor(props) {
      super(props);
      this.state = { }
  }

  resumeGame = (game, gameId)=>{
    
    game.gameType==0 ? this.setState({ redirect: "/TicTacToe/"+gameId }) : '';
    game.gameType==1 ? this.setState({ redirect: "/BigBoard/"+gameId }) : '';

  }


  render(){

    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    return (

    <Container>

      { this.props.games.length==0 &&
        <div className="lead text-center mt-medium">You have not created or played in any games</div>}



      { this.props.games.length>0 &&

        <Container>
          <div className="h4 text-center mb-medium mt-medium">You have created or played in {this.props.games.length} games</div>


          <ListGroup variant="flush" key={'test'}>
            
            <ListGroup.Item className="mb-small mt-small shallow-bg">
              <Row>
                <Col className="text-center lead" sm={2}>Game Type</Col>
                <Col className="text-center lead" sm={3}>Date Started</Col>
                <Col className="text-center lead" sm={3}>Players</Col>
                <Col className="text-center lead" sm={3}>Status</Col>
                <Col className="text-center lead" sm={1}>Whose turn</Col>
              </Row>
            </ListGroup.Item>

            { this.props.games.map((el, index)=>(
              <ListGroup.Item key={el.id} className="shallow-bg text-center">
                <Row>

                  { el.gameType==0 && 
                    <Col sm={2}>Tic Tac Toe</Col>}

                  { el.gameType==1 && 
                    <Col sm={2}>Big Board</Col>}

                  <Col sm={3}>{format(el.dateCreated.toDate(), 'MM/dd/yyyy K:m aaaa')}</Col>

                  <Col sm={3}>{ el.players.map((player)=>(<span key={el.id+'-'+player.username}>
                    <span className="badge badge-dark mr-small">{player.username}</span></span>)) }
                  </Col>


                  { el.status== 0 && 
                    <Col sm={3}>
                      <Button variant="warning" onClick={()=>{ this.resumeGame(el, el.id) }} >Game Setup</Button>
                    </Col>
                  }
                  
                  { el.status== 1 && !el.gameOver && el.challengeAccepted &&
                    <Col sm={3}>
                      <Button variant="success" onClick={()=>{ this.resumeGame(el, el.id) }} >Resume Game</Button>
                    </Col>
                  }

                  { el.status== 1 && !el.gameOver && !el.challengeAccepted &&
                    <Col sm={3}>
                      <Button variant="warning" onClick={()=>{ this.resumeGame(el, el.id) }} >Challenge Waiting</Button>
                    </Col>
                  }


                  { el.status== 1 && el.gameOver && 
                    <Col sm={3}>
                      <Button variant="secondary" onClick={()=>{ this.resumeGame(el, el.id) }} >Game is Over</Button>
                    </Col>
                  }

                  { el.status== 1 && !el.gameOver && el.players[el.activeUser]['id']==this.props.auth.uid &&
                    el.challengeAccepted &&
                    <Col sm={1}>
                      <span className="badge badge-success mr-small">Your Turn</span>
                    </Col>
                  }

                  { el.status== 1 && !el.gameOver && el.players[el.activeUser]['id']!=this.props.auth.uid &&
                    <Col sm={1}>
                      <span className="badge badge-secondary mr-small">{el.players[el.activeUser]['username']}</span>
                    </Col>
                  }

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


export default GameList;

