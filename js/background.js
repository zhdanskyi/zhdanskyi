/* --- FALLING DIGITAL DUST BACKGROUND --- */
(function () {
    const canvas = document.createElement('canvas');
    canvas.id = 'dust-canvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-9999'; // Behind everything
    canvas.style.pointerEvents = 'none';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height; // Start anywhere
            this.speed = Math.random() * 1.5 + 0.5; // Vertical speed
            this.size = Math.random() * 2 + 1; // Size variance
            this.color = Math.random() > 0.8 ? '#6d28d9' : '#00FF00'; // Purple accent or Neon Green
            this.alpha = Math.random() * 0.3 + 0.1; // Low opacity
        }

        update() {
            this.y += this.speed;

            // Reset when reaching bottom
            if (this.y > height) {
                this.y = -5;
                this.x = Math.random() * width;
                this.speed = Math.random() * 1.5 + 0.5;
            }
        }

        draw() {
            ctx.fillStyle = this.color;
            ctx.globalAlpha = this.alpha;
            ctx.fillRect(this.x, this.y, this.size, this.size); // Square pixels
            ctx.globalAlpha = 1.0;
        }
    }

    function init() {
        resize();
        particles = [];
        const particleCount = Math.floor(width * 0.15); // Density
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', () => {
        resize();
        init();
    });

    init();
    animate();
})();
