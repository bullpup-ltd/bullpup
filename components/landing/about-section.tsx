'use client'

import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} className="about overflow-hidden" id="about">
      <div className="container about-grid">

        <div className="about-heading">
          <h2 className={isVisible ? "animate-fade-in-from-left" : "opacity-0"}>
            Structural Integrity<br />Meets Artisanal Craft
          </h2>
          <div className="rule opacity-0 animate-fade-in-from-left [animation-delay:200ms]" />
        </div>

        <p className={isVisible ? "animate-fade-in-from-right [animation-delay:200ms]" : "opacity-0"}>
          Expert bricklaying services driven by an unwavering attention to detail. We specialize in block works, brick restoration, comprehensive renovations, and precision new builds. Expect nothing less than exceptional quality craftsmanship and robust, reliable service tailored for enduring structures.
        </p>

      </div>
    </section>
  )
}