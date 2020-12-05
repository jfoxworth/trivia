
import React from 'react';
import { Link } from 'react-router-dom'

// Import CSS
import './questionsStyle.css';
import '../mainCSS.css';

// Import Bootstrap Items
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';


// Font Awesome Items
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import { faColumns } from '@fortawesome/free-solid-svg-icons';


// Components
import BadgeItem from './BadgeItem';
import TagList from './Taglist';
import QuestionType from './QuestionType';
import GameShow from './GameShow';


	
const QuestionList = (props) => {

	const qList = props.questions.filter((que)=>{if (((props.showProps.diff[0] && que.difficulty=="Easy") ||
	(props.showProps.diff[1] && que.difficulty=="Medium") ||
	(props.showProps.diff[2] && que.difficulty=="Difficult") ||
	(props.showProps.diff[3] && que.difficulty=="Trivia Master")) &&
	((que.tagList.includes(props.showProps.tag))||(props.showProps.tag=='All')) &&
	((props.showProps.games[0] && que.tictactoe)||
	 (props.showProps.games[1] && que.bigboard)))
 { return true } })


		return (
			<div>
				<ListGroup variant="flush" className="">

						<ListGroup.Item className="shallow-bg sidebar-title text-center mt-medium"><h5>Questions - {qList.length}</h5></ListGroup.Item>

						{qList.map((ques, index) => (
								<ListGroup.Item className={"shallow-bg sidebar-item " + (ques.status==0 ? 'alert-warning' : '')} key={ques.id}>
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
															<div>
																{ props.authId==ques.userId  ? <Link to={`/editQuestion/${ques.id}`}>
																														<FontAwesomeIcon icon={faSlidersH} 
																																							className="margin-right-small mt-tiny hover-me"/>
																												</Link>:'' }
																{ques.text}
															</div>
														</Row>
												</Col>
												<Col xs={2}>
														<TagList tags = {ques.tags} />
												</Col>
										</Row>
												
								</ListGroup.Item>
						))}

				</ListGroup>
			</div>

		)
				
}


export default QuestionList;
