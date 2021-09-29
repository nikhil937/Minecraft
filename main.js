
var canvas = new fabric.Canvas("myCanvas");

player_x = 10;
player_y = 10;

block_width = 30;
block_height = 30;

var player_object = "";

var block_image_object = "";

function player_update() {

    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);

        player_object.set({
            top: player_y,
            left: player_x
        });

        canvas.add(player_object);
    });


}

function new_image(get_image) {

    fabric.Image.fromURL(get_image, function (Img) {
        block_image_object = Img;

        block_image_object.scaleToWidth(block_width);
        block_image_object.scaleToHeight(block_height);

        block_image_object.set({
            top: player_y,
            left: player_x
        });

        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown" ,my_keydown);


function my_keydown(e) {

    keypressed = e.keyCode;

    console.log(keypressed);

    if (e.shiftKey == true && keypressed == "80") {

        console.log("p & shift presssed together");
        block_width = block_width + 10;
        block_height = block_height + 10;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
    }

    if (e.shiftKey == true && keypressed == "77") {

        console.log("m & shift presssed together");
        block_width = block_width - 10;
        block_height = block_height - 10;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
    }

    if (keypressed == "38") {

        up();
        console.log("up");

    }

    if (keypressed == "40") {

        down();
        console.log("down");

    }

    if (keypressed == "37") {

        left();
        console.log("left")

    }

    if (keypressed == "39") {

        right();
        console.log("right")

    }

    if (keypressed == "87") {

        new_image("brick wall.jpg");
        console.log("w")

    }

    if (keypressed == "71") {

        new_image("grass block.png");
        console.log("g")

    }

    if (keypressed == "68") {

        new_image("dark_green.png");
        console.log("d")

    }

    if (keypressed == "76") {

        new_image("moss block.png");
        console.log("l")

    }

    if (keypressed == "84") {

        new_image("oak log.jpg");
        console.log("t")

    }

    if (keypressed == "82") {

        new_image("netherack.jpg");
        console.log("r")

    }

    if (keypressed == "89") {

        new_image("yellow_wall.png");
        console.log("y")

    }

    if (keypressed == "85") {

        new_image("glowstone.png");
        console.log("u")

    }

    if (keypressed == "67") {

        new_image("stone.jpg");
        console.log("c")

    }
}

function up(){

if(player_y >=0)  
  {

    player_y=player_y - block_height;
    console.log("block_height = " + block_height);
    console.log("When up arrow key is pressed, X =" +player_x+ ", Y = "+player_y);
canvas.remove(player_object);
player_update();
  }  

}

function down(){
if(player_y <=500)  
  {

    player_y=player_y + block_height;
    console.log("block_height = " + block_height);
    console.log("When  down arrow key is pressed, X =" +player_x+ ", Y = "+player_y);
canvas.remove(player_object);
player_update();
  }  

}

function left(){
if(player_x >=0)  
  {

    player_x=player_x - block_width;
    console.log("block_width = " + block_width);
    console.log("When left arrow key is pressed, X =" +player_x+ ", Y = "+player_y);
canvas.remove(player_object);
player_update();
  }  

}

function right(){
if(player_x <=850)  
  {

    player_x=player_x + block_width;
    console.log("block_width = " + block_width);
    console.log("When right arrow key is pressed, X =" +player_x+ ", Y = "+player_y);
canvas.remove(player_object);
player_update();
  }  

}