
import React from 'react';

// Import CSS
import './questionsStyle.css';
import '../mainCSS.css';

// Import bootstrap items
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';


// Font Awesome Items
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


const diff = ['Easy', 'Medium', 'Difficult', 'Trivia Master'];
const diffColor = ['easy-color', 'medium-color', 'difficult-color', 'trivia-master-color'];
const diffWidth = [3,3,3,3]

class EditQuestion extends React.Component 
{
	constructor(props) {
		super(props);
        this.state = { question : props.question }
	}


    render(){
		
		return (

            <Container className="mt-3">

                <Row className="mt-3">
                    <Container>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>Text of Question</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl as="textarea" aria-label="With textarea" defaultValue={this.state.question.text} />
                        </InputGroup>
                    </Container>
                </Row>

                <Row className="mt-3">
                    <div sm={3} className="mb-3 center-me">Difficulty Level : </div>
                </Row>
                <Row>
                        {diff.map((diffLevel, index) => (
                            <Col sm={diffWidth[index]} key={this.state.question.difficulty+''+diffLevel}>
                                <Button className={diffColor[index]}>
                                    <Row className="ml-tiny mr-tiny">
                                        { this.state.question.difficulty==diffLevel ? <FontAwesomeIcon icon={faCheck} 
                                                                                className="mr-tiny mt-tiny"
                                                                                onClick={()=>{} } />  :'' }
                                        {diffLevel}
                                    </Row>
                                </Button>
                            </Col>
                        ))}
                </Row>


                <Row className="mt-3">

                        <Col sm={3} className="mt-tiny">Question Type : </Col>
                        
                        <Col sm={3}>
                            <Button variant="secondary">
                                <Row className="ml-tiny mr-tiny">
                                    { this.state.question.type=='enter' ? <FontAwesomeIcon icon={faCheck} 
                                                                            className="mr-small mt-tiny"
                                                                            onClick={()=>{} } />  : '' }
                                    Enter
                                </Row>
                            </Button>
                        </Col>

                        <Col sm={3}>
                            <Button variant="secondary">
                                <Row className="ml-tiny mr-tiny">
                                    { this.state.question.type=='select' ? <FontAwesomeIcon icon={faCheck} 
                                                                            className="mr-small mt-tiny"
                                                                            onClick={()=>{} } /> : '' }
                                    Select
                                </Row>
                            </Button>
                        </Col>
                </Row>


            </Container>

        );

    }

}

export default EditQuestion;
