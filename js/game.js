
const canvas = document.getElementById('gameCanvas');
if (canvas) {
    const ctx = canvas.getContext('2d');

    // --- Responsive Canvas ---
    function resizeCanvas() {
        const parent = canvas.parentElement;
        canvas.width = parent.clientWidth;
        canvas.height = 300;
        // Re-scale logic could go here if drawing depended heavily on absolute pixels
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas(); // Init

    // --- Stats ---
    let frameId;
    let score = 0;
    let isPlaying = false;
    let gameSpeed = 5;

    // --- Entities ---
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

    // --- UI Elements ---
    const scoreEl = document.getElementById('score-display');
    const startOverlay = document.getElementById('start-overlay');
    const startBtn = document.getElementById('start-btn');

    // --- Game Logic ---
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
        // Physics
        dino.dy += dino.gravity;
        dino.y += dino.dy;

        // Ground
        if (dino.y > 250) {
            dino.y = 250;
            dino.dy = 0;
            dino.grounded = true;
        } else {
            dino.grounded = false;
        }

        // Spawn
        spawnTimer++;
        if (spawnTimer > Math.random() * 50 + (1000 / gameSpeed)) { // Rough random timer
            obstacles.push({
                x: canvas.width,
                y: 250,
                w: 30,
                h: 30
            });
            spawnTimer = 0;
        }

        // Obstacles
        for (let i = obstacles.length - 1; i >= 0; i--) {
            let obs = obstacles[i];
            obs.x -= gameSpeed;

            // Collision
            if (
                dino.x < obs.x + obs.w &&
                dino.x + dino.w > obs.x &&
                dino.y < obs.y + obs.h &&
                dino.y + dino.h > obs.y
            ) {
                gameOver();
            }

            // Cleanup & Score
            if (obs.x + obs.w < 0) {
                obstacles.splice(i, 1);
                score += 10;
                scoreEl.innerText = 'SCORE: ' + score;
                gameSpeed += 0.005; // Slow accel
            }
        }
    }

    function draw() {
        // Clear
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Floor
        ctx.strokeStyle = '#004400';
        ctx.beginPath();
        ctx.moveTo(0, 280);
        ctx.lineTo(canvas.width, 280);
        ctx.stroke();

        // Dino (Green)
        ctx.fillStyle = '#00FF00';
        ctx.fillRect(dino.x, dino.y, dino.w, dino.h);

        // Obstacles (Red/Code Blocks)
        ctx.fillStyle = '#ff3333'; // Red for danger/bugs in this mode for contrast
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

    // --- Inputs ---
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
