

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

  resumeGame = (gameId)=>{
    this.setState({ redirect: "/TicTacToe/"+gameId });
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
                <Col className="text-center lead" sm={3}>Name</Col>
                <Col className="text-center lead" sm={3}>Date</Col>
                <Col className="text-center lead" sm={3}>Players</Col>
                <Col className="text-center lead" sm={3}>Status</Col>
              </Row>
            </ListGroup.Item>

            { this.props.games.map((el, index)=>(
              <ListGroup.Item key={el.id} className="shallow-bg text-center">
                <Row>
                  <Col sm={3}>{ el.name }</Col>

                  <Col sm={3}>{format(el.dateCreated.toDate(), 'MM/dd/yyyy')}</Col>

                  <Col sm={3}>{ el.players.map((player)=>(<span key={el.id+'-'+player.username}>{player.username}, </span>)) }</Col>

                  { el.status== 0 && <Col sm={3}>Waiting for opponent to accept</Col> }

                  { el.gameOver &&  <Col sm={3}>Game is over</Col> }
                  
                  { el.status== 1 && !el.gameOver && 
                    <Col sm={3}>
                      <Button variant="primary" onClick={()=>{ this.resumeGame(el.id) }} >Resume Game</Button>
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

