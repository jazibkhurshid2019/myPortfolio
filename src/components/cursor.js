import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Cursor = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 30px; /* Adjust size */
  height: 30px; /* Adjust size */
  background-image: url("./favIcon.png"); /* Use correct path */
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: transform 150ms ease-out, background 200ms;
  z-index: 9999;
  mix-blend-mode: difference;

  &.hovered {
    transform: translate(-50%, -50%) scale(2);
  }

  &.clicked {
    transform: translate(-50%, -50%) scale(0.8);
  }
`;

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Hide the default cursor
    document.body.style.cursor = "none";

    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mousedown", () => setIsClicked(true));
      document.addEventListener("mouseup", () => setIsClicked(false));

      document.querySelectorAll("a, button, .hover-target").forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovered(true));
        el.addEventListener("mouseleave", () => setIsHovered(false));
      });
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove);
    };

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    addEventListeners();
    return () => {
      removeEventListeners();
      document.body.style.cursor = "default"; // Reset cursor when component is unmounted
    };
  }, []);

  return (
    <Cursor
      className={`${isHovered ? "hovered" : ""} ${isClicked ? "clicked" : ""}`}
      style={{ top: `${position.y}px`, left: `${position.x}px` }}
    />
  );
};

export default CustomCursor;
