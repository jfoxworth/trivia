
import React from 'react';
import { connect } from 'react-redux';


// Import CSS
import '../bigboardStyle.css';

// Bootstrap Items

// Action creators
import { editGame } from '../../../store/actions/gameActions';


class QuestionSquare extends React.Component 
{
	constructor(props) {
		super(props);
//    this.state={timeRemaining: this.props.game.timeLimit };
  }



	render(){

		
		return (

      <div className="questionSquare text-center">
        <div className="questionText">
          {(this.props.index+1)*100}
          </div>
      </div>

		)
	
	}

}




const mapDispatchToProps = (dispatch) => {
	return {
			editGame: (game, gameId) => dispatch(editGame(game, gameId))
	}
}

export default connect(null, mapDispatchToProps)(QuestionSquare);
