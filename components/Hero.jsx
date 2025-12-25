"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;

    // Basic intro animation (we'll enhance later)
    gsap.from(el, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <section ref={heroRef} className="hero">
      <h1>SHIVANSH</h1>
      <p>curious ux designer shaping digital experience with a smile :)</p>
    </section>
  );
}
