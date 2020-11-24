
import React from 'react';
import { connect } from 'react-redux';


// Import CSS
import '../../mainCSS.css';


// Import Bootstrap Items
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';

// Typeahead stuff
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { Typeahead } from 'react-bootstrap-typeahead';


// Action creators
import { editGame } from '../../../store/actions/gameActions';


class BoardImport extends React.Component {

    constructor(props) {
        super(props);
		}
		
		handleBoardImport = (selectedOptions)=>{
      console.log(selectedOptions);
			this.props.editGame({...this.props.game, boards:this.props.game.boards.concat(selectedOptions[0]) } , this.props.gameId);
		}


    handleChange =(selectedOptions) =>{
      console.log(selectedOptions);
    }

    
		render(){

      return (

        <Container className="mt-large mb-large">

          <Row>

            <Col lg={4}>
              <h4>Do you want to bring in a board?</h4>
            </Col>



            <Col lg={4}>
              <div className="center-me mt-small">

                  <Form.Group>
                    <Typeahead
                      id="userValue"
                      labelKey="name"
                      options={this.props.boards}
                      placeholder="Start Typing Board Name"
                      onChange={this.handleBoardImport}
                      className="width-300 center-me"
                    />
                </Form.Group>

              </div>
            </Col>



            <Col lg={4}>            

              <div>
                  <ListGroup variant="flush" className="">

                    {this.props.game.boards.map((board, index) => (
                        <ListGroup.Item key={board.id}>
                            <Row>
                              {board.name}
                            </Row>
                        </ListGroup.Item>))}

                  </ListGroup>
                </div>

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

export default connect(null, mapDispatchToProps)(BoardImport);
