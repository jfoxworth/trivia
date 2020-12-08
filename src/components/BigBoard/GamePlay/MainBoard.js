
import React from 'react';
import { connect } from 'react-redux';

// Bootstrap Items
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import QuestionColumn from './QuestionColumn';
import '../bigboardStyle.css';


class MainBoard extends React.Component 
{
	constructor(props) {
		super(props);
    this.state={timeRemaining: this.props.game.timeLimit };
	}



	render(){

		
		return (

			<Container className="mt-large">

          <Row className="mx-auto questionBlock">
            { this.props.game.questionSet.tagArray.map((tag)=>{
              return <QuestionColumn className="mx-auto"
                                    questions = {this.props.game.questionSet.questions.filter(ques=>ques.tagList.includes(tag)) }
                                    limit = {this.props.game.questionsPerColumn}
                                    tag={tag}
                                    key={tag}
                                    game={this.props.game}
                                    userId={this.props.userId} />
              }
            )}
          </Row>

			</Container>


		);
	
	}

}

export default connect(null, null)(MainBoard);
