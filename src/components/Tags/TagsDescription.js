
import React from 'react';
import { connect } from 'react-redux';

// Font Awesome Items
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


// Import CSS
import '../mainCSS.css';


// Import Bootstrap Items
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';


// Action creators
import { createTag } from '../../store/actions/tagActions';


// Model
import modelTag from '../../models/tag.js';


class TagsDescription extends React.Component {

    constructor(props) {
        super(props);
        this.state = { };
		}
		
    render(){

      return (

				<div>

						<h1 className="text-center mt-large mb-large">Trivia Tags</h1>

						<Row className="mb-3">

								<Col>
										<p className="lead ml-large">
												On this page, you can view the tags available for use. Questions can have multiple tags 
                        but must have at least one to be findable. Once you create an account, you can create 
                        tags which you can then use to create questions that only you can see.
										</p>
								</Col>

						</Row>
		
				</div>
			)
		}
}


const mapDispatchToProps = (dispatch) => {
    return {
        createTag: (tag) => dispatch(createTag(tag))
    }
}

export default connect(null, mapDispatchToProps)(TagsDescription);
