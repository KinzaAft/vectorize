"use client"; // Required for client-side interactivity in Next.js
import { useState, useRef, useEffect } from "react";

export default function ComparisonSlider() {
  const containerRef = useRef(null);
  const dividerRef = useRef(null);
  const resizeRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const divider = dividerRef.current;
    const resize = resizeRef.current;

    if (!container || !divider || !resize) return;

    const handleMouseDown = (e) => {
      setIsDragging(true);
      handleMove(e);
    };

    const handleTouchStart = (e) => {
      setIsDragging(true);
      handleMove(e.touches[0]);
    };

    const handleMove = (e) => {
      if (!isDragging) return;

      const containerRect = container.getBoundingClientRect();
      const offsetX = e.clientX - containerRect.left;
      const containerWidth = containerRect.width;
      const dividerWidth = divider.offsetWidth;

      // Calculate new position and width
      let newLeft = offsetX - dividerWidth / 2;
      newLeft = Math.max(0, Math.min(newLeft, containerWidth - dividerWidth));
      const newWidth = ((newLeft + dividerWidth / 2) / containerWidth) * 100 + "%";

      // Update styles
      divider.style.left = newWidth;
      resize.style.width = newWidth;
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
    };

    // Add event listeners
    divider.addEventListener("mousedown", handleMouseDown);
    divider.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchmove", (e) => {
      e.preventDefault(); // Prevent default touch behavior
      handleMove(e.touches[0]);
    });
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleTouchEnd);

    // Cleanup
    return () => {
      divider.removeEventListener("mousedown", handleMouseDown);
      divider.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      className="comparison-slider relative w-full h-[300px] overflow-hidden select-none"
    >
      {/* Background Image */}
      <img
        src="/ske1.jpg"
        alt="Before"
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
      />

      {/* Foreground Image */}
      <div
        ref={resizeRef}
        className="resize absolute top-0 left-0 h-full overflow-hidden"
        style={{ width: "50%" }}
      >
        <img
          src="/ski2.svg"
          alt="After"
          className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
        />
      </div>

      {/* Divider */}
      <div
        ref={dividerRef}
        className="divider absolute top-0 h-full w-[5px] bg-white opacity-80 cursor-ew-resize"
        style={{ left: "50%" }}
      >
        {/* Slider Handle */}
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 bg-white rounded-full shadow-lg border border-gray-300 flex items-center justify-center">
          ⬍
        </div>
      </div>
    </div>
  );
}