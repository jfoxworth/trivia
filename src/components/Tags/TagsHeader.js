
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


class TagsHeader extends React.Component {

    constructor(props) {
        super(props);
        this.state = { };
        this.textInput = React.createRef();
        this.titleInput = React.createRef();
		}
		
		handleClick = (e)=>{
      this.props.createTag({...modelTag, tagName:this.titleInput.current.value, 
                                         description:this.textInput.current.value,
                                         status:this.props.userId=='Sycn0w39YebVAQFexxXxafKaR6s2' ? 1:0});
      this.titleInput.current.value = '';
      this.textInput.current.value = '';
    }

    render(){

      return (

				<div>

						<h1 className="text-center mt-large mb-large">Trivia Tags</h1>

						<Row className="mb-3">

								<Col sm={8}>
										<p className="lead ml-large">
												On this page, you can view the tags available for use as well as add tags that can then be used to categorize questions and boards. You can use these tags immediately, but others will not see it until it is approved.
										</p>
								</Col>

								<Col sm={4} className="text-center mt-2">

                  <div className="mr-large mb-small">
                    <InputGroup>
                      <FormControl aria-label="Tag Name" 
                                  placeholder="Tag Name"
                                  ref = {this.titleInput}/>
                    </InputGroup>
                  </div>


                  <div className="mr-large mb-small">
                    <InputGroup>
                      <FormControl as="textarea" 
                                  aria-label="With textarea" 
                                  placeholder="Tag Description (Optional)"
                                  ref = {this.textInput}/>
                    </InputGroup>
                  </div>


                  <div>
										<Button className="red-color no-border"
														onClick={()=>{this.handleClick()}}>
												<FontAwesomeIcon icon={faPlus} className="mr-2" />
												Create Tag
										</Button>{' '}
                  </div>

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

export default connect(null, mapDispatchToProps)(TagsHeader);
