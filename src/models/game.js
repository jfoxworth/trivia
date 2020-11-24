export default { 	

  // Overall game items that apply to all games
  name:'Game Name',                 // Name of the game
  dateCreated:0,                    // Date that the game was created
  userId:'',                        // ID of the creator
  username:'',                      // Name of the creator
  status:0,                         // 0 for not all items set to start; 1 for ready to go; 2 for started; 3 for ended
  description:'',                   // Description of the game
	actions : [],                     // Array of actions like "Player 1 answered question in square 3 correctly"
	activeUser : 0,                   // The user currently answering a question
	gameOver:false,                   // True /  False for whether or not the game is over
	gameWinner:0,                     // The id of the winner or the player number if not one on one
	playerType : 0,                   // 0 for game played on 1 computer, 1 for distinct users or challenge
  activeQuestion : {},              // Object holding the current question
  activeId : '',                    // ID of the current question
  timeLimited:true,                 // Whether or not the questions will be time limited - default true
  timeLimit:60,                     // The default amount of time that a user has to answer a question
  useBoards:false,                  // Whether or not to bring in additional boards
  useQuestions:false,               // Whether or not to bring in additional questions
  players:[],                       // Array of player objects
  boards:[],                        // Array of board objects
  boardQuestions:[],                // Array of questions from the boards
  questions:[],                     // Array of question objects
  tags:[],                          // Tags for the question
  tagList:[],                       // Array holding the tag names
  diff:[true, true, false, false],  // Default settings for game question difficulty
  diffLevel:['Easy', 'Medium', 'Difficult', 'Master'], 
  potentialQuestions:0,             // The number of questions possible given the settings
  challengeAccepted:false,          // true when the challenged user accepts the challenge
  numAttempts:0,                    // The number of times that a user has attempted to answer a question
  answeredArray:[],                 // Array holding the ids of questions that have been answered in this game
  attempedArray:[],                 // Array holding the ids of questions that have been attempted in this game
                                    // This is used to prevent duplicate questions being asked until impossible
  boardState:0,                     // 0 for open board, 1 for active question

  // Tic Tac Toe Items
  squareSum : [0,0,0,0,0,0,0,0,0],  // Array of squares set to -1 or 1 and used to see if game is over
  activeSquare : 0,                 // Which square is active
  
  // Array of squares holding the square object, which has a question, etc
  squares : Array(9).fill(
    { 
      question:{},
      inPlay:false,
      displayOptions:0,
      answerPlayer:0,
      player:{},
      isAnswered:false,
    }),

}