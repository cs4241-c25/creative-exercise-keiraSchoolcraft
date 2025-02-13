import { useState } from "react";

export default function Home() {
  const [position, setPosition] = useState({ x: 25, y: 25 });
  const [size, setSize] = useState(50);

  const movePolygon = () => {
    const maxX = 100 - size;
    const maxY = 100 - size * Math.sin(Math.PI / 3);

    setPosition({
      x: Math.max(0, Math.min(maxX, Math.random() * 100)),
      y: Math.max(0, Math.min(maxY, Math.random() * 100)),
    });
  };

  const resizePolygon = () => {
    setSize(Math.max(20, Math.min(80, Math.random() * 60 + 20)));
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-900 overflow-hidden">
      <div className="flex-grow flex items-center justify-center w-full">
        <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" className="w-full h-full max-h-[80vh]">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: "red", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "blue", stopOpacity: 1 }} />
            </linearGradient>
          </defs>

          <polygon
            points={`${position.x},${position.y} ${position.x + size},${position.y} ${position.x + size / 2},${position.y + size}`}
            fill="url(#grad1)"
            stroke="black"
            strokeWidth="2"
          />

          <circle cx="50" cy="80" r="10">
            <animate
              attributeName="r"
              from="5"
              to="15"
              dur="1s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>

      <div className="absolute bottom-5 flex space-x-4">
        <button onClick={movePolygon} className="p-2 bg-blue-500 text-white rounded">
          Move Polygon
        </button>
        <button onClick={resizePolygon} className="p-2 bg-green-500 text-white rounded">
          Resize Polygon
        </button>
      </div>
    </div>
  );
}
