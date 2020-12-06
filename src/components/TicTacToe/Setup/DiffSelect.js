
import React from 'react';
import { connect } from 'react-redux';


// Import CSS
import '../../mainCSS.css';


// Import Bootstrap Items
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

// Font Awesome Items
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


// Action creators
import { editGame } from '../../../store/actions/gameActions';




class DiffSelect extends React.Component {

    constructor(props) {
        super(props);
      }

    
    handleChange =(index, value) =>{
      let temp=[ this.props.game.diff[0], this.props.game.diff[1], this.props.game.diff[2], this.props.game.diff[3]];
      temp[index]=value;
			this.props.editGame({...this.props.game, diff:temp } , this.props.gameId).then(()=>{ this.props.setQuestions()});
    }


		render(){

      return (

        <div className="mt-large mb-large">


          <Row className="mt-large mb-3 ml-large mr-large text-center">

            <Col md={2}>
              <div className="lead">Difficulty Level</div>
            </Col>

            <Col md={10} className="center-me">
              <Row className="ml-small">
                {this.props.game.diff.map((diffLevel, index) => (
                  <Col md={3} key={this.props.showProps.diffLevel[index]}>
                    <div className={this.props.showProps.diffColor[index]+" center-me white-text pt-small pb-small hover-me curve-small"}
                            onClick={()=>{this.handleChange(index, !this.props.game.diff[index])}}>
                            { this.props.game.diff[index] ? <FontAwesomeIcon icon={faCheck} 
                                                                    className="mr-tiny mt-tiny"
                                                                    onClick={()=>{} } />  :'' }
                            {this.props.showProps.diffLevel[index]}
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </div>

			) 
		}
}

const mapDispatchToProps = (dispatch) => {
  return {
      editGame: (game, gameId) => dispatch(editGame(game, gameId))
  }
}


export default connect(null, mapDispatchToProps)(DiffSelect);
