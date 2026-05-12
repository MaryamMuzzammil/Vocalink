import React, { useEffect, useRef } from 'react';

interface VoiceVisualizerProps {
  isListening: boolean;
}

const VoiceVisualizer: React.FC<VoiceVisualizerProps> = ({ isListening }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let offset = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const width = canvas.width;
      const height = canvas.height;
      const centerY = height / 2;
      
      // Draw 3 layers of waves
      const drawWave = (color: string, amplitude: number, frequency: number, speed: number) => {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        
        for (let x = 0; x < width; x++) {
          const y = centerY + Math.sin(x * frequency + offset * speed) * amplitude * (isListening ? 1 : 0.2);
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      };

      drawWave('rgba(170, 59, 255, 0.5)', 20, 0.02, 0.1);
      drawWave('rgba(192, 132, 252, 0.3)', 15, 0.015, -0.08);
      drawWave('rgba(139, 92, 246, 0.2)', 10, 0.03, 0.15);

      offset += 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isListening]);

  return (
    <div className="relative w-full h-32 flex items-center justify-center overflow-hidden rounded-2xl glass mb-6">
      <canvas 
        ref={canvasRef} 
        width={600} 
        height={128} 
        className="w-full h-full"
      />
      {!isListening && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[1px]">
          <span className="text-sm font-medium text-white/40 uppercase tracking-widest">Idle</span>
        </div>
      )}
    </div>
  );
};

export default VoiceVisualizer;
