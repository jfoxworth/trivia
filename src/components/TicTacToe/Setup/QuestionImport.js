
import React from 'react';
import { connect } from 'react-redux';


// Import CSS
import '../../mainCSS.css';


// Import Bootstrap Items
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';

// Typeahead stuff
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { Typeahead } from 'react-bootstrap-typeahead';


// Action creators
import { editGame } from '../../../store/actions/gameActions';


class QuestionImport extends React.Component {

    constructor(props) {
        super(props);
		}
		
    handleQuestionImport =(selectedOptions) =>{
      if (selectedOptions[0])
      {
        if (selectedOptions[0]=='')
        {
//          this.props.changeProps({...this.props.showProps, tag:'All'});
        }else
        {
//          this.props.changeProps({...this.props.showProps, tag:selectedOptions[0]['tagName']});
        }
      }
    }

    
		render(){

      return (

				<div className="mt-large mb-3">

          <h4>Do you want to bring in additional questions?</h4>
          
          
          <Row>
            <div className="ml-large mr-large">
              <p className="lead text-justify">If you want to use specific question on the Tic Tac Toe board, 
              you can also import those here. Simply enter a tag and select the desired questions.</p>
            </div>
          </Row>
            

          {this.props.game.questions.length>0 && 
            <div>
              <h5>Imported Questions</h5>
              <ListGroup variant="flush" className="">

                <ListGroup.Item className="sidebar-title text-center mt-medium"><h5>Questions</h5></ListGroup.Item>

                {this.props.questions.filter((que)=>{if (((this.props.game.diff[0] && que.difficulty=="Easy") ||
                                                    (this.props.game.diff[1] && que.difficulty=="Medium") ||
                                                    (this.props.game.diff[2] && que.difficulty=="Difficult") ||
                                                    (this.props.game.diff[3] && que.difficulty=="Trivia Master")) &&
                                                    ((que.tagList.includes(props.showProps.tag))||(props.showProps.tag=='All')) &&
                                                    ((props.showProps.games[0] && que.tictactoe)||
                                                      (props.showProps.games[1] && que.bigboard)))
                                                    { return true } })
                  .map((ques, index) => (
                    <ListGroup.Item className={"sidebar-item " + (ques.status==0 ? 'alert-warning' : '')} key={ques.id}>
                        <Row>
                            <Col xs={1}>
                                <BadgeItem badgeType = {ques.difficulty}/>
                            </Col>
                            <Col xs={1}>
                                <QuestionType questionType={ques.type}/>
                            </Col>
                            <Col xs={1}>
                                <GameShow question={ques}/>
                            </Col>
                            <Col xs={7}>
                                <Row>
                                  <div>{ques.text}</div>
                                </Row>
                            </Col>
                            <Col xs={2}>
                                <TagList tags = {ques.tags} />
                            </Col>
                        </Row>
                            
                    </ListGroup.Item>
                ))}

              </ListGroup>

            </div>}



          <Row>
            <div className="center-me mt-medium">

            {this.props.game.playerType==0 && 
              <Form.Group>
                <Typeahead
                  id="tagQuestionValue"
                  labelKey="tagName"
                  options={this.props.tags}
                  placeholder="Start Typing Tag for Question"
                  onChange={this.handleQuestionImport}
                  className="width-500"
                />
              </Form.Group>}

            </div>
          </Row>

				</div>

			) 
		}
}



const mapDispatchToProps = (dispatch) => {
    return {
        editGame: (game, gameId) => dispatch(editGame(game, gameId))
    }
}

export default connect(null, mapDispatchToProps)(QuestionImport);
