export default { 	

    // Items related to the setup of the question
    text:'New question',        // The text of the question
    type : 'Select',            // The type of question - select or enter
    answerOptions : [],         // The options to answer the question
    correctAnswer : 0,          // Which of the select answers is correct
    difficulty : 'Easy',        // Difficulty level
    tags : [],                  // Tags for the question
    tagList : [],               // Array of just tag names
    tictactoe:true,             // Can the question be used in tic tac toe
    bigboard:true,             // Can the question be used in the money game
    private:false,              // If the question can be viewed by all people (not using yet)
    approved : false,            // If the question has been approved for all users
    status:0,                   // 0 until approved - then 1

    // Items related to in play actions
    displayOptions : 0,         // Displaying the question in ttt
    answerAttempts : 0,         // How many attempts to answer the question have been made
    inPlay : false,             // If the question is currently in play
    isAnswered:false,           // Whether or not the question has been answered
    answerPlayer:0,             // Player that answered the question
    shownPlayers:[]             // An array containing the players that have seen this question. For games where not all users may see the question
}