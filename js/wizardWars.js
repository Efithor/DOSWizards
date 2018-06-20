//Wizard Wars (Working title)
//A game made in 2018 by Kyle Connor
//@efithor
//Made with Paper.js

//Run when the window loads.
window.onload = function(){

//The module for War Ec.
var wizWarsModule = (function(){
//Module Scope Variables
var isMainMenuOpen = false;
var mainMenuNewGameButton;
var mainMenuLoadButton;
var mainMenuSettingsButton;
var mainMenuBackground;
var mainMenuTitle;
var mousePos;
var buttonArray = [];

//Initialize paper
var canvas = document.getElementById('myCanvas');
paper.setup(canvas);
paperTool = new paper.Tool();

//Object Classes
class ClassName {
  constructor(args){
    this.args = args;
    this.pred = 5;
  }
  method(){
    console.log('This is a method')
  }
}


//Keep track of mouse position.
paperTool.onMouseMove = function(event){
  mousePos = event.point;
}

//On mouse down, have each button check if it was clicked.
paperTool.onMouseDown = function(event){
  for(var i=0;i<buttonArray.length;i++){
    buttonArray[i].checkClick(event.point);
  }
}

//Create the game manager
var gameManager = (function(){
  function publicStartGame(){
    partyCreation();
  }
  function publicLoadGame(){
    //Load up the player's party and chosen campaign.
  }
  function partyCreation(){
    //Have plyer name their party memebers, then store those names to the broswer.
    //One guy shoots purple beams, another green, another red, another purple, and the last white.
    //Once next is clicked:
    chooseCampaign();
  }
  function chooseCampaign(){
    //Choose a campaign from campaignList.json.
    //Once "Start" is clicked, save the game and start the campaign.
  }
  return {
    startGame:publicStartGame,
    loadGame:publicLoadGame
  }
})();


//Create the main menu.
var mainMenu = (function(){
  drawMainMenu();
  function drawMainMenu(){
    //Create Background
    mainMenuBackground = new paper.Path.Rectangle(new paper.Point(0,0),new paper.Point(1024,768));
    mainMenuBackground.fillColor = '#8b9b8e';

    //Create title
    mainMenuTitle = new paper.PointText(new paper.Point(paper.view.center.x-55,paper.view.center.y-200));
    mainMenuTitle.content = 'WarEc';
    mainMenuTitle.fontSize = 30;

    //Create "New Game" button
    var mainMenuNewGameButtonPanel = new paper.Path.Rectangle(new paper.Point(0,0),new paper.Point(120,80));
    mainMenuNewGameButtonPanel.fillColor = '#9b5d5d';
    mainMenuNewGameButtonPanel.strokeColor = 'black';
    mainMenuNewGameButtonPanel.strokeWidth = 7;
    var mainMenuNewGameButtonText = new paper.PointText(new paper.Point((mainMenuNewGameButtonPanel.position.x-45), mainMenuNewGameButtonPanel.position.y+5));
    mainMenuNewGameButtonText.content = 'New Game';
    mainMenuNewGameButtonText.fontSize = 18;
    mainMenuNewGameButton = new paper.Group([mainMenuNewGameButtonPanel,mainMenuNewGameButtonText]);
    mainMenuNewGameButton.position = new paper.Point(paper.view.center);
    mainMenuNewGameButton.highlightable = true;
    mainMenuNewGameButton.isHighlighted = false;
    mainMenuNewGameButton.checkHovers = function(){
      if(!this.isHighlighted && this.contains(mousePos)){
        this.children[0].strokeColor = 'red';
        this.isHighlighted = true;
      }
      if(this.isHighlighted && !this.contains(mousePos)){
        this.children[0].strokeColor = 'black';
        this.isHighlighted = false;
      }
    }
    mainMenuNewGameButton.checkClick = function(eventPos){
      if(this.contains(eventPos)){
        closeMainMenu();
        newGame();
      }
    }
    buttonArray.push(mainMenuNewGameButton);

    //Create "Load Game" button
    var mainMenuLoadGameButtonPanel = new paper.Path.Rectangle(new paper.Point(0,0),new paper.Point(120,80));
    mainMenuLoadGameButtonPanel.fillColor = '#9b5d5d';
    mainMenuLoadGameButtonPanel.strokeColor = 'black';
    mainMenuLoadGameButtonPanel.strokeWidth = 7;
    var mainMenuLoadGameButtonText = new paper.PointText(new paper.Point((mainMenuLoadGameButtonPanel.position.x-45), mainMenuLoadGameButtonPanel.position.y+5));
    mainMenuLoadGameButtonText.content = 'Load Game';
    mainMenuLoadGameButtonText.fontSize = 18;
    mainMenuLoadButton = new paper.Group([mainMenuLoadGameButtonPanel,mainMenuLoadGameButtonText]);
    mainMenuLoadButton.position = new paper.Point(paper.view.center.x,paper.view.center.y+100);
    mainMenuLoadButton.highlightable = true;
    mainMenuLoadButton.isHighlighted = false;
    mainMenuLoadButton.checkHovers = function(){
      if(!this.isHighlighted && this.contains(mousePos)){
        this.children[0].strokeColor = 'red';
        this.isHighlighted = true;
      }
      if(this.isHighlighted && !this.contains(mousePos)){
        this.children[0].strokeColor = 'black';
        this.isHighlighted = false;
      }
    }
    mainMenuLoadButton.checkClick = function(eventPos){
      if(this.contains(eventPos)){
        console.log('Load Game!');
      }
    }
    buttonArray.push(mainMenuLoadButton);

    //Create "Settings" button
    var mainMenuSettingsButtonPanel = new paper.Path.Rectangle(new paper.Point(0,0),new paper.Point(120,80));
    mainMenuSettingsButtonPanel.fillColor = '#9b5d5d';
    mainMenuSettingsButtonPanel.strokeColor = 'black';
    mainMenuSettingsButtonPanel.strokeWidth = 7;
    var mainMenuSettingsButtonText = new paper.PointText(new paper.Point((mainMenuSettingsButtonPanel.position.x-45), mainMenuSettingsButtonPanel.position.y+5));
    mainMenuSettingsButtonText.content = 'Settings';
    mainMenuSettingsButtonText.fontSize = 18;
    mainMenuSettingsButton = new paper.Group([mainMenuSettingsButtonPanel,mainMenuSettingsButtonText]);
    mainMenuSettingsButton.position = new paper.Point(paper.view.center.x,paper.view.center.y+200);
    mainMenuSettingsButton.highlightable = true;
    mainMenuSettingsButton.isHighlighted = false;
    mainMenuSettingsButton.checkHovers = function(){
      if(!this.isHighlighted && this.contains(mousePos)){
        this.children[0].strokeColor = 'red';
        this.isHighlighted = true;
      }
      if(this.isHighlighted && !this.contains(mousePos)){
        this.children[0].strokeColor = 'black';
        this.isHighlighted = false;
      }
    }
    mainMenuSettingsButton.checkClick = function(eventPos){
      if(this.contains(eventPos)){
        console.log('Settings');
      }
    }
    buttonArray.push(mainMenuSettingsButton);

    isMainMenuOpen = true;
  }
  //Start a new game.
  function newGame(){
    gameManager.startGame();
  }
  //Shows a menu with three load slots.
  function loadGameMenu(){

  }
  //Opens the options screen. Has sound and music sliders.
  function openSettings(){

  }
  //Opens the main menu.
  function openMainMenu(){

  }
  //Offloads the main menu.
  function closeMainMenu(){
    //Check if the main menu is open
    if(!isMainMenuOpen){
      return console.log('Error: Unable to fire closeMainMenu(): Menu is already closed.');
    }
    //Delete Background
    mainMenuBackground.remove();
    //Delete Title
    mainMenuTitle.remove();
    //Delete Buttons
    for(var i=0;i<buttonArray.length;i++){
      buttonArray[i].remove();
    }
    //Clear Button Array
    buttonArray = [];

    isMainMenuOpen = false;
  }

})();

//Start main loop
paper.view.onFrame = function(event){
  //Every Frame, check if each button is being hovered over.
  for(var i=0;i<buttonArray.length;i++){
    buttonArray[i].checkHovers();
  }

  //End Main loop
  paper.view.update();
}


//UTILITY FUNCTIONS

//Given a certain radius, quantity, and origin, create a hexagonal grid.
function createHexagonalGrid(radius,xCount,yCount,xOrig,yOrig){
  var regArray = [];
  for(var x=0;x<xCount;x++){
    regArray[x] = [];
    for(var y=0;y<yCount;y++){
      var newRegion = new paper.Path.RegularPolygon(new paper.Point(xOrig + x * Math.sqrt(3)/2*radius*2,yOrig + y * radius*1.5),6,radius);
      if(y%2){
        newRegion.position.x = newRegion.position.x + (Math.sqrt(3)/2*radius*2)/2;
      }
      newRegion.strokeColor = 'black';
      newRegion.strokeWidth = 2;
      newRegion.xCord = x;
      newRegion.yCord = y;
      newRegion.isLand = undefined;
      regArray[x][y] = newRegion;
    }
  }
  return regArray;
}

function isRealObject(obj){
  if(obj !== null && obj !== undefined){
    return true;
  }
  return false;
}
//Given a region array and region object, return an array containing all adjacent hexes, starting with the 1oClock one and working clockwise. Gaps are listed as undefinded.
function getAdjacentHexes(rArray, rObj){
  var adjArray = [];
  //Slot 1
  //Get x+1
  if(rArray[rObj.xCord+1]===undefined){
    adjArray[1] = undefined;
  }else{
    adjArray[1] = rArray[rObj.xCord+1][rObj.yCord];
  }
  //Slot 4
  //Get x-1
  if(rArray[rObj.xCord-1]===undefined){
    adjArray[4] = undefined;
  }else{
    adjArray[4] = rArray[rObj.xCord-1][rObj.yCord];
  }
  if(rObj.yCord%2){ //If y odd
    if(rArray[rObj.xCord+1]===undefined){
      adjArray[0] = undefined;
      adjArray[2] = undefined;
    }else{
      //Get y-1, x+1 //Slot 0
      adjArray[0] = rArray[rObj.xCord+1][rObj.yCord-1];
      //Get y+1. x+1 //Slot 2
      adjArray[2] = rArray[rObj.xCord+1][rObj.yCord+1];
    }
    //Get y+1 //Slot 3
    adjArray[3] = rArray[rObj.xCord][rObj.yCord+1];
    //Get y-1 //Slot 5
    adjArray[5] = rArray[rObj.xCord][rObj.yCord-1];
  }else{
    //Get y-1 //Slot 0
    adjArray[0] = rArray[rObj.xCord][rObj.yCord-1];
    //Get y+1 //Slot 2
    adjArray[2] = rArray[rObj.xCord][rObj.yCord+1];
    if(rArray[rObj.xCord-1]===undefined){
      adjArray[3] = undefined;
    }else{
      //Get y+1. x+1 //Slot 3
      adjArray[3] = rArray[rObj.xCord-1][rObj.yCord+1];
    }
    if(rArray[rObj.xCord-1]===undefined){
      adjArray[5] = undefined;
    }else{
      //Get y-1, x-1 //Slot 5
      adjArray[5] = rArray[rObj.xCord-1][rObj.yCord-1];
    }
  }

  return adjArray;
}

function chooseXofY(x,y){
  var chosenArray = [];
  while(chosenArray.length < x){
    var chosenElement = y[Math.floor(Math.random()*y.length)];
    if(!doesXArrayContainYElement(chosenArray,chosenElement)){
      chosenArray.push(chosenElement);
    }
  }
  return chosenArray;
}

function doesXArrayContainYElement(x,y){
  for(var i=0;i<x.length;i++){
    if(x[i]===y){
      return true;
    }
  }
  return false;
}

function getXArrayAddressOfYElement(x,y){
  for(var i=0;i<x.length;i++){
    if(x[i]===y){
      return i;
    }
  }
  return false;
}

//Given a region array, calculat the total tiles.
function getTotalTiles(rArray){
  var totalTiles = 0;
  for(var x=0;x<rArray.length;x++){
    for(var y=0;y<rArray[x].length;y++){
      totalTiles++;
    }
  }
  return totalTiles;
}


function selectElementRandomlyFromWeightedArray(wArray){
  var sumOfWeights = 0;
  for(var i=0; i<wArray.length; i++){
    sumOfWeights = sumOfWeights + wArray[i][1];
  }
  var chosenValue = Math.random()*sumOfWeights;
  var q = 0;
  for(var i=0;i<wArray.length;i++){
    q = q + wArray[i][1];
    if(chosenValue <= q){
      return wArray[i];
    }
  }
}

function getKeysFromWeightedArray(wArray){
  var keys = [];
  for(var i=0;i<wArray.length;i++){
    keys.push(wArray[i][0]);
  }
  return keys;
}





//Create a button. Takes an x size and a y size,a paper.Point, a string, and a function that fires when the button is clicked.
function createButton(sizeX,sizeY,pos,cont,clickFunc){
  //Create a button
  var newButtonPanel = new paper.Path.Rectangle(new paper.Point(0,0),new paper.Point(sizeX,sizeY));
  newButtonPanel.fillColor = '#9b5d5d';
  newButtonPanel.strokeColor = 'black';
  newButtonPanel.strokeWidth = 7;
  var newButtonText = new paper.PointText(new paper.Point((newButtonPanel.position.x-45), newButtonPanel.position.y+5));
  newButtonText.content = cont;
  newButtonText.fontSize = 18;
  newButton = new paper.Group([newButtonPanel,newButtonText]);
  newButton.position = new paper.Point(pos);
  newButton.highlightable = true;
  newButton.isHighlighted = false;
  newButton.checkHovers = function(){
    if(!this.isHighlighted && this.contains(mousePos)){
      this.children[0].strokeColor = 'red';
      this.isHighlighted = true;
    }
    if(this.isHighlighted && !this.contains(mousePos)){
      this.children[0].strokeColor = 'black';
      this.isHighlighted = false;
    }
  }
  newButton.checkClick = function(eventPos){
    if(this.contains(eventPos)){
      clickFunc();
    }
  }
  buttonArray.push(newButton);
}
//Given a regionArray and a function, iterate over it.
function interateOverRegionArray(rArray,func){
  for(var x=0;x<rArray.length;x++){
    for(var y=0;y<rArray[y].length;y++){
      func(rArray[x][y]);
    }
  }
}
//Given a regionArry and a nation id, return all regions in striking distance.
function regionsInStrikingDist(rArray,nID){
  var strikingDistArray = [];
  var ownedRegions = getTotalInfluenceForInterest(nID,rArray);
  for(var i=0;i<ownedRegions.length;i++){
    var adjArray = getAdjacentHexes(rArray,ownedRegions[i]);
    for(var q=0;q<adjArray.length;q++){
      //if land, unowned, and not in the weightedExpansionArray already, add it to the WEA and give it a weight.
      if(isRealObject(adjArray[q]) && adjArray[q].isLand && !doesXArrayContainYElement(getKeysFromWeightedArray(strikingDistArray),adjArray[q])){
        strikingDistArray.push(adjArray[q]);
      }
      //if water, use coastalDistance() to find nearby hexes that are land, unowned, and not in the WEA.
      if(isRealObject(adjArray[q]) && !adjArray[q].isLand){
        var coastalArray = coastalDistance(adjArray[q],2,regionArray);
        for(var w=0; w<coastalArray.length;w++){
          if(coastalArray[w].isLand && !doesXArrayContainYElement(getKeysFromWeightedArray(strikingDistArray),coastalArray[w])){
            strikingDistArray.push(coastalArray[w]);
          }
        }
      }
    }
  }
  return strikingDistArray;
}

//END OF MODULE
})();

};
