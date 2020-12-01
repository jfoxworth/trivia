
import React from 'react';

// Import Components
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/FooterPage';
import TicTacToeOption from './TicTacToeOption';
import BigBoardOption from './BigBoardOption';
import TicTacToeModal from './TicTacToeModal';
import BigBoardModal from './BigBoardModal';


// Import CSS
import './gameStyle.css';


// Import Bootstrap Items
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';





const GamesPage = () => {

	const [TTTModalShow, setTTTModalShow] = React.useState(false);
	const [BBModalShow, setBBModalShow] = React.useState(false);

	return(

		<div className="">

			<NavBar />

			<Container className="mt-medium">

				<div className="sidebar-container mt-large">

					<Row><h1 className="center-me mt-large mb-large">Play Games</h1></Row>

					<Row>
						<TicTacToeOption setModalShow={setTTTModalShow}  />
						<BigBoardOption  setModalShow={setBBModalShow}  />
					</Row>

				</div>

			</Container>

			<Footer />

			<TicTacToeModal
        show={TTTModalShow}
        onHide={() => setTTTModalShow(false)}
      />

			<BigBoardModal
        show={BBModalShow}
        onHide={() => setBBModalShow(false)}
      />

		</div>
	)
}


export default GamesPage;
