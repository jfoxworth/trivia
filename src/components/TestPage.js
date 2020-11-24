
import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';


// Action creators
import { createGame } from '../store/actions/gameActions';


// Model
import modelGame from '../models/game.js';




class TestPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { }
		}
		

    componentWillMount() {
			this.props.createGame(modelGame).then( (res) => console.log(res ));
    }

    render(){

      return (

		<div className="light-color">

Works 

		</div>
	)
}

}



const mapDispatchToProps = (dispatch) => {
  return {
      createGame: (game) => dispatch(createGame(game))
  }
}

export default connect(null, mapDispatchToProps)(TestPage);