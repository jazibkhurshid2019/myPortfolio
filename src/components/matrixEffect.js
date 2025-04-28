import React, { useRef, useEffect } from "react";

// Matrix effect canvas component
const MatrixEffect = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Ensure that the canvas context is valid
    if (!ctx) {
      console.error("Canvas context not found!");
      return;
    }

    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+=-";
    const fontSize = 18;
    let columns = Math.floor(canvas.width / fontSize); // Number of columns for the effect
    const drops = Array(columns).fill(0); // Array to hold the drop positions for each column

    const drawMatrix = () => {
      // Draw semi-transparent background to create a fading effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#0F0"; // Green color (Matrix style)
      ctx.font = `${fontSize}px monospace`;

      // Draw the characters at each drop position
      for (let i = 0; i < drops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(text, x, y);

        // Reset the drop to the top once it goes beyond the height of the canvas
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Increment drop position
        drops[i]++;
      }
    };

    // Handle resizing of the canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.floor(canvas.width / fontSize); // Recalculate columns after resize
    };

    // Resize canvas on window resize
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas(); // Initialize canvas size

    // Start drawing the matrix effect at regular intervals
    const interval = setInterval(drawMatrix, 30);

    // Cleanup when the component is unmounted
    return () => {
      clearInterval(interval); // Stop the animation
      window.removeEventListener("resize", resizeCanvas); // Cleanup resize listener
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 1,
        pointerEvents: "none", // Ensure canvas doesn't block interaction
      }}
    />
  );
};

export default MatrixEffect;
