
import React from 'react';
import { Link } from 'react-router-dom'

// Import CSS
import './boardsStyle.css';
import '../mainCSS.css';

// Import Bootstrap Items
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';


// Font Awesome Items
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';


// Components
import BadgeItem from './BadgeItem';
import TagList from './Taglist';
import GameShow from './GameShow';
import QProps from './QProps';


	
const BoardList = (props) => {

  
  return (
    <div>

      <ListGroup variant="flush" className="sidebar-container">

        <ListGroup.Item className="sidebar-title text-center"><h5>Boards</h5></ListGroup.Item>

        {props.boards.filter((board)=>{if (((props.showProps.diff[0] && board.difficulty=="Easy") ||
																								 (props.showProps.diff[1] && board.difficulty=="Medium") ||
																								 (props.showProps.diff[2] && board.difficulty=="Difficult") ||
																								 (props.showProps.diff[3] && board.difficulty=="Trivia Master")) &&
																								 ((board.tagList.includes(props.showProps.tag))||(props.showProps.tag=='All')) &&
																								 ((props.showProps.games[0] && board.gameType==0)||
																								  (props.showProps.games[1] && board.gameType==1)))
																								{ return true } })

          .map((board, index) => (
            <ListGroup.Item className={"sidebar-item " + (board.status==0 ? 'alert-warning' : '')} key={board.id}>
            <Row>

              <Col xs={1}>
                <BadgeItem badgeType = {board.difficulty}/>
              </Col>

              <Col xs={1}>
                <GameShow type={board.gameType}/>
              </Col>

              <Col xs={5}>
                <Row>
                  <div>
                  { props.authId==board.userId ? <Link to={`/editBoard/${board.id}`}>
                                                          <FontAwesomeIcon icon={faSlidersH} 
                                                                            className="margin-right-small mt-tiny hover-me"/>
                                                      </Link>:'' }
                    {board.name}

                  </div>
                </Row>
              </Col>


              <Col xs={3}>
                <QProps board={board}/>
              </Col>


              <Col xs={2}>
                <TagList tags = {board.tags} />
              </Col>
            
            
            </Row>
                  
          </ListGroup.Item>
        ))}

      </ListGroup>

    </div>
  )
				
}


export default BoardList;
