
const canvas = document.getElementById('gameCanvas');
if (canvas) {
    const ctx = canvas.getContext('2d');

    // lona responsiva
    function resizeCanvas() {
        const parent = canvas.parentElement;
        canvas.width = parent.clientWidth;
        canvas.height = 300;
        // logica de reescalado
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas(); // iniciar

    // estadisticas
    let frameId;
    let score = 0;
    let isPlaying = false;
    let gameSpeed = 5;

    // entidades
    const dino = {
        x: 50,
        y: 200,
        w: 30,
        h: 30,
        dy: 0,
        jumpForce: -12,
        gravity: 0.6,
        grounded: true
    };

    let obstacles = [];
    let spawnTimer = 0;

    // elementos de ui
    const scoreEl = document.getElementById('score-display');
    const startOverlay = document.getElementById('start-overlay');
    const startBtn = document.getElementById('start-btn');

    // logica del juego
    function startGame() {
        if (isPlaying) return;
        isPlaying = true;
        score = 0;
        gameSpeed = 5;
        obstacles = [];
        dino.y = 200;
        dino.dy = 0;
        startOverlay.style.display = 'none';
        loop();
    }

    function endGame() {
        if (score == 60) {
            gameOver();
        }
    }

    function gameOver() {
        isPlaying = false;
        cancelAnimationFrame(frameId);
        startOverlay.style.display = 'flex';
        startOverlay.querySelector('h3').innerText = "SYSTEM FAILURE (GAME OVER)";
        startOverlay.querySelector('p').innerText = `FINAL SCORE: ${score}`;
        startOverlay.querySelector('button').innerText = "REINICIAR SISTEMA";
    }

    function update() {
        // fisicas
        dino.dy += dino.gravity;
        dino.y += dino.dy;

        // suelo
        if (dino.y > 250) {
            dino.y = 250;
            dino.dy = 0;
            dino.grounded = true;
        } else {
            dino.grounded = false;
        }

        // generacion
        spawnTimer++;
        if (spawnTimer > Math.random() * 50 + (1000 / gameSpeed)) { // aleatorio
            obstacles.push({
                x: canvas.width,
                y: 250,
                w: 30,
                h: 30
            });
            spawnTimer = 0;
        }

        // obstaculos
        for (let i = obstacles.length - 1; i >= 0; i--) {
            let obs = obstacles[i];
            obs.x -= gameSpeed;

            // colision
            if (
                dino.x < obs.x + obs.w &&
                dino.x + dino.w > obs.x &&
                dino.y < obs.y + obs.h &&
                dino.y + dino.h > obs.y
            ) {
                gameOver();
            }

            // limpieza
            if (obs.x + obs.w < 0) {
                obstacles.splice(i, 1);
                score += 10;
                scoreEl.innerText = 'SCORE: ' + score;
                gameSpeed += 0.005; // acelerar
            }
        }
    }

    function draw() {
        // limpiar
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // piso
        ctx.strokeStyle = '#004400';
        ctx.beginPath();
        ctx.moveTo(0, 280);
        ctx.lineTo(canvas.width, 280);
        ctx.stroke();

        // dinosaurio verde
        ctx.fillStyle = '#00FF00';
        ctx.fillRect(dino.x, dino.y, dino.w, dino.h);

        // obstaculos
        ctx.fillStyle = '#ff3333'; // rojo alto contraste
        obstacles.forEach(obs => {
            ctx.fillRect(obs.x, obs.y, obs.w, obs.h);
        });
    }

    function loop() {
        if (!isPlaying) return;
        update();
        draw();
        frameId = requestAnimationFrame(loop);
    }

    // controles
    startBtn.addEventListener('click', startGame);

    window.addEventListener('keydown', e => {
        if (e.code === 'Space') {
            e.preventDefault();
            if (!isPlaying && startOverlay.style.display !== 'none') {
                startGame();
            } else if (dino.grounded) {
                dino.dy = dino.jumpForce;
            }
        }
    });

    canvas.addEventListener('touchstart', e => {
        e.preventDefault();
        if (!isPlaying && startOverlay.style.display !== 'none') {
            startGame();
        } else if (dino.grounded) {
            dino.dy = dino.jumpForce;
        }
    });
}
