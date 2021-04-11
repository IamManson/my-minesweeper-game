import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

//import components
import Board from './Components/Board';
import BoardHead from './Components/BoardHead';
import Help from './Components/Help'

class Minesweeper extends Component {
  constructor() {
    super();

    this.state = {
      status: "waiting", //waiting, running, ended, winning 
      rows: 10,
      columns: 10,
      flags: 10,
      mines: 10,
      time: 0,
      openCells: 0
    };

    //initial state of game
    this.baseState = this.state;
  }
  
  //as long as game is running, check for winner
  componentDidUpdate(nextProps, nextState) {
    if (this.state.status === "running") {
      this.checkForWinner();
    }
  }

  //check if we have won
  checkForWinner = () => {
    if (this.state.mines + this.state.openCells >= this.state.rows * this.state.columns) {
      this.setState({
        status: "winner"
      }, alert("You win!!!"))
    }
  }
  
  componentWillMount() {
    this.intervals = [];
  };

  //set status of game to ended when finished or lost
  

  //reset game
  reset = () => {
    this.intervals.map(clearInterval);
    this.setState(Object.assign({}, this.baseState), () => {
      this.intervals = [];
    });
  };

  //when status changes to running and game starts, +1 is added to timer
  tick = () => {
    if(this.state.openCells > 0 && this.state.status === "running") {
      let time = this.state.time + 1;
      this.setState({ time })
    }
  };

  setInterval = (fn, t) => {
    this.intervals.push(setInterval(fn,t));
  }
  
  endGame = () => {
    this.setState({
      status: "ended"
    });
  };

  //function that happens when a cell is clicked
  handleCellClick = () => {
    //if no cell has been clicked yet and the status of the game is not running yet then set status to running
    if (this.state.openCells === 0 && this.state.status !== "running") {
      this.setState({
        status: "running"
      }, () => {
        this.setInterval(this.tick, 1000);
      })
    }

    this.setState(prevState => {
      return { openCells: prevState.openCells + 1 };
    })
  }

  changeFlagAmount = (amount) => {
    this.setState({ flags: this.state.flags + amount});
  }

  render () {
      return (
        <BrowserRouter>
        <div className="minesweeper">
          {/*game heading*/}
          <h1 className="gameHeading">MINESWEEPER</h1>

          {/*game header which shows flags, time and reset button*/}
          <Route path='/' exact={true} render= {(props) => <BoardHead 
          time={this.state.time} 
          flagCount={this.state.flags}
          reset={this.reset}
          status={this.state.status}
          />} />
          
          {/*game grid with rows and cells*/}
          <Route path='/' exact={true} render= {(props) => <Board
          status={this.state.status}
          changeFlagAmount={this.changeFlagAmount}
          endGame={this.endGame} 
          rows={this.state.rows} 
          columns={this.state.columns} 
          mines={this.state.mines} 
          openCells={this.state.openCells} 
          openCellClick={this.handleCellClick}
          />} />

          <Route exact={true} path="/help" component={Help} />
        </div>
        </BrowserRouter>
    );
  }
}

export default Minesweeper;
