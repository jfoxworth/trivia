import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import HomePage from '../components/Home/HomePage';
import HelpPage from '../components/Help/HelpPage';
import LoginPage from '../components/Login/LoginPage';
import ProfilePage from '../components/Profile/ProfilePage';
import NotFoundPage from '../components/NotFound/NotFoundPage';
import TicTacToePage from '../components/TicTacToe/TicTacToePage';
import GamesPage from '../components/Games/GamesPage';
import BoardsPage from '../components/Boards/BoardsPage';
import QuestionsPage from '../components/Questions/QuestionsPage';
import EditQuestionPage from '../components/EditQuestion/EditQuestionPage';
import EditBoardPage from '../components/EditBoard/EditBoardPage';
import RegisterPage from '../components/Register/RegisterPage';
import TagsPage from '../components/Tags/TagsPage';

import TestPage from '../components/TestPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path='/' component={ HomePage } exact={true} />
        <Route path='/help' component={ HelpPage } exact={true} />
        <Route path='/login' component={ LoginPage } exact={true} />
        <Route path='/register' component={ RegisterPage } exact={true} />
        <Route path='/profile' component={ ProfilePage } exact={true} />
        <Route path='/games' component={ GamesPage } exact={true} />
        <Route path='/boards' component={ BoardsPage } exact={true} />
        <Route path='/questions' component={ QuestionsPage } exact={true} />
        <Route path='/TicTacToe/:gameId' component={ TicTacToePage } exact={true} />
        <Route path='/tictactoe/:gameId' component={ TicTacToePage } exact={true} />
        <Route path='/editQuestion/:questionId' component={ EditQuestionPage } />
        <Route path='/editBoard/:boardId' component={ EditBoardPage } />
        <Route path='/tags' component={ TagsPage } exact={true} />
        <Route path='/TestPage' component={ TestPage } exact={true} />
        <Route component={ NotFoundPage } />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
