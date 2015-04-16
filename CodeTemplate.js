$(document).ready(function(){

	

document.body.onmousedown = function() { return false; } //so page is unselectable




	//Canvas stuff
	
	

	
	
	var bounce = createObjectPic ("Images/bomb.png")
	
	
	
	
	var fireball2 = createObjectPic ("Images/fireball.png")
	var fireball3 = createObjectPic ("Images/fireball.png")
	
	
	var myloraSound = addSound ("Sounds/woow.mp3", false)
	
	
	//done
	var fireball4 = createObjectPic ("Images/fireball.png")
	//done
	fireball5 = createObjectPic ("Images/fireball.png")
	//done
	var fireball = createObjectPic ("Images/fireball.png")
	
	var they = createObjectPic ("Images/they.png")
	
var bonus = createObjectPic ("Images/lorawow.jpg")
	var mySound100 = addSound ("Sounds/win.mp3", false)
	
	var playagain = createObjectPic ("Images/winner.png")
	
	var hi
	
	var mySound = addSound ("Sounds/button.mp3", false)
	
	var mySound2 = addSound ("Sounds/dead.mp3", false)
	
	var mySound3 = addSound ("Sounds/kirby.mp3", false)
	
	var mySound4 = addSound ("Sounds/click2.mp3", false)
	
	var sike = createObjectPic ("Images/sike.png")
	
	var block = createObjectPic ("Images/blah.png")
	
	var ink = createObjectPic ("Images/ink.png")
	
	var grass = createObjectPic("Images/grass.jpg");
	
	var fire = createObjectPic ("Images/fire.png")
	
	
	var done = createObjectPic ("Images/youdidit.png")
	
	var dude = createObjectPic ("Images/go.png")
	
	
	var canvas = $("#canvas")[0];

	var ctx = canvas.getContext("2d");

	initializeLib(ctx);

	var w = $("#canvas").width();

	var h = $("#canvas").height();

	var mx, my;

var button2 = createButton (230,100,200,100, "Images/startwow.png");
	button2.job = function (){
	screen = 8

	console.log ("Welcome")
	mySound.play ();
	
	}
	
	var bonuss = createButton (230,300, "Images/bonuss.png");
	bonuss.job = function (){
	screen = 10
	}
	
	
	var button = createButton (230,200,200,100,"Images/in.png")
	button.job = function (){
	screen = 4
	mySound.play ();
	console.log ("CLICK R TO GO BACK TO MAIN MENU")
	}
	
	var button3 = createButton (230,300,200,100,"Images/cred.png")
	button3.job = function (){
	screen = 5
	
	mySound.play ();
	console.log ("CLICK R TO GO BACK TO MAIN MENU")
	
	}
	
	
	var sky = createObjectPic("Images/sky.jpg");
	
	var poll = createButton (240,100,100,100, "Images/kirbywow.png");
	poll.job = function (){
	screen = 7
	mySound.play ();
	}

	
	var level = createButton (340,100,100,100, "Images/character.png");
	level.job = function (){
	screen = 2
	mySound.play ();
	}
	
	
	
	

	numObjects = 0;

	numObjectsLoaded =0;

	var screen = 0;

		var obsticle = createObjectPic ("Images/sword.png")

	var wow = createObjectPic("Images/swordspin.png");
	
	

	var bird = createObjectPic("Images/character.png");
	
	
	var player2 = createObjectPic ("Images/kirbywow.png")
	

	var background = createObjectPic("Images/level.png");

	var lose = createObjectPic("Images/r.jpg");

	var jump

	/////////////////////////////////////////////

	//walls

	var wall = createWall(425,-60,80,150);

	wall.giveImage("Images/tube2.png"); //top

	var wall1 = createWall(435,307,170,150);

	wall1.giveImage("Images/flower.png");//lower




	var wall2 = createWall(750,10,64,145);

	wall2.giveImage("Images/par.png");

	var wall3 = createWall(678,280,100,190);

	wall3.giveImage("Images/boom.png");




	var wall4 = createWall(960,0,80,120);

	wall4.giveImage("Images/ghost.png");

	var wall5 = createWall(955,260,80,200);

	wall5.giveImage("Images/fire.png");

	

	var wall6 = createWall(1200,-40,90,190);

	wall6.giveImage("Images/swing.png");

	var wall7 = createWall(1250,270,90,190);

	wall7.giveImage("Images/bottom.png");




	




	var wall10 = createWall(1440,0,1200,500);

	wall10.giveImage("Images/fin.png");
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	var wall0 = createWall(425,-5,90,160);

	wall0.giveImage("Images/up.png"); //top

	var wall11 = createWall(423,310,90,190);

	wall11.giveImage("Images/wallyo.png");//lower




	var wall21 = createWall(750,0,90,160);

	wall21.giveImage("Images/up.png");

	var wall31 = createWall(675,300,90,160);

	wall31.giveImage("Images/wallyo.png");

	


	var wall41 = createWall(960,-10,90,160);

	wall41.giveImage("Images/up.png");

	var wall51 = createWall(952,320,90,160);

	wall51.giveImage("Images/wallyo.png");

	

	var wall61 = createWall(1200,-10,90,160);

	wall61.giveImage("Images/up.png");

	var wall71 = createWall(1318,300,90,160);

	wall71.giveImage("Images/wallyo.png");




	




	var wall101 = createWall(1440,0,1200,500);

	wall101.giveImage("Images/fin.png");

	
	
	
	

	/////////////////////////////////

	////////////////////////////////

	////////	GAME INIT

	///////	Runs this code right away, as soon as the page loads.

	//////	Use this code to get everything in order before your game starts 

	//////////////////////////////

	/////////////////////////////

	function init()

	{

	/////////////////////

	///STATE VARIABLES

	/// All your variables get their start values here.

	
	fireball4.scale = 0.18
fireball4.x= 1400
fireball4.y =200
fireball4.speedx = 13;
	
		fireball5.scale = 0.18
fireball5.x= 2100
fireball5.y =190
fireball5.speedx = 13;
	
	fireball3.scale = 0.18
fireball3.x= 1670 
fireball3.y =0
fireball3.speedx = 13;
	

	fireball2.scale = 0.18
fireball2.x= 2900 
fireball2.y =180
fireball2.speedx = 13;
	
		
	grass.scale= 0.7
grass.x = -1	
		
	
		
		sike.y = 0

		
		they.y = 0
		they.scale = 1.5
		
	
	bounce.scale= 0.2
	bounce.speedx = 13;
	bounce.speedy = 3
	
	
	bird.scale= 0.02

background.scale= 0.4
lose.x=120


fireball.scale = 0.18
fireball.x= 590 
fireball.y =60

	bird.speedx=7
	bird.speedy= 7
	bird.scale=0.4;

	
	jump=300;


	done.scale = 1
	done.x=37

	bonus.scale = 5
	bonus.x= 20
bonus.y= 40
	
	playagain.x=115
	playagain.y= 20

	ink.scale = 1.32
	block.scale = 0.6
	
	fire.scale = 1.32

	wow.x = 308;
	wow.y = 1;
	wow.speedy = 7.3;
	wow.scale = 0.18;
	
	
	fireball.speedx = 13;
	
	sky.scale = 0.4
	

	dude.x = 308;
	dude.y = 1;
	dude.speedy = 7.3;
	dude.scale = 0.3;
	
	player2.scale=0.3
	
	
	obsticle.x = 425;
	obsticle.y = 340;
	obsticle.speedy = 7.3;
	obsticle.scale = 0.3;
	


	//////////////////////

	///GAME ENGINE START

	//	This starts your game/program

	//	"paint is the piece of code that runs over and over again, so put all the stuff you want to draw in here

	//	"60" sets how fast things should go

	//	Once you choose a good speed for your program, you will never need to update this file ever again.




	if(typeof game_loop != "undefined") clearInterval(game_loop);

		game_loop = setInterval(paint, 60);

	}




	init();	

	







	

	

	

	///////////////////////////////////////////////////////

	//////////////////////////////////////////////////////

	////////	Main Game Engine

	////////////////////////////////////////////////////

	///////////////////////////////////////////////////

	function paint()

	{

		///////////////////////

		//	CLEAR THE SCREEN

		////////////////////

		ctx.fillStyle = 'white';

		ctx.fillRect(0,0, w, h);	

		

		

		

		if(screen == 0){

		/////////////////////

		//	LOADING SCREEN

			ctx.fillStyle = 'red';

			ctx.fillText("Loading Images & Sounds: " + numObjectsLoaded + "/" + numObjects,100,100)

		

			if(numObjectsLoaded >= numObjects) screen = 1;

		

		}else if(screen == 1){
		

		////////////////////

		//	MAIN MENU
ctx.fillStyle= 'white'
		ctx.fillText("LOADED",10,100);
		
		
		sky.draw()
		
		button2.draw ();
		button.draw ();
		button3.draw();
		
		
			

		}else if(screen == 2){

		////////////////////

		//	GAME SCREEN 1
		
		
		
		
		
			
			
background.y=0;

			background.x-=4;

			background.draw();




			if(bird.y>465){

				jump-=6

			};

			if(bird.y<0){

				jump=0

			};

			

			jump+=6




			bird.x=250;

			bird.y=jump;

			bird.draw();

			
		
			
			if(dude.y > 480) dude.y = 0
			

			wall.x-=4;

			wall1.x-=4;

			
			
			
			wall2.x-=4;

			wall3.x-=4;

			wall4.x-=4;

			wall5.x-=4;

			wall6.x-=4;

			wall7.x-=4;

			

			wall10.x-=4;

		

		

			wall.draw();

			wall1.draw();

			wall2.draw();

			wall3.draw();
			
			
			
			
			
			
			
			
			
			wall4.draw();

			wall5.draw();

			
			
			wall6.draw();

			
			wall7.draw();


			wall10.draw();
			
			
			
			
			dude.draw();
			dude.y = dude.y + dude.speedy
			if (dude.y>  -dude.length || dude.y <0) dude.speedy = dude.speedy * -1 
			
			if (dude.collideObject(bird)) {
			
			ink.draw();
			}
			
		
			
			
			
			if (bird.y==50) alert ("press the secret key to unlock bonus level", "ok"), false
			
			

		

			if(bird.collideObject(wall) || bird.collideObject(wall1) || bird.collideObject(wall2) || bird.collideObject(wall3) || bird.collideObject(wall4) || bird.collideObject(wall6) || bird.collideObject(wall7)){

				screen=3
	mySound2.play()
	
			};
							
		if (bird.collideObject(wall10)){
		console.log ("press r to restart")
		mySound100.play()
		screen=6};
			

			
		if (bird.collideObject(wall5)) {
		fire.draw()
		mySound2.play()
		screen=3}
		
		
			player2.x=-1000
			player2.y=-1000
			
			
				
		bounce.draw()
		
		bounce.x = bounce.x + bounce.speedx
		if (bounce.x> w -bounce.width || bounce.x <0) bounce.speedx = bounce.speedx * -1 
		bounce.y = bounce.y + bounce.speedy
		
		if (bounce.y> h -bounce.height || bounce.y <0) bounce.speedy = bounce.speedy * -1 
			
		
		if (bird.collideObject(bounce)) {
		
		mySound2.play()
		screen=3}
		
		
		
		
		
		

		}else if(screen ==3){
	
	lose.draw();

		

	
	
	}else if (screen ==4){
	ctx.fillStyle= "black"
	ctx.font = "15pt Ariel"
		ctx.fillText ("Click the space bar to jump ", 200, 100)
		ctx.fillText ("Avoid bombs and fireballs ", 205, 115)
		ctx.fillText ("Click the special letter key to unlcok a hidden screen ", 118, 130)
		
	
	
	}else if (screen ==5){
	
		ctx.fillStyle ='black'
		ctx.fillRect(0,0, w, h);
		ctx.fillStyle= 'white'
		ctx.fillText ("CREDITS", 297,80);
		ctx.fillText ("MADE BY", 297,110);
		ctx.fillText ("Juliana Commisso", 280,120);
		ctx.fillText ("CLASS", 302,150);
		ctx.fillText ("Mr Guzy's Second Period", 263,160);
		ctx.fillText ("SPECIAL THANKS", 277,190);
		ctx.fillText ("Mr Guzy", 300,200);
		ctx.fillText ("Lora Hasku for existing in general", 245,210);
		ctx.fillText ("Rhea for turning off my computer when I needed it most", 198,220);
		
		
		
		
		
		}else if (screen ==6){
		
		done.draw();
		playagain.draw()
		
	
		}else if (screen ==7){
		background.y=0;

			background.x-=4;

			background.draw();




			if(player2.y>465){

				jump-=6

			};

			if(player2.y<0){

				jump=0

			};

			

			jump+=6




			player2.x=250;

			player2.y=jump;

			player2.draw();
		
			
			if(wow.y > 480) wow.y = 0
			

			wall0.x-=4;

			wall11.x-=4;

			
			
			
			wall21.x-=4;

			wall31.x-=4;

			wall41.x-=4;

			wall51.x-=4;

			wall61.x-=4;

			wall71.x-=4;

			

			wall101.x-=4;

		

		

			wall0.draw();

			wall11.draw();

			wall21.draw();

			wall31.draw();
			
			
			
			
			
			
			
			
			
			wall41.draw();

			wall51.draw();

			
			
			wall61.draw();

			
			wall71.draw();


			wall101.draw();
			
			
			
			
			wow.draw();
			wow.y = wow.y + wow.speedy
			if (wow.y>  -wow.length || wow.y <0) wow.speedy = wow.speedy * -1 
			
			if (wow.collideObject(player2)) {
			
			block.draw();
			}
			
			
			
			
			if(obsticle.y > 380) obsticle.y = 340
			
			
			
		 
			
			
			
			
			
			

		

			if(player2.collideObject(wall0) || player2.collideObject(wall11) || player2.collideObject(wall21) || player2.collideObject(wall31) || player2.collideObject(wall41) || player2.collideObject(wall61) || player2.collideObject(wall71)){

				screen=3
mySound3.play()
			};
							
		if (player2.collideObject(wall101)){
		console.log ("press r to restart")
		mySound100.play()
		screen=6};
			

			
		if (player2.collideObject(wall51)) {
		fire.draw()
		mySound3.play()
		screen=3}
		
		
		
		
		
		
		
		fireball.draw();
		
			fireball.x = fireball.x - fireball.speedx
			
			if (fireball.collideObject(player2)) {
			mySound3.play()
			screen=3
			}
		
		
		
			fireball5.draw();
		
			fireball5.x = fireball5.x - fireball5.speedx
			
			if (fireball5.collideObject(player2)) {
			mySound3.play()
			screen=3
			}
			
			
			
			fireball4.draw();
		
			fireball4.x = fireball4.x - fireball4.speedx
			
			if (fireball4.collideObject(player2)) {
			mySound3.play()
			screen=3
			}
		
		
		
		
		
		fireball3.draw();
		
			
			fireball3.y = fireball3.y + fireball3.speedy
			if (fireball3.y>  -fireball3.length || fireball3.y <0) fireball3.speedy = fireball3.speedy * -1 
			
			if (fireball3.collideObject(player2)) {
			
			screen=3
			}
			
			
			
			
			fireball2.draw();
		
			fireball2.x = fireball2.x - fireball4.speedx
			
			
			
			
			
			
			if (fireball2.collideObject(player2)) {
			screen=3
			mySound3.play()
			}
		
		
	
		
		
		
		
		
		
		

		}else if(screen ==3){
	
	lose.draw();

		
		
		
		
		
		
		}else if (screen==8){
		
		grass.draw()
		poll.draw()
		level.draw()
		
		
		}else if (screen==9){ 
		ctx.fillStyle = 'pink';

		ctx.fillRect(0,0, w, h);	

		

		

			ctx.fillStyle= "black"
		ctx.font = "30pt Ariel"
		ctx.fillText ("Congrats, you found the hidden Lora ", 25, 35)
		
	
		bonuss.draw() 
		bonus.draw() }
	
	
		}
	
	
	
	
	
	///////////////////////////////////////////////////////////////////END PAINT/ GAME ENGINE

	




	




	

	
	////////////////////////////////////////////////////////

	///////////////////////////////////////////////////////

	/////	MOUSE LISTENER 

	//////////////////////////////////////////////////////

	/////////////////////////////////////////////////////

	

	/////////////////

	// Mouse Click

	///////////////

	canvas.addEventListener('click', function (evt){

		

		//Runs this code whenever the mouse is clicked

		//For more screens for your game, just add more else ifs

		if(screen == 0){

		

		

		}else if (screen == 1){

	if (button2.isMouseOver()) button2.job ()
		if (button.isMouseOver ()) button.job ()
		if (button3.isMouseOver ()) button3.job ()

		

		}else if (screen==8){
		if (poll.isMouseOver()) poll.job()


		if (level.isMouseOver()) level.job()
	   
	   
}else if (screen==9){
if (bonuss.isMouseOver()) bonuss.job()

}
		 

	}, false);




	

	




	canvas.addEventListener ('mouseout', function(){pause = true;}, false);

	canvas.addEventListener ('mouseover', function(){pause = false;}, false);




      	canvas.addEventListener('mousemove', function(evt) {

        	var mousePos = getMousePos(canvas, evt);




		mx = mousePos.x;

		my = mousePos.y;

		updateMouse(mx,my);




      	}, false);







	function getMousePos(canvas, evt) 

	{

	        var rect = canvas.getBoundingClientRect();

        	return {

          		x: evt.clientX - rect.left,

          		y: evt.clientY - rect.top

        		};

      	}

      




	///////////////////////////////////

	//////////////////////////////////

	////////	KEY BOARD INPUT

	////////////////////////////////







	




	window.addEventListener('keydown', function(evt){

		var key = evt.keyCode;

		

	//p 80

	//r 82

	//1 49

	//2 50

	//3 51

	// up 38

	//down 40

	//right 39

	//left 37

	

	

		if(key==32){

			jump-=40
myloraSound.play()
		} if (key==82) {
		location.reload ();
		
		}  
		
		if(key==81){
		alert ("hi")
screen =9

		}
		


	}, false); //End the event listener




	window.addEventListener('keyup', function(evt){

		var key = evt.keyCode;

		

	//p 80

	//r 82

	//1 49

	//2 50

	//3 51

	// up 38

	//down 40

	//right 39

	//left 37

	

	

		

























		

	}, false); //End the event listener




	




})