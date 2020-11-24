export default { 	

  name:'Board Name',                    // The name of the board
  description:'Description of board',   // The user defined description of the board
  dateCreated:0,                        // Date board is created
  userId:'',                            // ID of user that created board
  username:'',                          // Name of user that created board
  difficulty:'Easy',                    // The difficulty level of the board
  gameType:0,                           // 0 for tic tac toe, 1 for big board
  tags:[],                              // Array of tags for this board
  tagList:[],                           // Array of tag names
  questions:[],                         // Array of questions to be used in the game
  status:0,                             // Moved to 1 when the creator approves it

  tagSums:[],                           // Lists of tags from questions within the board
  diffSums:[0,0,0,0],                   // Lists of difficulty levels for questions
  numberOfQ:0                           // The number of questions in the board
}