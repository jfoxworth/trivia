
import React from 'react';
import { connect } from 'react-redux';


// Import CSS
import '../mainCSS.css';


// Import Bootstrap Items
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

// Font Awesome Items
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


// Action creators
import { editQuestion } from '../../store/actions/questions';


const diff = ['Easy', 'Medium', 'Difficult', 'Trivia Master'];
const diffColor = ['easy-color', 'medium-color', 'difficult-color', 'trivia-master-color'];


class DiffSelect extends React.Component {

    constructor(props) {
        super(props);
		}

    
    handleChange =(index, value) =>{
      let temp=[ this.props.showProps.diff[0], this.props.showProps.diff[1], this.props.showProps.diff[2], this.props.showProps.diff[3]];
      temp[index]=value;
      this.props.changeProps({...this.props.showProps, diff:temp});
    }


		render(){

      return (

				<Row className="mt-large mb-3 ml-large mr-large text-center">

					<Col md={2}>
						<div className="lead">Difficulty Level</div>
					</Col>

					<Col md={10} className="center-me">
						<Row>
              {diff.map((diffLevel, index) => (
                <Col md={3} key={diffLevel+''+diffLevel}>
                  <div className={diffColor[index]+" center-me width-175 white-text pt-small pb-small hover-me curve-small"}
                          onClick={()=>{this.handleChange(index, !this.props.showProps.diff[index])}}>
                          { this.props.showProps.diff[index] ? <FontAwesomeIcon icon={faCheck} 
                                                                  className="mr-tiny mt-tiny"
                                                                  onClick={()=>{} } />  :'' }
                          {diffLevel}
                  </div>
                </Col>
              ))}
            </Row>
					</Col>
				</Row>

			) 
		}
}



export default connect(null, null)(DiffSelect);
