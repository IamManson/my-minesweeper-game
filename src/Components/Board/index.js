import React, { Component } from 'react'
import Row from "../Row";

class Board extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rows: this.createBoard(props)
        };
    }


    //rerender board on reset
    componentWillReceiveProps(nextProps) {
      if (
        this.props.openCells > nextProps.openCells ||
        this.props.columns !== nextProps.columns
      ) {
        this.setState({
          rows: this.createBoard(nextProps)
        });
      }
    }

    //create initial board
    createBoard = props => {
        // create of numbers and rows
        let board = [];
        //for loop to create rows
        for (let i = 0; i < props.rows; i++) {
          board.push([]);
          //for loop to create columns
          for (let j = 0; j < props.columns; j++) {
            board[i].push({
                //basic properties of each square on board
              x: j,
              y: i,
              count: 0,
              isOpen: false,
              hasMine: false,
              hasFlag: false
            });
          }
        }
         //after board is created, mines are created
        for (let i = 0; i < props.mines; i++) {
             //choose a random row between 0 and the number of rows in the game
          let randomRow = Math.floor(Math.random() * props.rows);
            //choose a random column between 0 and the number of columns in the game
          let randomCol = Math.floor(Math.random() * props.columns);
    
          let cell = board[randomRow][randomCol];
    
          if (cell.hasMine) {
            // if it already has a mine send it back one in the loop and go to another random cell
            i--;
          } else {
            cell.hasMine = true;
          }
        }
        return board;
      };

      open = cell => {
        if (this.props.status === "ended") {
          return null;
        }

        //promise resolves mines
        let asyncCountMines = new Promise(resolve => {
          let mines = this.findMines(cell);
          resolve(mines);
        })

        //get mines then have number of mines
        asyncCountMines.then(numberOfMines => {

          let rows = this.state.rows;

          let current = rows[cell.y][cell.x];

          if(current.hasMine && this.props.openCells === 0) {
            //on first click, if cell has mine, restart game.
            console.log("This cell already has mine. Restart!");
            let newRows = this.createBoard(this.props);
            this.setState({
              rows: newRows
            }, () => {
              this.open(cell);
            })
          } else {
            //if cell doesn't have mine, change isOpen to true
            if (!cell.hasFlag && !current.isOpen) {
              this.props.openCellClick();
              
              current.isOpen = true;
              //number of mines near current cell
              current.count = numberOfMines;

              this.setState({ rows });

              //if cell doesn't have a mine and the number of mines around it is = 0 then open cells around that cell
              if(!current.hasMine && numberOfMines === 0) {
                this.findAroundCell(cell);
              }

              //game ends and alerts user that they've lost
              if (current.hasMine && this.props.openCells !== 0) {
                this.props.endGame();
                alert('Sorry, you lose! Reset game.');
              }
            }
          }
          });
      };

      flag = cell => {
        if (this.props.status === "ended") {
          return null;
        }

        if (!cell.isOpen) {
         let rows = this.state.rows;

        //if it has a flag change it to not have flag 
        cell.hasFlag = !cell.hasFlag;
        this.setState({ rows });
        //if it has a flag then decrease flagAmount by 1
        this.props.changeFlagAmount(cell.hasFlag ? -1 : 1); 
        }
      }

      //search for mines in proximity of a cell
        findMines = cell => {
          let minesInProximity = 0;
          //conditions to not check cells or rows and columns with negative index
          for(let row = -1; row <= 1; row++) {
            for(let col = -1; col <= 1; col++) {
              if (cell.y + row >= 0 && cell.x + col >= 0) {
                  if (
                    cell.y + row < this.state.rows.length &&
                    cell.x + col < this.state.rows[0].length
              ) {
                if ( //if cell in row or columns has positive index, check for mines
                  this.state.rows[cell.y + row][cell.x + col].hasMine &&
                  !(row === 0 && col === 0)
                  ) {
                    minesInProximity++;
                }
              }
            }
          }
        }
        //found mines
        return minesInProximity;
      };

      //search around cell for mines
      findAroundCell = cell => {
        let rows = this.state.rows;

        //check through each cell and open cells one by one until we find one with mine, then we stop checking 
        for (let row =  -1; row <= 1; row ++) {
          for(let col = -1; col <= 1; col++) {
            if (cell.y + row >= 0 && cell.x + col >= 0) {
              if (
                cell.y + row < rows.length &&
                cell.x + col < rows[0].length
              ) {
                if (
                  !rows[cell.y + row][cell.x + col].hasMine &&
                  !rows[cell.y + row][cell.x + col].isOpen
                  ) {
                    this.open(rows[cell.y + row][cell.x + col]);
                  }
              }
            }
          }
        }
      }

    render() {
      //mapping rows
        let rows = this.state.rows.map((row, index) => {
          return (
            <Row cells={row} key={index} open={this.open} flag={this.flag}/>
          )
        })
        //display rows
        return (
            <div className="board">
                {rows} 
            </div>
        )
    }
}

export default Board;