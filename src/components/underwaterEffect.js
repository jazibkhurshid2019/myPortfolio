import { useRef, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import styled from "styled-components";

const Canvas = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 1;
`;

const RippleCanvas = () => {
  const canvasRef = useRef(null);
  const ripples = useRef([]);
  const requestRef = useRef();
  const theme = useTheme();
  const primaryColor = theme.palette.cursor.primary;

  // Helper to convert HEX to RGBA
  const hexToRgba = (hex, alpha) => {
    let r = 0,
      g = 0,
      b = 0;
    if (hex.length === 4) {
      r = parseInt(hex[1] + hex[1], 16);
      g = parseInt(hex[2] + hex[2], 16);
      b = parseInt(hex[3] + hex[3], 16);
    } else if (hex.length === 7) {
      r = parseInt(hex[1] + hex[2], 16);
      g = parseInt(hex[3] + hex[4], 16);
      b = parseInt(hex[5] + hex[6], 16);
    }
    return `rgba(${r},${g},${b},${alpha})`;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleMouseMove = (e) => {
      ripples.current.push({
        x: e.clientX,
        y: e.clientY,
        radius: 0,
        alpha: 1,
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ripples.current.forEach((ripple, index) => {
        ripple.radius += 2;
        ripple.alpha -= 0.02;

        if (ripple.alpha <= 0) {
          ripples.current.splice(index, 1);
          return;
        }

        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.strokeStyle = hexToRgba(primaryColor, ripple.alpha); // always use fresh primaryColor
        ctx.lineWidth = 2;
        ctx.stroke();
      });

      requestRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, [primaryColor]); // still depends on color — but only updates color usage safely.

  return <Canvas ref={canvasRef} />;
};

export default RippleCanvas;
