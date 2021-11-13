(function () {
    jQuery(function () {
        var H, Particle, W, animateParticles, canvas, clearCanvas, colorArray, createParticles, ctx, drawParticles, initParticleSystem, particleCount, particles, updateParticles;
        Particle = function () {
            this.color = colorArray[Math.floor((Math.random() * 5) + 1)];
            this.x = Math.random() * W;
            this.y = Math.random() * H;
            this.direction = {
                x: -1 + Math.random() * 2,
                y: -1 + Math.random() * 1
            };
            this.vx = 1 * Math.random() + .05;
            this.vy = 1 * Math.random() + .05;
            this.radius = .9 * Math.random() + 1;
            this.move = function () {
                this.x += this.vx * this.direction.x;
                this.y += this.vy * this.direction.y;
            };
            this.changeDirection = function (axis) {
                this.direction[axis] *= -1;
            };
            this.draw = function () {
                ctx.beginPath();
                ctx.fillStyle = this.color;
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                ctx.fill();
            };
            this.boundaryCheck = function () {
                if (this.x >= W) {
                    this.x = W;
                    this.changeDirection("x");
                } else if (this.x <= 0) {
                    this.x = 0;
                    this.changeDirection("x");
                }
                if (this.y >= H) {
                    this.y = H;
                    this.changeDirection("y");
                } else if (this.y <= 0) {
                    this.y = 0;
                    this.changeDirection("y");
                }
            };

            var self = this;

            function setRadius(value) {
                self.radius = value;
            }

            function resize(event) {
                W = $(window).width();
                self.x = Math.random() * W;
                if (W > 600) {
                    setRadius(.9 * Math.random() + 1);
                } else {
                    setRadius(.9 * Math.random() + 0.1);
                }
            }
            
            resize();
            $(window).on('resize', resize);
        };
        clearCanvas = function () {
            ctx.clearRect(0, 0, W, H);
        };
        createParticles = function () {
            var i, p;
            i = particleCount - 1;
            while (i >= 0) {
                p = new Particle();
                particles.push(p);
                i--;
            }
        };
        drawParticles = function () {
            var i, p;
            i = particleCount - 1;
            while (i >= 0) {
                p = particles[i];
                p.draw();
                i--;
            }
        };
        updateParticles = function () {
            var i, p;
            i = particles.length - 1;
            while (i >= 0) {
                p = particles[i];
                p.move();
                p.boundaryCheck();
                i--;
            }
        };
        initParticleSystem = function () {
            createParticles();
            drawParticles();
        };
        animateParticles = function () {
            clearCanvas();
            drawParticles();
            updateParticles();
            requestAnimationFrame(animateParticles);
        };
        W = void 0;
        H = void 0;
        canvas = void 0;
        ctx = void 0;
        particleCount = 450;
        particles = [];
        colorArray = ["rgba(2,114,179,.9)", "rgba(2,114,179,.4)", "rgba(2,114,179,.65)", "rgba(2,114,179,.1)", "rgba(2,114,179,.8)"];
        W = window.innerWidth;
        H = jQuery('.fullscreen-cover').height();
        canvas = jQuery("#headerballs").get(0);
        canvas.width = W;
        canvas.height = H;
        ctx = canvas.getContext("2d");
        initParticleSystem();
        requestAnimationFrame(animateParticles);
        function resize(event) {
            var w = $(window).width();
            if (w > 600) {
               particleCount = 450;
            } else {
              particleCount = 450;
            }
            canvas.width = w;
        }
        resize();
        $(window).on('resize', resize);
    });
}).call(this);