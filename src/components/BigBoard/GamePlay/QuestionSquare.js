
import React from 'react';
import { connect } from 'react-redux';


// Import CSS
import '../bigboardStyle.css';
import '../../../components/mainCSS.css';

// Bootstrap Items
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

// Action creators
import { editGame } from '../../../store/actions/gameActions';

// Components
import DiffBadge from '../../Shared/Badges/DiffBadge';


class QuestionSquare extends React.Component 
{
	constructor(props) {
		super(props);
		console.log(this.props)
		//    this.state={timeRemaining: this.props.game.timeLimit };

		this.imageClass='';
		if (this.props.question.isAnswered)
		{
			let tp = props.game.players[props.question.answerPlayer];
			this.imageClass='center-me avatars'+tp.avatarpage+'-image-nav avatar'+tp.avatarpage+'-'+tp.avatar+' ';
		}
	}

	showPrompt = (id)=>{
		this.props.editGame({...this.props.game, activeQuestion:this.props.question }, this.props.game.id);
	}


	askQuestion = (id, index)=>{
		let temp=JSON.parse(JSON.stringify(this.props.game.questionSet.questions));
		temp.map(q=>{q.id==id ? q.displayOptions=1 : q.displayOptions=0; return q});
		this.props.editGame({...this.props.game, questionSet:{...this.props.game.questionSet, 
																														questions:temp },
																							activeQuestion:{...this.props.game.activequestion, displayOptions:1, index:index} }, this.props.game.id);

	}

	render(){

		
		return (

			<div>


				{/* The question is answered */}
				{ this.props.question.isAnswered &&
					this.props.question.id != this.props.game.activeQuestion.id &&
					<div className="questionSquare text-center">
						<div className={this.imageClass}></div>
							<Row>
								<div className="answeredValue">{(this.props.index+1)*100}</div>
								<div className="answeredDiff"><DiffBadge badgeType={this.props.question.difficulty}/></div>
							</Row>
					</div>
				}


				{/* The question is not answered and not current */}
				{ !this.props.question.isAnswered &&
					this.props.question.id != this.props.game.activeQuestion.id &&
					<div className="questionSquare text-center"
							 onClick={()=>{this.showPrompt(this.props.question.id)}}>
						<div className="questionText">
							{(this.props.index+1)*100}
							<DiffBadge badgeType={this.props.question.difficulty}/>
						</div>
					</div>
				}


				{/* The question is not answered, is current, but not set (clicked on once) */}
				{ !this.props.question.isAnswered &&
					this.props.question.id == this.props.game.activeQuestion.id &&
					this.props.question.displayOptions == 0 &&
					<div className="questionSquare text-center">
						<div className="questionText">
							<Button variant="primary" className="ml-10 mr-10"
											onClick={()=>{ this.askQuestion(this.props.question.id, this.props.index) } }>
								Answer this Question
							</Button>

						</div>
					</div>
				}


				{/* The question is currently being answered (clicked on twice) */}
				{ !this.props.question.isAnswered &&
					this.props.question.id == this.props.game.activeQuestion.id &&
					this.props.question.displayOptions == 1 &&
					<img src="/images/logo2.png" height="150" width="150"/>
				}

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
