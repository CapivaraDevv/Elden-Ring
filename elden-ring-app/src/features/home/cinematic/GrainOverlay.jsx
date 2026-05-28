import { useEffect, useRef } from "react";

const SIZE = 256;
const FRAME_COUNT = 6;
const FPS = 8;
const INTERVAL = 1000 / FPS;

function buildFrames() {
  return Array.from({ length: FRAME_COUNT }, () => {
    const offscreen = document.createElement("canvas");
    offscreen.width = SIZE;
    offscreen.height = SIZE;
    const ctx = offscreen.getContext("2d");
    const imageData = ctx.createImageData(SIZE, SIZE);
    const { data } = imageData;
    for (let i = 0; i < data.length; i += 4) {
      const v = (Math.random() * 255) | 0;
      data[i] = data[i + 1] = data[i + 2] = v;
      data[i + 3] = 20;
    }
    ctx.putImageData(imageData, 0, 0);
    return offscreen;
  });
}

export default function GrainOverlay() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = SIZE;
    canvas.height = SIZE;
    const ctx = canvas.getContext("2d");

    const frames = buildFrames();
    let frameIdx = 0;
    let rafId;
    let lastTime = 0;

    ctx.drawImage(frames[0], 0, 0);

    const draw = (timestamp) => {
      if (timestamp - lastTime >= INTERVAL) {
        lastTime = timestamp;
        frameIdx = (frameIdx + 1) % FRAME_COUNT;
        ctx.clearRect(0, 0, SIZE, SIZE);
        ctx.drawImage(frames[frameIdx], 0, 0);
      }
      rafId = requestAnimationFrame(draw);
    };

    rafId = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 60,
        pointerEvents: "none",
        mixBlendMode: "overlay",
        opacity: 0.32,
      }}
    />
  );
}
