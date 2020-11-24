
import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';


// Import CSS
import '../mainCSS.css';


// Import Bootstrap Items
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Badge from 'react-bootstrap/Badge';

// Font Awesome Items
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';


// Action creators
import { editBoard } from '../../store/actions/boardActions';



class Tags extends React.Component {

    constructor(props) {
				super(props);
				this.tagInput = React.createRef();
				this.state={};
				this.state.tagOptions=[];
				this.tagOptions = [];
		}
		

		checkTag = ()=>{
			this.setState({
				tagOptions : this.props.tags.filter((tag)=>{
				if (tag.tagName.match(this.tagInput.current.value) && 
						!this.props.board.tags.includes(tag) &&
						this.tagInput.current.value!='')
				{
					return tag
				}
			})
			})
		}



		addTag = (tag)=>{
			this.props.editBoard({...this.props.board, tags:this.props.board.tags.concat(tag),
																								 tagList:this.props.board.tags.concat(tag.tagName)} , this.props.boardId);
		}
			

		removeTag = (tag)=>{
			console.log(typeof this.props.board.tagList);
			this.props.editBoard({...this.props.board, tags:this.props.board.tags.filter(el=>el.tagName!=tag.tagName),
																								 tagList:this.props.board.tagList.filter(el=>el!=tag.tagName)	 } , this.props.boardId);
		}




    render(){

      return (

				
				<Row className="mt-large mb-3 ml-large mr-large text-center">

					<Col sm={2}>
						<div className="lead">Tags</div>
					</Col>

					<Col sm={10}>
						<Container>

							<Row>
								<Col sm={4}>
									<InputGroup>
										<FormControl
											placeholder="Enter Tag Name"
											aria-label="Tag Name"
											aria-describedby="email"
																	ref = {this.tagInput}
																	onChange={()=>{this.checkTag()}}
										/>  
									</InputGroup>
									<div className="mt-small">
										{this.state.tagOptions.map((tag)=>(
					            <Badge pill variant="secondary" key={tag.tagName} className="right-me mr-small">
												<div className="mb-tiny">{tag.tagName}
												<FontAwesomeIcon icon={faPlus}	
															 className="ml-small mb-tiny hover-me easy-text badge-icon" 
															 onClick={()=>{this.addTag(tag)} } />
												</div>
											</Badge>
										))}

									</div>
								</Col>

								<Col sm={8}>
									
									<p className="text-justify">Begin typing your desired tag in the space to the left. The available matching tags will show below the input space. Click the plus sign to add that tag to this board.</p>
									<p className="text-justify">Tags are applied to boards to allow users to filter them according to subject. Every board must have at least one tag before it can be shown as an option for a game board. A board can have as many tags as appropriate.</p>
									<p className="text-justify">Here are the current tags for this board:</p>

									{this.props.board.tags.map((tag, index) => (
				            <Badge pill variant="secondary" key={tag.tagName} className="right-me mr-small">
											<div className="mb-tiny">{tag.tagName}
											<FontAwesomeIcon icon={faMinus}	
															 className="ml-small mb-tiny hover-me easy-text badge-icon" 
															 onClick={()=>{this.removeTag(tag)} } />
											</div>
										</Badge>
									))}
								</Col>

							</Row>
						</Container>
					</Col>

				</Row>

			) 
		}
}




const mapStateToProps = (state, ownProps)=>{
	const boardId = ownProps.boardId;
	const boards = state.firestore.data.boards;
	const board = boards ? boards[boardId] : null;
	return {
		board:board,
		boardId : boardId,
		tags:state.firestore.ordered.tags
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        editBoard: (board, boardId) => dispatch(editBoard(board, boardId))
    }
}

export default compose(
	connect(mapStateToProps, mapDispatchToProps)
)(Tags);
