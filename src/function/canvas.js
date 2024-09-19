import React, { useRef, useEffect, useContext } from "react";
import { ThemeContext } from "../context/themeContext";
export default function CanvasBackground() {
    const { theme, fontColor } = useContext(ThemeContext);
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        class Circle {
            constructor(x, y, radius, speed, color) {
                this.x = x;
                this.y = y;
                this.radius = radius;
                this.angle = 0;
                this.speed = speed;
                this.color = color;
                this.rotationSpeed = .01;
            }

            draw() {
                // Kreis rotieren und positionieren
                const rotatedX = this.x + Math.cos(this.angle) * 20;

                const rotatedY = this.y + Math.sin(this.angle) * 20;

                // Blur-Filter hinzufügen
                // ctx.filter = 'blur(0.1rem)';

                ctx.beginPath();
                ctx.arc(rotatedX, rotatedY, this.radius, 0, Math.PI * 2);

                // ctx.strokeStyle = this.color;
                // ctx.lineWidth = 2;  // Dicke des Rands
                // ctx.stroke();  // Nur den Rand zeichnen

                ctx.fillStyle = this.color;
                ctx.fill();

                ctx.closePath();
            }

            update() {
                // Position des Kreises im Viewport ändern
                this.x += this.speed.x;
                this.y += this.speed.y;

                // Bildschirmgrenzen überprüfen
                if (this.x - this.radius < 0 || this.x + this.radius > canvas.width) {
                    this.speed.x *= -1; // Richtung umkehren
                }
                if (this.y - this.radius < 0 || this.y + this.radius > canvas.height) {
                    this.speed.y *= -1; // Richtung umkehren
                }

                // Kreis rotieren lassen
                this.angle += this.rotationSpeed;

                // Kreis zeichnen
                this.draw();
            }
        }
        // Array von Kreisen erstellen
        const circles = [];
        const handleCircle = (color) => {
            for (let i = 0; i < 5; i++) {
                const radius = 80;
                const x = Math.random() * (canvas.width - radius * 2) + radius;
                const y = Math.random() * (canvas.height - radius * 2) + radius;
                const speed = {
                    x: (Math.random() - 0.5) * 4,
                    y: (Math.random() - 0.5) * 4
                };
                circles.push(new Circle(x, y, radius, speed, color));
            };
        }
        handleCircle('#ff9800');
        handleCircle(theme);
        //        

        // Animationsschleife
        function animate() {
            ctx.fillStyle = fontColor;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Kreise aktualisieren und zeichnen
            circles.forEach(circle => {
                circle.update();
            });

            requestAnimationFrame(animate); // Schleife wiederholen
        }

        animate();
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [][theme]);
    return <canvas ref={canvasRef} />
}
