import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

export const HeroGlobe: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = width; // Keep it square for aspect ratio
    const canvas = canvasRef.current;
    
    // Set high DPI
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const context = canvas.getContext('2d');
    if (!context) return;
    context.scale(dpr, dpr);

    // Projection setup - Orthographic for that clean technical look
    const projection = d3.geoOrthographic()
      .scale(width / 2.5)
      .translate([width / 2, height / 2])
      .clipAngle(90);

    const path = d3.geoPath()
      .projection(projection)
      .context(context);

    // Generate graticules (grid lines)
    const graticule = d3.geoGraticule10();
    
    // Random "nodes" data
    const nodes = d3.range(20).map(() => ({
      type: "Point",
      coordinates: [Math.random() * 360 - 180, Math.random() * 180 - 90]
    }));

    let rotation = 0;
    let isMounted = true;

    const render = () => {
      if (!isMounted) return;
      rotation += 0.15; // Slow rotation
      projection.rotate([rotation, -15]);

      context.clearRect(0, 0, width, height);

      // 1. Draw Sphere Fill (Darkness)
      context.beginPath();
      path({ type: "Sphere" } as any);
      context.fillStyle = "rgba(10, 12, 16, 0.4)"; // Tinted interior
      context.fill();

      // 2. Draw Graticules (The fine lines)
      context.beginPath();
      path(graticule);
      context.lineWidth = 0.5;
      context.strokeStyle = "rgba(74, 222, 128, 0.15)"; // Fresh green, very transparent
      context.stroke();

      // 3. Draw Sphere Border (Crisp edge)
      context.beginPath();
      path({ type: "Sphere" } as any);
      context.lineWidth = 1;
      context.strokeStyle = "rgba(74, 222, 128, 0.3)"; 
      context.stroke();

      // 4. Draw Nodes (Compute points)
      nodes.forEach((node: any) => {
        const [x, y] = projection(node.coordinates) || [0, 0];
        // Check if visible (not clipped)
        // A simple check is using d3 geoDistance or checking if path returns output
        // For performance in this simple loop, we just rely on path drawing
        context.beginPath();
        path(node);
        // Only fill if it's on the visible side
        if (path.area(node) > 0 || true) { // path handles clipping mostly
           context.fillStyle = "rgba(74, 222, 128, 0.8)";
           context.fill();
           
           // Glow for nodes
           context.beginPath();
           context.arc(x, y, 4, 0, 2 * Math.PI);
           context.fillStyle = "rgba(74, 222, 128, 0.2)";
           context.fill();
        }
      });

      requestAnimationFrame(render);
    };

    render();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full aspect-square max-w-[600px] mx-auto opacity-90 hover:opacity-100 transition-opacity duration-700">
      <div className="absolute inset-0 bg-fresh-400/5 rounded-full blur-3xl transform scale-75 animate-pulse-slow"></div>
      <canvas ref={canvasRef} className="relative z-10 w-full h-full" />
    </div>
  );
};
