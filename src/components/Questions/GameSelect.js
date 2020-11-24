
import React from 'react';
import { connect } from 'react-redux';


// Import CSS
import '../mainCSS.css';


// Import Bootstrap Items
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

// Font Awesome Items
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


// Action creators
import { editQuestion } from '../../store/actions/questions';


const games = ['Tic Tac Toe', 'Big Board'];


class GameSelect extends React.Component {

    constructor(props) {
        super(props);
		}


    handleChange =(index, value) =>{
      let temp=[ this.props.showProps.games[0], this.props.showProps.games[1]];
      temp[index]=value;
      this.props.changeProps({...this.props.showProps, games:temp});
    }

    
		render(){

      return (

				<Row className="mt-large mb-3 ml-large mr-large text-center">

					<Col sm={4}>
						<div className="lead">Game Types</div>
					</Col>

					<Col sm={8} className="center-me">
						<Row>
              {games.map((game, index) => (
                <Col sm={6} key={game+''+index}>
                  <Button variant="secondary"
                          onClick={()=>{this.handleChange(index, !this.props.showProps.games[index])}}>
                    {this.props.showProps.games[index] &&
                      <FontAwesomeIcon icon={faCheck} className="mr-tiny mt-tiny" />}
                    {game}
                  </Button>{' '}
                </Col>
              ))}
            </Row>
					</Col>
				</Row>

			) 
		}
}



export default connect(null, null)(GameSelect);
