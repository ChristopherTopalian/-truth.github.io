//Dedicated to God the Father

//All Rights Reserved Christopher Topalian Copyright 2020-2021

//menuPlayerTexture.js

function menuPlayerTexture()
{
    playSound("blipQuiet2", 1.0);

    //TYPE OF ELEMENT TO CREATE
    let theMenu = document.createElement("div");

    //POSITION
    theMenu.style.position = "absolute";
    theMenu.style.left = ourPlayer.x + 100 +'px';
    theMenu.style.top = ourPlayer.y - 50 + 'px';

    //SIZE
    theMenu.style.width = 400 +'px';
    theMenu.style.height = 170 +'px';

    //PADDING effects size
    theMenu.style.paddingLeft = "20px";
    theMenu.style.paddingRight = "20px";
    theMenu.style.paddingTop = "4px";

    //LAYER
    theMenu.style.zIndex = "998";

    //BACKGROUND COLOR
    theMenu.style.background = "black";

    //BORDER
    theMenu.style.borderStyle = "solid";
    theMenu.style.borderWidth = "2px";
    theMenu.style.borderColor = "rgba(255,255,255,1.0)";
    theMenu.style.borderRadius= "10px";

    //FONT
    theMenu.style.fontFamily = "arial";
    theMenu.style.fontWeight = "bold";
    theMenu.style.fontSize = "large";
    theMenu.style.color = "white";
    theMenu.style.textAlign = "center";

    //ID
    theMenu.id = "menuTexturePlayer"; 

    //REMOVE MENU button
    theMenu.innerHTML += '<button onclick=removeElement("menuTexturePlayer"); class="ourButton" style="margin-bottom: -4px">X</button>';   

    //We Build the menu using innerHTML
    theMenu.innerHTML+= '<div><hr><span style="color:rgb(255, 255, 255)">TEXTURE OPTIONS</span><hr>';    

    //We make our menu buttons using a for loop
    for(let z = 0; z < textureArray.length; z++)
    {
        theMenu.innerHTML+= '<button onclick="texturePlayer(\''+textureArray[z].name+'\');" class=\'ourButton\' id=\''+textureArray[z].name+'\'>\''+textureArray[z].name+'\'</button><br>';
    }

    /*
     //If we make the menu manually, it looks like this below

    theMenu.innerHTML+= '<button onclick="texturePlayer(\'wood1\')" class=\'ourButton\'>Wood1</button></div>';

    theMenu.innerHTML+= '<button onclick="texturePlayer(\'concrete1\')" class=\'ourButton\'>Concrete1</button></div>';
    */
    
    /* 
        If the player menu already exists, remove it, and create a new player menu wherever the player is
    */
    if(document.getElementById("menuTexturePlayer"))
    {
        removeElement("menuTexturePlayer");
        
        document.body.append(theMenu);
    }
    else
    {
        document.body.append(theMenu);
    }
}

function texturePlayer(theTexture)
{
    playSound("blipQuiet2", 1.0);

    if(theTexture == "Wood 1")
    {
        //if the location of the file is on a server, we use theURL as the source
        ourPlayer.playerId.style.backgroundImage='url("https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/wood1.jpg")';

        //if the location of the file is in our folder, then we use theLocation as the source
        //ourPlayer.playerId.style.backgroundImage='url("./texture/wood1.jpg")';
    }
    if(theTexture == "Concrete 1")
    {
        //if the location of the file is on a server, we use theURL as the source
        ourPlayer.playerId.style.backgroundImage='url("https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/concrete1.jpg")';

        //if the location of the file is in our folder, then we use theLocation as the source
        //ourPlayer.playerId.style.backgroundImage='url("./texture/concrete1.jpg")';
    }
    if(theTexture == "Zebra 1")
    {
        //if the location of the file is on a server, we use theURL as the source
        ourPlayer.playerId.style.backgroundImage='url("https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/zebra1.jpg")';

        //if the location of the file is in our folder, then we use theLocation as the source
        //ourPlayer.playerId.style.backgroundImage='url("./texture/zebra1.jpg")';

        ourPlayer.playerId.style.backgroundRepeat = 'repeat';
    }
    if(theTexture == "Default")
    {
        ourPlayer.playerId.style.backgroundImage='none';
    }

    //update playerArray to show the changed value
    updatePlayer();
}

let textureArray =
[
    {
        name: "Default",
        theLocation: "None",
        theURL: "None"
    },
    {
        name: "Concrete 1",
        theLocation: "./texture/concrete1.jpg",
        theURL: "https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/concrete1.jpg"
    },
    {
        name: "Wood 1",
        theLocation: "./texture/wood1.jpg",
        theURL: "https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/wood1.jpg"
    },
    {
        name: "Zebra 1",
        theLocation: "./texture/zebra1.jpg",
        theURL: ""
    }
];

//--------------------------------------------------//

