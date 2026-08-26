'use client'

import BullpupAwardCard from "./bullpup-award-card";

export function HeroSection() {
  return (
    <section id="top" className="hero">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/others/rockface block wall.jpg"
          alt="Craftsperson laying bricks"
          className="animate-image-zoom h-full w-full object-cover"
        />

        <div className="hero-wash absolute inset-0" />
      </div>

      <div className="container hero-content relative z-10 flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
        <div className="hero-copy self-start lg:sticky lg:top-20">
          <h1 className="opacity-0 animate-fade-in-up">
            STRONG WALLS,
            <br />
            LONG LASTING BRICKWORK
          </h1>

          <p className="opacity-0 animate-fade-in-up text-black!">
            Specializing in restoration, renovations, and new builds with
            unmatched attention to detail. Built on a foundation of structural
            integrity and artisanal precision.
          </p>

          <div className="button-row opacity-0 animate-fade-in-up [animation-delay:400ms]">
            <a className="button" href="#contact">
              Get a Quote
            </a>

            <a className="button button-outline" href="#gallery">
              View Our Work
            </a>
          </div>
        </div>

        {/* =====================================================
            RIGHT: AWARD CARD
        ===================================================== */}
        <div className="flex w-full max-w-[420px] flex-col gap-4 self-center opacity-0 animate-fade-in-from-right [animation-delay:600ms] lg:self-start">
          <BullpupAwardCard />
        </div>
      </div>
    </section>
  );
}