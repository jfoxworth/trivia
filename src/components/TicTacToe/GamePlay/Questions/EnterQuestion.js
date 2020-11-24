
import React from 'react';
import '../../tictactoeStyle.css';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

class EnterQuestion extends React.Component 
{
  
	constructor(props) {
		super(props);
	}

  render(){
		
	
    return (
      <div className="ml-3">
        <h4 className="text-center mt-3 mb-3">Current Question</h4>
        <div className="text-center mt-3 mb-3">
          {this.props.game.activeQuestion.text}
        </div>
        <Form>

          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="enter-answer">
                Enter your answer
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl id="enter-answer" 
                         onChange={e => this.props.setAnswer( e.target.value )}
                         aria-describedby="enter-answer" />
          </InputGroup>

          <Button variant="primary"
                  onClick={ ()=>{ this.props.answerQuestion( this.props.game.activeQuestion.id ) } }>
            Submit Answer
          </Button>
        </Form>

        <div className="mt-3">Enter your answer and click submit</div>
      </div>
    );

  }


}


export default EnterQuestion;