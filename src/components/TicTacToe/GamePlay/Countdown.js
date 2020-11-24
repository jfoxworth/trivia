
import React from 'react';
import { connect } from 'react-redux';


// Import CSS
import '../../mainCSS.css';



// Import Bootstrap
import Container from 'react-bootstrap/Container';
import ProgressBar from 'react-bootstrap/ProgressBar';


// Action creators
import { editGame } from '../../../store/actions/gameActions';


class Countdown extends React.Component {

    constructor(props) {
        super(props);
        this.state={timeRemaining: this.props.timeRemaining};
    }
		
    componentDidUpdate(prevProps) {
      if(prevProps.timeRemaining !== this.props.timeRemaining) {
        this.setState({timeRemaining: this.props.timeRemaining});
      }
    }


    render(){

      return (

        <Container className="mt-small">

          { this.props.game.boardState==0 &&
            <div className="center-me text-center mt-small"
               id="countdown">
              <ProgressBar now={ 100 } label={`Time limit is ${ this.props.game.timeLimit }s`} />
          </div> }

          { this.props.game.boardState==1 &&
            <div className="center-me text-center mt-small"
                 key={"countdown"+this.props.timeRemaining}
                 id="countdown">
                <ProgressBar now={ 100*this.state.timeRemaining/this.props.game.timeLimit } 
                            label={`${ this.state.timeRemaining }s`} />
          </div> }


				</Container>

			) 
		}
}



const mapDispatchToProps = (dispatch) => {
    return {
        editGame: (game, gameId) => dispatch(editGame(game, gameId))
    }
}

export default connect(null, mapDispatchToProps)(Countdown);
