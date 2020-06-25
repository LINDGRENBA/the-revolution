# The Revolution

#### A test driven development and behavior driven development project for Epicodus, 06.24.2020

## By Mariel Hamson & Brittany Lindgren

## Description

The animals are sick of being exploited. Revolution is now. Time for humans to get a taste of their own bacon. 

## Setup/Installation Requirements

| Steps | Example |
| -------- | ----- |
| Follow this [link to the project repository](LINK HERE) on GitHub.   |    |    
| Click on the "Clone or download" button to copy the project link.   |   ![Image of GitHub Clone or download button](img/readme/clone-download-button.PNG)   |   
| If you are comfortable with the command line, you can copy the project link and clone it through your command line with the command `git clone`. Otherwise, I recommend choosing "**Download ZIP**".   |   ![Download ZIP option on GitHub](img/readme/download-zip.PNG)  |   
|  If you have cloned the project through the terminal run npm install to install node modules  |  see below for more detailed instruction on this step  |
|  Once the ZIP file has finished downloading, you can right click on the file to view the zip folder in your downloads.   |   ![ZIP folder in downloads](img/readme/zip-folder.PNG)  |   
| Right click on the project ZIP folder that you have just downloaded and choose the option "**Copy To...**", then choose the location where you would like to save this folder.    |   ![Saving ZIP to new location with 'Copy To'](img/readme/copy-to.PNG)  |   
| Navigate to the final location where you have chosen to save the project folder.   |     |   
| To view the code itself, right click, choose "open with..." and open using a text editor such as VS Code or Atom, etc.   |     |

## Setup/Installation of Node.js and npm

| Steps | Example |
| -------- | ----- |


#### Additional Setup/Installation Notes:

* Run a server to view this document using npm start.

* You will need to run npm install to install the node modules necessary to run this project.   

## Specifications

| Behavior | Input | Output |  Completed(Y/N?)  | 
| -------- | ----- | ------ | -------- |
|  Create constructors for various character objects that a user can choose from  | Character is selected by user  | Create character object  |  Y  |
|  Create constructor for human object (NPC)| Animal character is selected by user  | Create human character object  |  Y  |
|  Add randomly assigned properties for human object  | No input  | assign human object properties  |  N  |
|  Assign unique properties to character object based on selection  | User selects pig character  | character object has properties of 10 charm and 5 wisdom |  N  |
|  Battle Mode - program runs chosen battle type, animal gets 5 rolls, human gets 5 rolls, total is added to related property | Gorilla Warfare, War of Wits, Dance Off, Debate Battle - ex: total dice roll is 6 | add 6 to tastiness, snark, charm, wisdom property |  N  |
| Compare updated property values from Battle Mode and check winner  |  Chicken.tastiness = 5, Human.tastiness = 3  |  Chicken wins the battle  |  N  |
| Character level property will increase once total of other properties reaches pre-defined number | Chicken object, total property value is 10 | Chicken level increases |  N  |
|  When character object's level increases to specific predefined number, character title is updated |  Chicken level changes to 2 | title:food updates to title:pet |  N  |
|  When Human's level property reaches a predefined number, trigger Big Boss Battle Mode, if human wins, animal title is reset to food  |  Human beats Chicken in Big Boss Battle  |  Chicken title:food  |
|  Animal Character wins the game if they achieve title:free  |  Chicken levels up enough to update title to free  |  Game Over, Chicken wins!!!  |

## Game Details

| Characters |  Properties  | Titles | Battle Modes | Level Up |  
| ------- | ----- | ------ | ------ | ------- |
| human, pig, cow, chicken, fish | charm, wisdom, snark, tastiness, level, title | food, pet, companion, ruler, free | Gorilla Warfare(tastiness), Dance Off(charm), War of Wits(snark), Debate Battle(wisdom) | numbers 1 - 5 |


## Known Bugs

| Location (html/css/js & specific location if known) |  Message  | Bug | Resolved (Y/N) |  How was the issue resolved?  |
| ------- | ----- | ------ | ------ | --------- |
|  |  |  |  |  |


## Support and contact details

Please feel free to contact me through GitHub (username: LINDGRENBA) with any questions, ideas or concerns.  

## Technologies Used

* HTML5
* CSS3
* Bootstrap v-4.5.0
* JavaScript
* jQuery v-3.5.0
* Visual Studio Code 
* Git and Git BASH 
* Node.js
* npm package manager
* Webpack

### License

*This site is licensed under the MIT license.*

Copyright (c) 2020 **_Mariel Hamson & Brittany A Lindgren_**