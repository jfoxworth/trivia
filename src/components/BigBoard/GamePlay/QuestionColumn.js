
import React from 'react';
import { connect } from 'react-redux';


// Import CSS
import '../bigboardStyle.css';

// Bootstrap Items
import Col from 'react-bootstrap/Col';

// Action creators
import { editGame } from '../../../store/actions/gameActions';

import QuestionSquare from './QuestionSquare';

class QuestionColumn extends React.Component 
{
	constructor(props) {
		super(props);
//    this.state={timeRemaining: this.props.game.timeLimit };
  }



	render(){

		
		return (

        <Col className="no-margin no-padding">
          <div className="columnTitle  text-center">
            <div className="columnTitleText">
              {this.props.tag}
            </div>
          </div>
          { this.props.questions.map((ques, index)=>{
              if (index < this.props.limit) 
              {
                return <QuestionSquare game={this.props.game}
                                       index={index}
                                       question={ques}
                                       key={'square'+index}
                                       userId={this.props.userId}/>
              }
            }
          )}
        </Col>



		);
	
	}

}




const mapDispatchToProps = (dispatch) => {
	return {
			editGame: (game, gameId) => dispatch(editGame(game, gameId))
	}
}

export default connect(null, mapDispatchToProps)(QuestionColumn);
