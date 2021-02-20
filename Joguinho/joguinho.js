

var playerAltura, playerLargura, playerX, velocidadeplayer,
ballDiametro, ballx, ballY, velBall,scoore;


	function inicializar(){
		playerAltura = 15;
		playerLargura = 90;
		velocidadeplayer = 20;

		playerX = (canvas.width - playerLargura)/2;

		ballDiametro = 10;
		ballx = Math.random() * 600;
		ballY = -10;
		velBall = 10;
		canvas = document.getElementById("canvas");
		context = canvas.getContext("2d");
		scoore = 0;

		context.fillRect(playerX, canvas.height - playerAltura, playerLargura, playerAltura);


		document.addEventListener('keydown',keyDown);
		setInterval(gameLoop, 30);

} 


		function keyDown(tecla){
			if (tecla.keyCode == 37){
					if (playerX > 0){
							playerX -= velocidadeplayer;
					}
			}

			if (tecla.keyCode == 39){
				if (playerX < (canvas.width - playerLargura)){
					playerX += velocidadeplayer;

				}
			}

	context.fillRect(playerX, canvas.height - playerAltura, playerLargura, playerAltura);


		}

	function gameLoop(){
		context.clearRect(0,0, canvas.width, canvas.height);
		context.fillRect(playerX, canvas.height - playerAltura, playerLargura, playerAltura);

		if (ballY <= canvas.height) {
			ballY += velBall
		}
		else{
			ballx = Math.random() * 600;
		ballY = -10;
		}


		context.beginPath();
		context.arc(ballx, ballY, ballDiametro, 0, Math.PI * 2,true);
		context.fill()


		if (ballx > playerX && ballx < (playerX + playerLargura) && ballY >= canvas.height - playerAltura)  {
			scoore++;
		}
		context.font = "30pt Comics Sans MS";
		context.fillText("Pontos: "+ scoore, 0, 50);

	}





