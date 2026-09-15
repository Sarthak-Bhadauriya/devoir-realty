'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const circle = circleRef.current;
    if (!dot || !circle) return;

    let mouseX = 0;
    let mouseY = 0;
    let circleX = 0;
    let circleY = 0;
    let animFrameId: number;

    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Dot follows instantly
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    };

    const animate = () => {
      // Circle follows with lag (lerp)
      circleX = lerp(circleX, mouseX, 0.12);
      circleY = lerp(circleY, mouseY, 0.12);

      circle.style.left = `${circleX}px`;
      circle.style.top = `${circleY}px`;

      animFrameId = requestAnimationFrame(animate);
    };

    const onMouseEnterHoverable = () => {
      dot.classList.add('cursor-hover');
      circle.classList.add('cursor-hover');
    };

    const onMouseLeaveHoverable = () => {
      dot.classList.remove('cursor-hover');
      circle.classList.remove('cursor-hover');
    };

    // Attach to interactive elements
    const attachHoverListeners = () => {
      const hoverables = document.querySelectorAll(
        'a, button, [role="button"], .property-card, .service-card, input, select, textarea'
      );
      hoverables.forEach((el) => {
        el.addEventListener('mouseenter', onMouseEnterHoverable);
        el.addEventListener('mouseleave', onMouseLeaveHoverable);
      });
    };

    document.addEventListener('mousemove', onMouseMove);
    animate();
    attachHoverListeners();

    // Re-attach when DOM changes
    const observer = new MutationObserver(attachHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animFrameId);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={circleRef} className="cursor-circle" />
    </>
  );
}
