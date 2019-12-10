# TIC REACT TOE

## What is this?

Tic Tac Toe, but make it react and typescript.

This game of tic tac toe allows two players to play a game of tic tac toe by clicking on the board as well as keeping the current status of the game.  Once the game is finished, the users can reset the game with the button at the bottom of the game.

This version uses local state rather than getting fancy with hooks or using redux.  It was the right tool for the job in this case, but it could easily be expanded to make use of these tools.

Next steps include writing tests, perhaps converting over to redux and expanding on the current functionality (Scoreboards?  Won games?  The world is my oyster!)

## How I did it

You can follow my progression through both my PR's and [here](https://trello.com/b/fwBoLnCt/tic-react-toe).  Each PR documents what I did and how I did it.

The Broad brushstrokes overview is that I:
- Created a board component that houses each box
- Created a box component that either has a transparent span placeholder, X value or O value
- Implemented logic that checks which player is up, if the boxes have all been checked, if the game is a draw and how to reset the game
- Added styled components  


## Challenges

Adding Styled Components was actually the biggest challenge in this as I had not installed a typescript compliant package before, and noted that there were some issues with the version I was using.  However, I solved by using Styled Components version 4.1.8

## Technical Details
Running the app:
```
npm start
```

Testing the app:
```
npm test
```