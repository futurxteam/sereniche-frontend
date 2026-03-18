import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * A reusable component that adds parallax scroll effect to an image.
 * 
 * @param {string} src - The image source URL.
 * @param {string} alt - The alt text for the image.
 * @param {string} className - Optional className for the image itself.
 * @param {string} containerClass - Optional className for the wrapping container.
 * @param {number} amount - The amount of parallax movement (default 60px).
 */
export default function ParallaxImage({ src, alt, className = "", containerClass = "", amount = 60 }) {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-amount, amount]);

  return (
    <div 
      ref={ref} 
      className={containerClass} 
      style={{ overflow: 'hidden' }}
    >
      <motion.img
        src={src}
        alt={alt}
        className={className}
        style={{ 
          y,
          height: `calc(100% + ${amount * 2}px)`,
          top: -amount,
          position: 'absolute',
          left: 0,
          width: '100%',
          objectFit: 'cover'
        }}
      />
    </div>
  );
}
