# My MineSweeper Game
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Play game - https://km-minesweeper-game.herokuapp.com/

### Table of Contents
---------------------
1. Description
2. Features
3. Technologies
4. Installation
5. Usage
6. Preview
7. Credits

## Description
This project is an online **minesweeper game**. This project includes the game interface as well as a help page to guide users through the game. Users have a flag counter, game timer, reset button, help button and the cell to click on to interact with the game.

## Features

* Can start game
* On game start, timer starts counting the duration of the game and number of flags available
* User can click cells to see what is behind them
* Cell can be empty, have a mine or have a number to say how many mines are in proximity
* User can place a flag on a cell that is presumed to have a mine
* User can click 'Help' button for game instructions
* An alert will pop-up if user has won or lost
* Game can be reset and a new board is generated

## Technologies

Project is created with: 

* HTML5
* CSS
* [React](https://reactjs.org/) 
* [Ion Icons](https://ionicons.com/)

## Installation

### Prerequisites

* Access to a command-line
* Your favorite coding text editor
* Username and password for the Github website (optional)

To run this project, do the following: 

1. [Download](https://git-scm.com/downloads) Git for Windows, Mac OS X or Linux/Unix
2. Install Git

Now open your command prompt or terminal:

1. Creat a new empty directory (mkdir <folder_name>) for the project
2. Change directory (cd) to your newly created directory
3. Configure your local Git installation to use your GitHub credentials by entering the following:
   - git config ––global user.name “github_username”
   - git config ––global user.email “email_address”
4. Go to your repository on GitHub. In the top right above the list of files, open the **Clone or download** drop-down menu. Copy the **URL for cloning over HTTPS.**
5. Switch your command prompt and enter git clone *repository_url*
6. Your working directory should now have a copy of the repository from GitHub. It should contain a directory with the name of the project. Change to the directory: cd <folder_name>
7. Once you are in the project directory, enter *npm install* in your terminal
8. Next, enter *npm install --save react-router-dom* in your terminal to install the React-Router-Dom package
9. Ensure that you are in your project directory and enter *npm start* to run app in the development mode.
10. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

### Pushing Local Files to the Remote Repository

Done some work on this project? Submit your changes to the remote project on Github.

1. Create a new branch: git branch *branch-name*
2. Switch to your newly created branch: git checkout *branch-name*
3. Now confirm the status of your brand and untracked files: git status
4. Add the file that you've worked on to your branch: git add *file-name*
5. Run **git status** again to make sure the text.txt file has been added. Next, commit the changes to the local project: git commit –m “*descriptive message*”
6. Finally, push the changes to the remote GitHub repository: git push 

## Preview

### Game Interface
![Screenshot of game before start](https://github.com/IamManson/my-minesweeper-game/blob/main/src/Components/Images/start_game.png)

### Game In Progress
![Screenshot of game in progress](https://github.com/IamManson/my-minesweeper-game/blob/main/src/Components/Images/game_progress.png)

### Game Lost
![Screenshot of game lost alert](https://github.com/IamManson/my-minesweeper-game/blob/main/src/Components/Images/lost_game.png)

### Help Page

![Screenshot of help page](https://github.com/IamManson/my-minesweeper-game/blob/main/src/Components/Images/help_page.png)

## Credits

Project created by [Kayla Manson](https://github.com/IamManson) in 2021. 
Find me on [LinkedIn](https://dribbble.com/kayla-manson), [Github](https://github.com/IamManson) and [Dribbble](https://dribbble.com/kayla-manson).
