
Thought process

Boards are things that users create that are used to play games. A board may be a Jeopardy board, a Hollywood Squares board, or a Family Fued Board. A board is a game type, the teams or players, the questions, and similar relevant data.

A game is when a user uses a board to play a game. A board can be used to play as many games as desired.




Pages


Home page
Explanation page for each game type


Login Page
Register Page
Profile Page
Board Edit Page
Game Edit Page
Play Game Page




Page Contents


Profile Page
    List of games you created
    List of boards you created
    List of games you played


Board Edit Page
    Choose game type
    Select questions


Game Edit Page
    Select board
    Setup teams / players
    Different pages for each game type



Play Game Page
    Code necessary for the appropriate game to play
    Different page for each game type




Firebase stuff

firebase login
firebase init
firebase deploy


tree = {
    a:1,
    b:2,
    c:{a:1}
}


function parseBranch(branch, testValue)
{

    if (Object.entries(branch)
        .flat()
        .filter((val)=>((val!=testValue)&&(typeof val=='number'))).length > 0)
    {
        return false

    }else
    {

        let testFlag = true;

        let objArr = Object.entries(branch)
            .flat()
            .filter((val)=>(typeof val=='object'));

        objArr.forEach((leaf)=>{
            if (Object.entries(leaf)
                .flat()
                .filter((val)=>((val!=testValue)&&(typeof val=='number'))).length > 0)
                {
                    testFlag=false;
                }
        })

        return !testFlag ? false : true
    }

}



function parseBranch(branch, testValue)
{

    let testFlag = true;
    let objArr = [];
    let newObjArr = [];

    while (testFlag)
    {
        objArr = squashObject(objArr, branch);

        objArr = Object.entries(branch)
                    .flat()
                    .filter((val)=>(typeof val=='object'))
                    .forEach((el)=>{

                    });

        branch = 
    }

}

function squashObject(objTBS)
{
    return objArr.concat(
            Object.entries(objTBS)
                .flat()
        )
}